import React, { useMemo, useState, useCallback } from 'react';
import isNull from 'lodash/isNull';
import { useNavigate } from 'react-router-dom';
import { Position } from '@voltz/v1-sdk';

import { AMMProvider } from '@components/contexts';
import { routes } from '@routes';
import { useWallet, AugmentedAMM } from '@hooks';
import {
  MintBurnForm,
  MintBurnFormProps,
  HandleSubmitMintBurnFormArgs,
  PendingTransaction,
} from '@components/interface';
import { updateFixedRate } from './utilities';

export type ConnectedMintBurnFormProps = {
  amm: AugmentedAMM | null;
  position: Position | null;
  onReset: () => void;
};

const ConnectedMintBurnForm: React.FunctionComponent<ConnectedMintBurnFormProps> = ({
  amm: defaultAMM,
  position,
  onReset,
}) => {
  const amm = useMemo(() => {
    if (!isNull(defaultAMM)) {
      return defaultAMM;
    }

    if (position) {
      return position.amm as AugmentedAMM;
    }

    return undefined;
  }, [defaultAMM, position]);
  const { account } = useWallet();
  const navigate = useNavigate();
  const [fixedLow, setFixedLow] = useState<MintBurnFormProps['fixedLow']>();

  const handleSetFixedLow = useCallback(
    updateFixedRate({ amm, fixedRate: fixedLow, setFixedRate: setFixedLow }),
    [amm, fixedLow, setFixedLow],
  );

  const [fixedHigh, setFixedHigh] = useState<MintBurnFormProps['fixedHigh']>();
  const handleSetFixedHigh = useCallback(
    updateFixedRate({ amm, fixedRate: fixedHigh, setFixedRate: setFixedHigh }),
    [amm, fixedHigh, setFixedHigh],
  );
  const [notional, setNotional] = useState<MintBurnFormProps['notional']>();
  const [margin, setMargin] = useState<MintBurnFormProps['margin']>();
  const [submitting, setSubmitting] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);
  const handleSubmit = async (args: HandleSubmitMintBurnFormArgs) => {
    setSubmitting(true);
    setTransactionPending(true);

    if (amm && account) {
      try {
        const result = await amm.mint({
          recipient: account,
          fixedLow: args.fixedLow || 1,
          fixedHigh: args.fixedHigh || 2,
          notional: args.notional || 1,
          margin: args.margin || 1,
        });

        console.debug(result);
      } catch (mintError) {}
    }

    setTransactionPending(false);
  };
  const handleComplete = () => {
    setSubmitting(false);
    onReset();
    navigate(`/${routes.LP_FARM}`);
  };

  if (!amm) {
    return null;
  }

  if (submitting) {
    return (
      <PendingTransaction
        loading={transactionPending}
        protocol={amm.protocol}
        fixedApr={amm.fixedApr}
        notional={notional}
        margin={margin}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <AMMProvider amm={amm}>
      <MintBurnForm
        protocol={amm.protocol}
        fixedApr={amm.fixedApr}
        startDate={amm.startDateTime}
        endDate={amm.endDateTime}
        fixedLow={fixedLow}
        onChangeFixedLow={handleSetFixedLow}
        fixedHigh={fixedHigh}
        onChangeFixedHigh={handleSetFixedHigh}
        notional={notional}
        onChangeNotional={setNotional}
        margin={margin}
        onChangeMargin={setMargin}
        onSubmit={handleSubmit}
        onCancel={onReset}
      />
    </AMMProvider>
  );
};

export default ConnectedMintBurnForm;

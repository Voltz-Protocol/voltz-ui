import React, { useEffect } from 'react';
import { useIMask } from 'react-imask';

import { Input } from '../../atomic';

export type MaskedIntegerFieldProps = Omit<React.ComponentProps<typeof Input>, 'onChange'> & {
  affix: string;
  onChange?: (value: string) => void;
};

const MaskedIntegerField: React.FunctionComponent<MaskedIntegerFieldProps> = ({
  affix,
  value: externalValue,
  onChange,
  ...props
}) => {
  const mask = `nn ${(affix || '').replaceAll('a', '\\a')}`;
  const { ref, unmaskedValue } = useIMask({
    mask,
    lazy: false,
    blocks: {
      nn: {
        mask: Number,
        scale: 2,
        signed: false,
        thousandsSeparator: ',',
        padFractionalZeros: false,
        normalizeZeros: true,
        radix: ',',
        mapToRadix: ['.'],
      },
    },
  });

  useEffect(() => {
    if (onChange) {
      onChange(unmaskedValue);
    }
  }, [unmaskedValue, onChange]);

  return <Input {...props} inputRef={ref} />;
};

export default MaskedIntegerField;
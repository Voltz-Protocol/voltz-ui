import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VAMMStorage, VAMMStorageInterface } from "../VAMMStorage";
export declare class VAMMStorage__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<VAMMStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): VAMMStorage;
    connect(signer: Signer): VAMMStorage__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060838061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c975abb14602d575b600080fd5b60125460399060ff1681565b604051901515815260200160405180910390f3fea264697066735822122035a238c9b7816c977d2223de1e491178a994b73ab980d19268a84fc3c101d84564736f6c63430008090033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): VAMMStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VAMMStorage;
}
//# sourceMappingURL=VAMMStorage__factory.d.ts.map
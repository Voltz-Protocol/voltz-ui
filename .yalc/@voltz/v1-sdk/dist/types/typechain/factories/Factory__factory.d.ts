import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Factory, FactoryInterface } from "../Factory";
export declare class Factory__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_masterMarginEngine: string, _masterVAMM: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Factory>;
    getDeployTransaction(_masterMarginEngine: string, _masterVAMM: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Factory;
    connect(signer: Signer): Factory__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516115ed3803806115ed83398101604081905261002f916100b9565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100cb578182fd5b82516100d6816100f2565b60208401519092506100e7816100f2565b809150509250929050565b6001600160a01b038116811461010757600080fd5b50565b6114d4806101196000396000f3fe60806040523480156200001157600080fd5b50600436106200009a5760003560e01c80630e8a0648146200009f578063715018a614620000e55780638da5cb5b14620000f157806395858f98146200010a5780639fe1b3541462000121578063a389783e1462000135578063ca5183b71462000177578063db9b717014620001a3578063f2fde38b14620001ba578063febfe75e14620001d1575b600080fd5b620000b6620000b036600462000bb0565b620001e5565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b620000ef62000843565b005b620000fb62000885565b604051620000dc919062000c8a565b620000ef6200011b36600462000c1a565b62000894565b600154620000fb906001600160a01b031681565b620001666200014636600462000b3e565b600460209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001620000dc565b620000fb6200018836600462000c4c565b6003602052600090815260409020546001600160a01b031681565b620000ef620001b436600462000b7b565b62000992565b620000ef620001cb36600462000af9565b620009f2565b600254620000fb906001600160a01b031681565b6000808033620001f462000885565b6001600160a01b031614620002265760405162461bcd60e51b81526004016200021d9062000cc1565b60405180910390fd5b6001546040516000916001600160a01b031690620002449062000aeb565b62000250919062000c9e565b604051809103906000f0801580156200026d573d6000803e3d6000fd5b506002546040519192506000916001600160a01b0390911690620002919062000aeb565b6200029d919062000c9e565b604051809103906000f080158015620002ba573d6000803e3d6000fd5b5060405163eb990c5960e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90529192509083169063eb990c5990608401600060405180830381600087803b1580156200031957600080fd5b505af11580156200032e573d6000803e3d6000fd5b5050604051631b325b2160e31b81526001600160a01b03858116600483015260028a900b60248301528416925063d992d9089150604401600060405180830381600087803b1580156200038057600080fd5b505af115801562000395573d6000803e3d6000fd5b50506040516331d81ea760e21b81526001600160a01b038516925063c7607a9c9150620003c790849060040162000c8a565b600060405180830381600087803b158015620003e257600080fd5b505af1158015620003f7573d6000803e3d6000fd5b5050505060008990508a6001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200044457600080fd5b505afa15801562000459573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200047f919062000b1f565b6001600160a01b031614620004cd5760405162461bcd60e51b81526020600482015260136024820152720a8ded6cadce640c8de40dcdee840dac2e8c6d606b1b60448201526064016200021d565b6000816001600160a01b031663dd9d05d16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200050957600080fd5b505afa1580156200051e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000544919062000c6b565b60ff81166000908152600360205260408120549192506001600160a01b03909116908115620006d457816040516200057c9062000aeb565b62000588919062000c9e565b604051809103906000f080158015620005a5573d6000803e3d6000fd5b5060405163485cc95560e01b81526001600160a01b03878116600483015288811660248301529192509082169063485cc95590604401600060405180830381600087803b158015620005f657600080fd5b505af11580156200060b573d6000803e3d6000fd5b505060405163534d337560e01b81526001600160a01b038916925063534d337591506200063d90849060040162000c8a565b600060405180830381600087803b1580156200065857600080fd5b505af11580156200066d573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038416925063f2fde38b91506200069f90339060040162000c8a565b600060405180830381600087803b158015620006ba57600080fd5b505af1158015620006cf573d6000803e3d6000fd5b505050505b8c6001600160a01b03168e6001600160a01b03167f500781bba4ad6f1bf0c19c292590fadbc7485e159320b34f7f289a41bb2104bb8e8e8e8b8b888b604051620007609796959493929190968752602087019590955260029390930b60408601526001600160a01b039182166060860152811660808501521660a083015260ff1660c082015260e00190565b60405180910390a360405163f2fde38b60e01b81526001600160a01b0386169063f2fde38b906200079690339060040162000c8a565b600060405180830381600087803b158015620007b157600080fd5b505af1158015620007c6573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038916925063f2fde38b9150620007f890339060040162000c8a565b600060405180830381600087803b1580156200081357600080fd5b505af115801562000828573d6000803e3d6000fd5b50979a50959850909650505050505050955095509592505050565b336200084e62000885565b6001600160a01b031614620008775760405162461bcd60e51b81526004016200021d9062000cc1565b62000883600062000a9b565b565b6000546001600160a01b031690565b336200089f62000885565b6001600160a01b031614620008c85760405162461bcd60e51b81526004016200021d9062000cc1565b6001600160a01b038216620009185760405162461bcd60e51b81526020600482015260156024820152741b585cdd195c881998db481b5d5cdd08195e1a5cdd605a1b60448201526064016200021d565b60ff811660008181526003602090815260409182902080546001600160a01b031981166001600160a01b0388811691821790935584519290911680835292820152918201929092527f3b7fdd829c73ac5e9bb3826c82078b325cb172e3a07f7d8b9f715bce40862a7d9060600160405180910390a1505050565b3360008181526004602090815260408083206001600160a01b0387168085529252808320805460ff19168615159081179091559051909391927f3ab6a6aa00eb6098930ab1be82a402b963c135ffa8bd2ad34958569d6c7c9cc691a45050565b33620009fd62000885565b6001600160a01b03161462000a265760405162461bcd60e51b81526004016200021d9062000cc1565b6001600160a01b03811662000a8d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200021d565b62000a988162000a9b565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107828062000d1d83390190565b60006020828403121562000b0b578081fd5b813562000b188162000cf6565b9392505050565b60006020828403121562000b31578081fd5b815162000b188162000cf6565b6000806040838503121562000b51578081fd5b823562000b5e8162000cf6565b9150602083013562000b708162000cf6565b809150509250929050565b6000806040838503121562000b8e578182fd5b823562000b9b8162000cf6565b91506020830135801515811462000b70578182fd5b600080600080600060a0868803121562000bc8578081fd5b853562000bd58162000cf6565b9450602086013562000be78162000cf6565b935060408601359250606086013591506080860135600281900b811462000c0c578182fd5b809150509295509295909350565b6000806040838503121562000c2d578182fd5b823562000c3a8162000cf6565b9150602083013562000b708162000d0c565b60006020828403121562000c5e578081fd5b813562000b188162000d0c565b60006020828403121562000c7d578081fd5b815162000b188162000d0c565b6001600160a01b0391909116815260200190565b6001600160a01b0391909116815260406020820181905260009082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b038116811462000a9857600080fd5b60ff8116811462000a9857600080fdfe608060405260405161078238038061078283398101604081905261002291610307565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041f565b60008051602061073b8339815191521461007957634e487b7160e01b600052600160045260246000fd5b6100858282600061008e565b50505050610484565b610097836100c4565b6000825111806100a45750805b156100bf576100bd838361010460201b6100291760201c565b505b505050565b6100cd81610130565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610129838360405180606001604052806027815260200161075b602791396101f0565b9392505050565b610143816102c560201b6100551760201c565b6101aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cf60008051602061073b83398151915260001b6102cb60201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a1565b600080856001600160a01b03168560405161026a91906103d0565b600060405180830381855af49150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b5090925090506102bb8282866102ce565b9695505050505050565b3b151590565b90565b606083156102dd575081610129565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b81526004016101a191906103ec565b60008060408385031215610319578182fd5b82516001600160a01b038116811461032f578283fd5b60208401519092506001600160401b038082111561034b578283fd5b818501915085601f83011261035e578283fd5b8151818111156103705761037061046e565b604051601f8201601f19908116603f011681019083821181831017156103985761039861046e565b816040528281528860208487010111156103b0578586fd5b6103c1836020830160208801610442565b80955050505050509250929050565b600082516103e2818460208701610442565b9190910192915050565b602081526000825180602084015261040b816040850160208701610442565b601f01601f19169190910160400192915050565b60008282101561043d57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561045d578181015183820152602001610445565b838111156100bd5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104936000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c9cefa5721141ccbba7e827c4a512d824b3946fd8e83ff5ec7ac0e9e034d4a4a64736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a8f590c16519c633dbfa70fef24c69de7f31e8f306ce30d41323738143c8d07264736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Factory;
}
//# sourceMappingURL=Factory__factory.d.ts.map
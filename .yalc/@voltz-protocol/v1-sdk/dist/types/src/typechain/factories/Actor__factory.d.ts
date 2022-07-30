import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Actor, ActorInterface } from "../Actor";
export declare class Actor__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Actor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Actor;
    connect(signer: Signer): Actor__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610dd0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806302b660a81461009e5780631f2405b1146100de57806340283698146100f357806369696dbf146101065780637b4f532714610119578063840047eb1461012c578063cacdd7231461013f578063cc981dda14610152578063cf0aabe314610185578063e9ae4bc814610198578063eacb1f4c146101ab575b600080fd5b6100b16100ac366004610b0b565b6101cc565b604080519586526020860194909452928401919091526060830152608082015260a0015b60405180910390f35b6100f16100ec3660046108d6565b6102af565b005b6100f161010136600461082d565b61033b565b6100f1610114366004610bbb565b61041b565b6100f16101273660046108d6565b610480565b6100f161013a366004610811565b6104b2565b6100f161014d366004610951565b610529565b610165610160366004610a4a565b6105bd565b6040805194855260208501939093529183015260608201526080016100d5565b6100f1610193366004610873565b610686565b6100f16101a6366004610bbb565b610701565b6101be6101b93660046109ac565b61072e565b6040519081526020016100d5565b60408051630d241f8d60e21b815282516001600160a01b0390811660048301526020840151151560248301529183015160448201526060830151821660648201526080830151600290810b608483015260a0840151900b60a482015260c083015160c482015260009182918291829182918816906334907e349060e40160c060405180830381600087803b15801561026357600080fd5b505af1158015610277573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029b9190610c6f565b50939b929a50909850965090945092505050565b604051631f2f089360e01b81526001600160a01b03861690631f2f0893906102e1908790879087908790600401610cc3565b602060405180830381600087803b1580156102fb57600080fd5b505af115801561030f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103339190610c18565b505050505050565b6000836001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b15801561037657600080fd5b505afa15801561038a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ae9190610bfc565b604051630db9b71760e41b81526001600160a01b03858116600483015284151560248301529192509082169063db9b717090604401600060405180830381600087803b1580156103fd57600080fd5b505af1158015610411573d6000803e3d6000fd5b5050505050505050565b6040516355468a8b60e01b81526001600160a01b038416906355468a8b906104499085908590600401610cf6565b600060405180830381600087803b15801561046357600080fd5b505af1158015610477573d6000803e3d6000fd5b50505050505050565b604051635c6651a760e11b81526001600160a01b0386169063b8cca34e906102e1908790879087908790600401610cc3565b806001600160a01b031663ebc9b02e6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156104ed57600080fd5b505af1158015610501573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105259190610c18565b5050565b604051630b2b281f60e11b81526001600160a01b038281166004830152600285810b602484015284900b6044830152851690631656503e90606401602060405180830381600087803b15801561057e57600080fd5b505af1158015610592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b69190610c18565b5050505050565b604080516333bac73760e11b815282516001600160a01b0390811660048301526020840151602483015291830151821660448201526060830151600290810b60648301526080840151900b6084820152600091829182918291908716906367758e6e9060a40160a060405180830381600087803b15801561063d57600080fd5b505af1158015610651573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106759190610c30565b509299919850965090945092505050565b604051637717797f60e01b81526001600160a01b038581166004830152600285810b602484015284900b604483015260648201839052861690637717797f90608401600060405180830381600087803b1580156106e257600080fd5b505af11580156106f6573d6000803e3d6000fd5b505050505050505050565b60405162dd089d60e21b81526001600160a01b038416906303742274906104499085908590600401610cf6565b60408051630a691a4760e11b815282516001600160a01b0390811660048301526020840151600290810b60248401529284015190920b60448201526060830151606482015260808301511515608482015260a083015160a48201526000918416906314d2348e9060c401602060405180830381600087803b1580156107b257600080fd5b505af11580156107c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ea9190610c18565b9392505050565b8035801515811461080157600080fd5b919050565b803561080181610d8b565b600060208284031215610822578081fd5b81356107ea81610d73565b600080600060608486031215610841578182fd5b833561084c81610d73565b9250602084013561085c81610d73565b915061086a604085016107f1565b90509250925092565b600080600080600060a0868803121561088a578081fd5b853561089581610d73565b945060208601356108a581610d73565b935060408601356108b581610d8b565b925060608601356108c581610d8b565b949793965091946080013592915050565b600080600080600060a086880312156108ed578081fd5b85356108f881610d73565b9450602086013561090881610d73565b9350604086013561091881610d8b565b9250606086013561092881610d8b565b915060808601356001600160801b0381168114610943578182fd5b809150509295509295909350565b60008060008060808587031215610966578384fd5b843561097181610d73565b9350602085013561098181610d8b565b9250604085013561099181610d8b565b915060608501356109a181610d73565b939692955090935050565b60008082840360e08112156109bf578283fd5b83356109ca81610d73565b925060c0601f19820112156109dd578182fd5b506109e6610d0d565b60208401356109f481610d73565b81526040840135610a0481610d8b565b60208201526060840135610a1781610d8b565b604082015260808401356060820152610a3260a085016107f1565b608082015260c0939093013560a08401525092909150565b60008082840360c0811215610a5d578283fd5b8335610a6881610d73565b925060a0601f1982011215610a7b578182fd5b5060405160a081016001600160401b0381118282101715610aaa57634e487b7160e01b83526041600452602483fd5b6040526020840135610abb81610d73565b8152604084013560208201526060840135610ad581610d73565b60408201526080840135610ae881610d8b565b606082015260a0840135610afb81610d8b565b6080820152919491935090915050565b600080828403610100811215610b1f578283fd5b8335610b2a81610d73565b925060e0601f1982011215610b3d578182fd5b50610b46610d43565b6020840135610b5481610d73565b8152610b62604085016107f1565b6020820152606084013560408201526080840135610b7f81610d73565b606082015260a0840135610b9281610d8b565b6080820152610ba360c08501610806565b60a082015260e0939093013560c08401525092909150565b600080600060608486031215610bcf578081fd5b8335610bda81610d73565b9250602084013591506040840135610bf181610d73565b809150509250925092565b600060208284031215610c0d578081fd5b81516107ea81610d73565b600060208284031215610c29578081fd5b5051919050565b600080600080600060a08688031215610c47578283fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60008060008060008060c08789031215610c87578384fd5b865195506020870151945060408701519350606087015192506080870151915060a0870151610cb581610d8b565b809150509295509295509295565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b9182526001600160a01b0316602082015260400190565b60405160c081016001600160401b0381118282101715610d3d57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715610d3d57634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610d8857600080fd5b50565b8060020b8114610d8857600080fdfea2646970667358221220ceb51a5aa212501685c89af9fd4aada498801d69025e9171dbcacd6d7b62146c64736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ActorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Actor;
}
//# sourceMappingURL=Actor__factory.d.ts.map
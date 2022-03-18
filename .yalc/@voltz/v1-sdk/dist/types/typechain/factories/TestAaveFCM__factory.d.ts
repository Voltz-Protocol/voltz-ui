import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAaveFCM, TestAaveFCMInterface } from "../TestAaveFCM";
export declare class TestAaveFCM__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAaveFCM>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAaveFCM;
    connect(signer: Signer): TestAaveFCM__factory;
    static readonly bytecode = "0x60a06040523060601b6080523480156200001857600080fd5b50606354610100900460ff16620000365760635460ff161562000040565b62000040620000e5565b620000a85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b606354610100900460ff16158015620000cb576063805461ffff19166101011790555b8015620000de576063805461ff00191690555b5062000109565b6000620000fd306200010360201b620017c81760201c565b15905090565b3b151590565b60805160601c61316f6200013d600039600081816106da0152818161071a01528181610bc50152610c05015261316f6000f3fe6080604052600436106101255760003560e01c80624006e01461012a578063037422741461015a5780631119e4fe1461017c5780632495a599146101aa578063357d8b5e146101ca5780633659cfe6146101e85780634342891f1461017c578063485cc955146102085780634badfdfc146102285780634dd366bc146102485780634f1ef2861461026657806355468a8b146102795780635c975abb14610299578063715018a6146102bc5780637653f275146101ca5780638da5cb5b146102d157806392a88fa2146102e657806398f4b1b21461034f5780639a2f48f51461036d5780639b6b02bc146103c2578063c1ccfa68146103e0578063e098372c146103c2578063e9d337b814610248578063ebc9b02e14610400578063f2fde38b14610415575b600080fd5b34801561013657600080fd5b506001546001600160a01b03165b6040516101519190612d5c565b60405180910390f35b34801561016657600080fd5b5061017a610175366004612d1c565b610435565b005b34801561018857600080fd5b5061019c610197366004612a42565b6106a7565b604051908152602001610151565b3480156101b657600080fd5b50600454610144906001600160a01b031681565b3480156101d657600080fd5b506032546001600160a01b0316610144565b3480156101f457600080fd5b5061017a610203366004612a42565b6106cf565b34801561021457600080fd5b5061017a610223366004612a7a565b610798565b34801561023457600080fd5b5061019c610243366004612b7e565b610b7f565b34801561025457600080fd5b506031546001600160a01b0316610144565b61017a610274366004612ab2565b610bba565b34801561028557600080fd5b5061017a610294366004612d1c565b610c74565b3480156102a557600080fd5b5060c85460ff166040519015158152602001610151565b3480156102c857600080fd5b5061017a610f79565b3480156102dd57600080fd5b50610144610fb4565b3480156102f257600080fd5b5061032d610301366004612a42565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001610151565b34801561035b57600080fd5b506000546001600160a01b0316610144565b34801561037957600080fd5b5061038d610388366004612a42565b610fc3565b604051610151919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b3480156103ce57600080fd5b506002546001600160a01b0316610144565b3480156103ec57600080fd5b5061017a6103fb366004612b53565b611040565b34801561040c57600080fd5b5061017a6111e6565b34801561042157600080fd5b5061017a610430366004612a42565b61172b565b3360009081526003602052604090206002810154839061045490613077565b10156104a75760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c00000060448201526064015b60405180910390fd5b60006040518060a00160405280306001600160a01b03168152602001856104cd90613077565b81526001600160a01b03851660208201526001546040909101906104fa90600160a01b900460020b613056565b600290810b8252600154600160a01b9004810b810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e90610550908790600401612e97565b60a060405180830381600087803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a29190612bd9565b5092955090935091506105b890508584846117ce565b6031546004805460405163d15e005360e01b81526000936001600160a01b039081169363d15e0053936105ee9392169101612d5c565b60206040518083038186803b15801561060657600080fd5b505afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190612d04565b9050600061064c848361183d565b87546106589190613013565b80885590506106668761191b565b600154600454610685916001600160a01b039182169133911686611997565b60325461069c906001600160a01b03163386611a2b565b505050505050505050565b6001600160a01b03811660009081526003602052604081206106c881611aa4565b9392505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107185760405162461bcd60e51b815260040161049e90612da3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661074a611bae565b6001600160a01b0316146107705760405162461bcd60e51b815260040161049e90612ddd565b61077981611bca565b6040805160008082526020820190925261079591839190611bf9565b50565b606354610100900460ff166107b35760635460ff16156107b7565b303b155b61081a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161049e565b606354610100900460ff1615801561083c576063805461ffff19166101011790555b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b1580156108a057600080fd5b505afa1580156108b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d89190612a5e565b600080546001600160a01b0319166001600160a01b0392909216918217905560408051631d3a66f760e31b8152905163e9d337b891600480820192602092909190829003018186803b15801561092d57600080fd5b505afa158015610941573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109659190612a5e565b603180546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290516000939290921691632495a59991600480820192602092909190829003018186803b1580156109c257600080fd5b505afa1580156109d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fa9190612a5e565b600480546001600160a01b0319166001600160a01b038381169190911782556031546040516335ea6a7560e01b81529394506000939116916335ea6a7591610a4491869101612d5c565b6101806040518083038186803b158015610a5d57600080fd5b505afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a959190612c18565b60e0810151603280546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b8152905193945091169163d0c93a7c91600480820192602092909190829003018186803b158015610af557600080fd5b505afa158015610b09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2d9190612bb8565b600160146101000a81548162ffffff021916908360020b62ffffff160217905550610b56611d39565b610b5e611d70565b610b66611da7565b50508015610b7a576063805461ff00191690555b505050565b6001600160a01b0384166000908152600360205260408120600181015460028201548391610baf91888888611dde565b979650505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610c035760405162461bcd60e51b815260040161049e90612da3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c35611bae565b6001600160a01b031614610c5b5760405162461bcd60e51b815260040161049e90612ddd565b610c6482611bca565b610c7082826001611bf9565b5050565b81610cb05760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b604482015260640161049e565b60006040518060a00160405280306001600160a01b03168152602001848152602001836001600160a01b03168152602001600160149054906101000a900460020b610cfa90613056565b600290810b8252600154600160a01b9004810b810b602090920191909152546040516333bac73760e11b8152919250600091829182916001600160a01b03909116906367758e6e90610d50908790600401612e97565b60a060405180830381600087803b158015610d6a57600080fd5b505af1158015610d7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da29190612bd9565b50503360009081526003602090815260408083206031546001548351632495a59960e01b81529351989b509699509497509592946001600160a01b039485169463d15e005394911692632495a5999260048082019391829003018186803b158015610e0c57600080fd5b505afa158015610e20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e449190612a5e565b6040518263ffffffff1660e01b8152600401610e609190612d5c565b60206040518083038186803b158015610e7857600080fd5b505afa158015610e8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb09190612d04565b90506000610ec782610ec187613077565b9061183d565b8354610ed39190612f7d565b8084559050610ee38387876117ce565b610f053330610ef188613077565b6032546001600160a01b0316929190611997565b600154600454610f24916001600160a01b039182169133911687611997565b82546001840154600285015460408051938452602084019290925282820152517f49a6df809efcd0c8ca0f075e38d001d328110e3e0c419ea639e7fead98f1e43b9181900360600190a1505050505050505050565b33610f82610fb4565b6001600160a01b031614610fa85760405162461bcd60e51b815260040161049e90612e17565b610fb26000611e46565b565b6096546001600160a01b031690565b610ff060405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b0316331461106b57604051630a0d349f60e21b815260040160405180910390fd5b60c85460ff16156110b15760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161049e565b600480546032546040516370a0823160e01b815284936001600160a01b03938416936370a08231936110e69391169101612d5c565b60206040518083038186803b1580156110fe57600080fd5b505afa158015611112573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111369190612d04565b106111cf5760315460048054604051631a4ca37b60e21b81526001600160a01b0391821692810192909252602482018490528481166044830152909116906369328dec90606401602060405180830381600087803b15801561119757600080fd5b505af11580156111ab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7a9190612d04565b603254610c70906001600160a01b03168383611a2b565b6111ee611e98565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561123c57600080fd5b505afa158015611250573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112749190612d04565b1115611293576040516301730b8160e11b815260040160405180910390fd5b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b8152945193969561153c9592946001600160a01b039092169263652c30b79260048083019392829003018186803b1580156112f657600080fd5b505afa15801561130a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132e9190612d04565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561137c57600080fd5b505afa158015611390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b49190612d04565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561140357600080fd5b505afa158015611417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143b9190612d04565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561148957600080fd5b505afa15801561149d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c19190612d04565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b1580156114ff57600080fd5b505af1158015611513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115379190612d04565b611dde565b9050611565826001015461154f90613077565b836002015461155d90613077565b8491906117ce565b60008112156116885760315460015460408051632495a59960e01b815290516000936001600160a01b039081169363d15e005393911691632495a59991600480820192602092909190829003018186803b1580156115c257600080fd5b505afa1580156115d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fa9190612a5e565b6040518263ffffffff1660e01b81526004016116169190612d5c565b60206040518083038186803b15801561162e57600080fd5b505afa158015611642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116669190612d04565b9050600061167782610ec185613077565b84546116839190613013565b845550505b600061169383611aa4565b6000845590506116a283611ea8565b6032546116b9906001600160a01b03163383611a2b565b6000821315610b7a5760015460405163efcfc3f960e01b8152336004820152602481018490526001600160a01b039091169063efcfc3f990604401600060405180830381600087803b15801561170e57600080fd5b505af1158015611722573d6000803e3d6000fd5b50505050505050565b33611734610fb4565b6001600160a01b03161461175a5760405162461bcd60e51b815260040161049e90612e17565b6001600160a01b0381166117bf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161049e565b61079581611e46565b3b151590565b6040805160808101825284548152600185015460208201819052600286015492820192909252600385015460ff161515606082015290600090611812908590612f3c565b905060008383604001516118269190612f3c565b600187019290925550600290940193909355505050565b604080518082019091526002815261035360f41b6020820152600090826118775760405162461bcd60e51b815260040161049e9190612d70565b506000611885600284612f95565b9050676765c793fa10079d601b1b61189f82600019613013565b6118a99190612f95565b84111560405180604001604052806002815260200161068760f31b815250906118e55760405162461bcd60e51b815260040161049e9190612d70565b5082816118fd676765c793fa10079d601b1b87612fb5565b6119079190612f7d565b6119119190612f95565b9150505b92915050565b6000816002015461192b90613077565b905060008161193984611aa4565b6119439190612fd4565b9050600061195084611eff565b90506000811215611991578161196582613077565b1315611991576119758184612f3c565b6040516341d5a83b60e01b815260040161049e91815260200190565b50505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260008060648360008a5af19150506119e1816121fe565b611a245760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161049e565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b03841660048201528260248201526000806044836000895af1915050611a66816121fe565b6119915760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161049e565b60315460015460408051632495a59960e01b8152905160009384936001600160a01b039182169363d15e0053939190921691632495a599916004808301926020929190829003018186803b158015611afb57600080fd5b505afa158015611b0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b339190612a5e565b6040518263ffffffff1660e01b8152600401611b4f9190612d5c565b60206040518083038186803b158015611b6757600080fd5b505afa158015611b7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b9f9190612d04565b83549091506106c89082612245565b6000805160206130f3833981519152546001600160a01b031690565b33611bd3610fb4565b6001600160a01b0316146107955760405162461bcd60e51b815260040161049e90612e17565b6000611c03611bae565b9050611c0e846122fe565b600083511180611c1b5750815b15611c2c57611c2a8484612391565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611a2457805460ff19166001178155604051611ca7908690611c78908590602401612d5c565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052612391565b50805460ff19168155611cb8611bae565b6001600160a01b0316826001600160a01b031614611d305760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b606482015260840161049e565b611a248561247c565b606354610100900460ff16611d605760405162461bcd60e51b815260040161049e90612e4c565b611d686124bc565b610fb26124e3565b606354610100900460ff16611d975760405162461bcd60e51b815260040161049e90612e4c565b611d9f6124bc565b610fb2612513565b606354610100900460ff16611dce5760405162461bcd60e51b815260040161049e90612e4c565b611dd66124bc565b610fb26124bc565b600080611dea87612546565b90506000611df787612546565b90506000611e1083611e0b60018a8a6125d1565b6126b5565b90506000611e1e83876126b5565b90506000611e2c8284612f3c565b670de0b6b3a764000090059b9a5050505050505050505050565b609680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000611ea342612777565b905090565b600381015460ff1615611eef5760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b604482015260640161049e565b600301805460ff19166001179055565b600080611f0f8360010154612546565b90506000611f208460020154612546565b9050600061203d83611e0b60018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b158015611f7a57600080fd5b505afa158015611f8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb29190612d04565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561200057600080fd5b505afa158015612014573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120389190612d04565b6125d1565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b15801561209457600080fd5b505afa1580156120a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120cc9190612d04565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561211a57600080fd5b505afa15801561212e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121529190612d04565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561219057600080fd5b505af11580156121a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c89190612d04565b905060006121d684836126b5565b905060006121e48285612f3c565b9050670de0b6b3a764000081055b98975050505050505050565b60003d8261221057806000803e806000fd5b8060208114612228578015612239576000925061223e565b816000803e6000511515925061223e565b600192505b5050919050565b6000821580612252575081155b1561225f57506000611915565b816122766002676765c793fa10079d601b1b612f95565b61228290600019613013565b61228c9190612f95565b83111560405180604001604052806002815260200161068760f31b815250906122c85760405162461bcd60e51b815260040161049e9190612d70565b50676765c793fa10079d601b1b6122e0600282612f95565b6122ea8486612fb5565b6122f49190612f7d565b6106c89190612f95565b803b6123625760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161049e565b6000805160206130f383398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6123f05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161049e565b600080846001600160a01b03168460405161240b9190612d40565b600060405180830381855af49150503d8060008114612446576040519150601f19603f3d011682016040523d82523d6000602084013e61244b565b606091505b50915091506124738282604051806060016040528060278152602001613113602791396127b6565b95945050505050565b612485816122fe565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606354610100900460ff16610fb25760405162461bcd60e51b815260040161049e90612e4c565b606354610100900460ff1661250a5760405162461bcd60e51b815260040161049e90612e4c565b610fb233611e46565b606354610100900460ff1661253a5760405162461bcd60e51b815260040161049e90612e4c565b60c8805460ff19169055565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156125865760405163e608e18b60e01b81526004810183905260240161049e565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156125c3576040516371f72a3160e01b81526004810183905260240161049e565b50670de0b6b3a76400000290565b600082821161260b5760405162461bcd60e51b815260040161049e90602080825260049082015263453c3d5360e01b604082015260600190565b82612614611e98565b101561264a5760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b604482015260640161049e565b6000848061265f57508261265c611e98565b10155b156126755761266e8484613013565b905061268b565b8361267e611e98565b6126889190613013565b90505b6000612696826127ef565b90506126ab8168056bc75e2d63100000612802565b9695505050505050565b6000600160ff1b8314806126cc5750600160ff1b82145b156126ea57604051630d01a11b60e21b815260040160405180910390fd5b600080600085126126fb5784612700565b846000035b9150600084126127105783612715565b836000035b905060006127238383612817565b90506001600160ff1b038111156127505760405163bf79e8d960e01b81526004810182905260240161049e565b60001980871390861380821860011461276957826121f2565b505060000395945050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156125c357604051633492ffd960e01b81526004810183905260240161049e565b606083156127c55750816106c8565b8251156127d55782518084602001fd5b8160405162461bcd60e51b815260040161049e9190612d70565b6000611915826a1a1601fc4ea7109e0000005b60006106c883670de0b6b3a7640000846128d9565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061285b5760405163698d9a0160e11b81526004810182905260240161049e565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826128955780670de0b6b3a7640000850401945050505050611915565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b6000808060001985870985870292508281108382030391505080600014156129225783828161291857634e487b7160e01b600052601260045260246000fd5b04925050506106c8565b83811061294c57604051631dcf306360e21b8152600481018290526024810185905260440161049e565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b80516129c0816130bd565b919050565b6000602082840312156129d6578081fd5b604051602081016001600160401b03811182821017156129f8576129f86130a7565b6040529151825250919050565b80516001600160801b03811681146129c057600080fd5b805164ffffffffff811681146129c057600080fd5b805160ff811681146129c057600080fd5b600060208284031215612a53578081fd5b81356106c8816130bd565b600060208284031215612a6f578081fd5b81516106c8816130bd565b60008060408385031215612a8c578081fd5b8235612a97816130bd565b91506020830135612aa7816130bd565b809150509250929050565b60008060408385031215612ac4578182fd5b8235612acf816130bd565b91506020838101356001600160401b0380821115612aeb578384fd5b818601915086601f830112612afe578384fd5b813581811115612b1057612b106130a7565b612b22601f8201601f19168501612f0c565b91508082528784828501011115612b37578485fd5b8084840185840137810190920192909252919491935090915050565b60008060408385031215612b65578182fd5b8235612b70816130bd565b946020939093013593505050565b60008060008060808587031215612b93578182fd5b8435612b9e816130bd565b966020860135965060408601359560600135945092505050565b600060208284031215612bc9578081fd5b81518060020b81146106c8578182fd5b600080600080600060a08688031215612bf0578283fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60006101808284031215612c2a578081fd5b612c32612ee3565b612c3c84846129c5565b8152612c4a60208401612a05565b6020820152612c5b60408401612a05565b6040820152612c6c60608401612a05565b6060820152612c7d60808401612a05565b6080820152612c8e60a08401612a05565b60a0820152612c9f60c08401612a1c565b60c0820152612cb060e084016129b5565b60e0820152610100612cc38185016129b5565b90820152610120612cd58482016129b5565b90820152610140612ce78482016129b5565b90820152610160612cf9848201612a31565b908201529392505050565b600060208284031215612d15578081fd5b5051919050565b60008060408385031215612d2e578182fd5b823591506020830135612aa7816130bd565b60008251612d5281846020870161302a565b9190910192915050565b6001600160a01b0391909116815260200190565b6020815260008251806020840152612d8f81604085016020870161302a565b601f01601f19169190910160400192915050565b6020808252602c908201526000805160206130d383398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201526000805160206130d383398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b60405161018081016001600160401b0381118282101715612f0657612f066130a7565b60405290565b604051601f8201601f191681016001600160401b0381118282101715612f3457612f346130a7565b604052919050565b600080821280156001600160ff1b0384900385131615612f5e57612f5e613091565b600160ff1b8390038412811615612f7757612f77613091565b50500190565b60008219821115612f9057612f90613091565b500190565b600082612fb057634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615612fcf57612fcf613091565b500290565b60008083128015600160ff1b850184121615612ff257612ff2613091565b6001600160ff1b038401831381161561300d5761300d613091565b50500390565b60008282101561302557613025613091565b500390565b60005b8381101561304557818101518382015260200161302d565b838111156119915750506000910152565b60008160020b627fffff1981141561307057613070613091565b9003919050565b6000600160ff1b82141561308d5761308d613091565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461079557600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d052a5b4a491bd45cba17fb3f8d818fd8a14af8ca937bff10b71fa46a40eab7864736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestAaveFCMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAaveFCM;
}
//# sourceMappingURL=TestAaveFCM__factory.d.ts.map
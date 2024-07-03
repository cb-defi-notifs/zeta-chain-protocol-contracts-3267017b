/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestZContract,
  TestZContractInterface,
} from "../../../../contracts/prototypes/zevm/TestZContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "origin",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "ContextData",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "origin",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
        ],
        internalType: "struct zContext",
        name: "context",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onCrossChainCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610647806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de43156e14610030575b600080fd5b61004a60048036038101906100459190610251565b61004c565b005b6000828281019061005d9190610208565b90507fcdc8ee677dc5ebe680fb18cebda5e26ba5ea1f0ba504a47e2a9a2ecb476dc98e86806000019061009091906103dc565b8860200160208101906100a391906101db565b896040013533866040516100bc96959493929190610379565b60405180910390a1505050505050565b60006100df6100da84610464565b61043f565b9050828152602081018484840111156100fb576100fa6105c3565b5b6101068482856104fe565b509392505050565b60008135905061011d816105e3565b92915050565b60008083601f840112610139576101386105a5565b5b8235905067ffffffffffffffff811115610156576101556105a0565b5b602083019150836001820283011115610172576101716105b9565b5b9250929050565b600082601f83011261018e5761018d6105a5565b5b813561019e8482602086016100cc565b91505092915050565b6000606082840312156101bd576101bc6105af565b5b81905092915050565b6000813590506101d5816105fa565b92915050565b6000602082840312156101f1576101f06105cd565b5b60006101ff8482850161010e565b91505092915050565b60006020828403121561021e5761021d6105cd565b5b600082013567ffffffffffffffff81111561023c5761023b6105c8565b5b61024884828501610179565b91505092915050565b60008060008060006080868803121561026d5761026c6105cd565b5b600086013567ffffffffffffffff81111561028b5761028a6105c8565b5b610297888289016101a7565b95505060206102a88882890161010e565b94505060406102b9888289016101c6565b935050606086013567ffffffffffffffff8111156102da576102d96105c8565b5b6102e688828901610123565b92509250509295509295909350565b6102fe816104c2565b82525050565b600061031083856104a0565b935061031d8385846104fe565b610326836105d2565b840190509392505050565b600061033c82610495565b61034681856104b1565b935061035681856020860161050d565b61035f816105d2565b840191505092915050565b610373816104f4565b82525050565b600060a082019050818103600083015261039481888a610304565b90506103a360208301876102f5565b6103b0604083018661036a565b6103bd60608301856102f5565b81810360808301526103cf8184610331565b9050979650505050505050565b600080833560016020038436030381126103f9576103f86105b4565b5b80840192508235915067ffffffffffffffff82111561041b5761041a6105aa565b5b602083019250600182023603831315610437576104366105be565b5b509250929050565b600061044961045a565b90506104558282610540565b919050565b6000604051905090565b600067ffffffffffffffff82111561047f5761047e610571565b5b610488826105d2565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006104cd826104d4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561052b578082015181840152602081019050610510565b8381111561053a576000848401525b50505050565b610549826105d2565b810181811067ffffffffffffffff8211171561056857610567610571565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6105ec816104c2565b81146105f757600080fd5b50565b610603816104f4565b811461060e57600080fd5b5056fea2646970667358221220658b8c56b21b674d6677fa444091a4a714b74ee72bac7b4972c1063bda6d73d764736f6c63430008070033";

type TestZContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestZContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestZContract__factory extends ContractFactory {
  constructor(...args: TestZContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestZContract> {
    return super.deploy(overrides || {}) as Promise<TestZContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestZContract {
    return super.attach(address) as TestZContract;
  }
  override connect(signer: Signer): TestZContract__factory {
    return super.connect(signer) as TestZContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestZContractInterface {
    return new utils.Interface(_abi) as TestZContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestZContract {
    return new Contract(address, _abi, signerOrProvider) as TestZContract;
  }
}
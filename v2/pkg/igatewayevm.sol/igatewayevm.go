// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package igatewayevm

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
	_ = abi.ConvertType
)

// IGatewayEVMMetaData contains all meta data concerning the IGatewayEVM contract.
var IGatewayEVMMetaData = &bind.MetaData{
	ABI: "[{\"type\":\"function\",\"name\":\"call\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"payload\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"deposit\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"deposit\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"asset\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"depositAndCall\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"payload\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"depositAndCall\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"asset\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"payload\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"execute\",\"inputs\":[{\"name\":\"destination\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"executeRevert\",\"inputs\":[{\"name\":\"destination\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"executeWithERC20\",\"inputs\":[{\"name\":\"token\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"revertWithERC20\",\"inputs\":[{\"name\":\"token\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"}]",
}

// IGatewayEVMABI is the input ABI used to generate the binding from.
// Deprecated: Use IGatewayEVMMetaData.ABI instead.
var IGatewayEVMABI = IGatewayEVMMetaData.ABI

// IGatewayEVM is an auto generated Go binding around an Ethereum contract.
type IGatewayEVM struct {
	IGatewayEVMCaller     // Read-only binding to the contract
	IGatewayEVMTransactor // Write-only binding to the contract
	IGatewayEVMFilterer   // Log filterer for contract events
}

// IGatewayEVMCaller is an auto generated read-only Go binding around an Ethereum contract.
type IGatewayEVMCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IGatewayEVMTransactor is an auto generated write-only Go binding around an Ethereum contract.
type IGatewayEVMTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IGatewayEVMFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type IGatewayEVMFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// IGatewayEVMSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type IGatewayEVMSession struct {
	Contract     *IGatewayEVM      // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// IGatewayEVMCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type IGatewayEVMCallerSession struct {
	Contract *IGatewayEVMCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts      // Call options to use throughout this session
}

// IGatewayEVMTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type IGatewayEVMTransactorSession struct {
	Contract     *IGatewayEVMTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts      // Transaction auth options to use throughout this session
}

// IGatewayEVMRaw is an auto generated low-level Go binding around an Ethereum contract.
type IGatewayEVMRaw struct {
	Contract *IGatewayEVM // Generic contract binding to access the raw methods on
}

// IGatewayEVMCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type IGatewayEVMCallerRaw struct {
	Contract *IGatewayEVMCaller // Generic read-only contract binding to access the raw methods on
}

// IGatewayEVMTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type IGatewayEVMTransactorRaw struct {
	Contract *IGatewayEVMTransactor // Generic write-only contract binding to access the raw methods on
}

// NewIGatewayEVM creates a new instance of IGatewayEVM, bound to a specific deployed contract.
func NewIGatewayEVM(address common.Address, backend bind.ContractBackend) (*IGatewayEVM, error) {
	contract, err := bindIGatewayEVM(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &IGatewayEVM{IGatewayEVMCaller: IGatewayEVMCaller{contract: contract}, IGatewayEVMTransactor: IGatewayEVMTransactor{contract: contract}, IGatewayEVMFilterer: IGatewayEVMFilterer{contract: contract}}, nil
}

// NewIGatewayEVMCaller creates a new read-only instance of IGatewayEVM, bound to a specific deployed contract.
func NewIGatewayEVMCaller(address common.Address, caller bind.ContractCaller) (*IGatewayEVMCaller, error) {
	contract, err := bindIGatewayEVM(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &IGatewayEVMCaller{contract: contract}, nil
}

// NewIGatewayEVMTransactor creates a new write-only instance of IGatewayEVM, bound to a specific deployed contract.
func NewIGatewayEVMTransactor(address common.Address, transactor bind.ContractTransactor) (*IGatewayEVMTransactor, error) {
	contract, err := bindIGatewayEVM(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &IGatewayEVMTransactor{contract: contract}, nil
}

// NewIGatewayEVMFilterer creates a new log filterer instance of IGatewayEVM, bound to a specific deployed contract.
func NewIGatewayEVMFilterer(address common.Address, filterer bind.ContractFilterer) (*IGatewayEVMFilterer, error) {
	contract, err := bindIGatewayEVM(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &IGatewayEVMFilterer{contract: contract}, nil
}

// bindIGatewayEVM binds a generic wrapper to an already deployed contract.
func bindIGatewayEVM(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := IGatewayEVMMetaData.GetAbi()
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, *parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_IGatewayEVM *IGatewayEVMRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _IGatewayEVM.Contract.IGatewayEVMCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_IGatewayEVM *IGatewayEVMRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.IGatewayEVMTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_IGatewayEVM *IGatewayEVMRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.IGatewayEVMTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_IGatewayEVM *IGatewayEVMCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _IGatewayEVM.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_IGatewayEVM *IGatewayEVMTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_IGatewayEVM *IGatewayEVMTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.contract.Transact(opts, method, params...)
}

// Call is a paid mutator transaction binding the contract method 0x1b8b921d.
//
// Solidity: function call(address receiver, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMTransactor) Call(opts *bind.TransactOpts, receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "call", receiver, payload)
}

// Call is a paid mutator transaction binding the contract method 0x1b8b921d.
//
// Solidity: function call(address receiver, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMSession) Call(receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Call(&_IGatewayEVM.TransactOpts, receiver, payload)
}

// Call is a paid mutator transaction binding the contract method 0x1b8b921d.
//
// Solidity: function call(address receiver, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) Call(receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Call(&_IGatewayEVM.TransactOpts, receiver, payload)
}

// Deposit is a paid mutator transaction binding the contract method 0xf340fa01.
//
// Solidity: function deposit(address receiver) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactor) Deposit(opts *bind.TransactOpts, receiver common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "deposit", receiver)
}

// Deposit is a paid mutator transaction binding the contract method 0xf340fa01.
//
// Solidity: function deposit(address receiver) payable returns()
func (_IGatewayEVM *IGatewayEVMSession) Deposit(receiver common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Deposit(&_IGatewayEVM.TransactOpts, receiver)
}

// Deposit is a paid mutator transaction binding the contract method 0xf340fa01.
//
// Solidity: function deposit(address receiver) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) Deposit(receiver common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Deposit(&_IGatewayEVM.TransactOpts, receiver)
}

// Deposit0 is a paid mutator transaction binding the contract method 0xf45346dc.
//
// Solidity: function deposit(address receiver, uint256 amount, address asset) returns()
func (_IGatewayEVM *IGatewayEVMTransactor) Deposit0(opts *bind.TransactOpts, receiver common.Address, amount *big.Int, asset common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "deposit0", receiver, amount, asset)
}

// Deposit0 is a paid mutator transaction binding the contract method 0xf45346dc.
//
// Solidity: function deposit(address receiver, uint256 amount, address asset) returns()
func (_IGatewayEVM *IGatewayEVMSession) Deposit0(receiver common.Address, amount *big.Int, asset common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Deposit0(&_IGatewayEVM.TransactOpts, receiver, amount, asset)
}

// Deposit0 is a paid mutator transaction binding the contract method 0xf45346dc.
//
// Solidity: function deposit(address receiver, uint256 amount, address asset) returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) Deposit0(receiver common.Address, amount *big.Int, asset common.Address) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Deposit0(&_IGatewayEVM.TransactOpts, receiver, amount, asset)
}

// DepositAndCall is a paid mutator transaction binding the contract method 0x29c59b5d.
//
// Solidity: function depositAndCall(address receiver, bytes payload) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactor) DepositAndCall(opts *bind.TransactOpts, receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "depositAndCall", receiver, payload)
}

// DepositAndCall is a paid mutator transaction binding the contract method 0x29c59b5d.
//
// Solidity: function depositAndCall(address receiver, bytes payload) payable returns()
func (_IGatewayEVM *IGatewayEVMSession) DepositAndCall(receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.DepositAndCall(&_IGatewayEVM.TransactOpts, receiver, payload)
}

// DepositAndCall is a paid mutator transaction binding the contract method 0x29c59b5d.
//
// Solidity: function depositAndCall(address receiver, bytes payload) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) DepositAndCall(receiver common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.DepositAndCall(&_IGatewayEVM.TransactOpts, receiver, payload)
}

// DepositAndCall0 is a paid mutator transaction binding the contract method 0x8c6f037f.
//
// Solidity: function depositAndCall(address receiver, uint256 amount, address asset, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMTransactor) DepositAndCall0(opts *bind.TransactOpts, receiver common.Address, amount *big.Int, asset common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "depositAndCall0", receiver, amount, asset, payload)
}

// DepositAndCall0 is a paid mutator transaction binding the contract method 0x8c6f037f.
//
// Solidity: function depositAndCall(address receiver, uint256 amount, address asset, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMSession) DepositAndCall0(receiver common.Address, amount *big.Int, asset common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.DepositAndCall0(&_IGatewayEVM.TransactOpts, receiver, amount, asset, payload)
}

// DepositAndCall0 is a paid mutator transaction binding the contract method 0x8c6f037f.
//
// Solidity: function depositAndCall(address receiver, uint256 amount, address asset, bytes payload) returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) DepositAndCall0(receiver common.Address, amount *big.Int, asset common.Address, payload []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.DepositAndCall0(&_IGatewayEVM.TransactOpts, receiver, amount, asset, payload)
}

// Execute is a paid mutator transaction binding the contract method 0x1cff79cd.
//
// Solidity: function execute(address destination, bytes data) payable returns(bytes)
func (_IGatewayEVM *IGatewayEVMTransactor) Execute(opts *bind.TransactOpts, destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "execute", destination, data)
}

// Execute is a paid mutator transaction binding the contract method 0x1cff79cd.
//
// Solidity: function execute(address destination, bytes data) payable returns(bytes)
func (_IGatewayEVM *IGatewayEVMSession) Execute(destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Execute(&_IGatewayEVM.TransactOpts, destination, data)
}

// Execute is a paid mutator transaction binding the contract method 0x1cff79cd.
//
// Solidity: function execute(address destination, bytes data) payable returns(bytes)
func (_IGatewayEVM *IGatewayEVMTransactorSession) Execute(destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.Execute(&_IGatewayEVM.TransactOpts, destination, data)
}

// ExecuteRevert is a paid mutator transaction binding the contract method 0x35c018db.
//
// Solidity: function executeRevert(address destination, bytes data) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactor) ExecuteRevert(opts *bind.TransactOpts, destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "executeRevert", destination, data)
}

// ExecuteRevert is a paid mutator transaction binding the contract method 0x35c018db.
//
// Solidity: function executeRevert(address destination, bytes data) payable returns()
func (_IGatewayEVM *IGatewayEVMSession) ExecuteRevert(destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.ExecuteRevert(&_IGatewayEVM.TransactOpts, destination, data)
}

// ExecuteRevert is a paid mutator transaction binding the contract method 0x35c018db.
//
// Solidity: function executeRevert(address destination, bytes data) payable returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) ExecuteRevert(destination common.Address, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.ExecuteRevert(&_IGatewayEVM.TransactOpts, destination, data)
}

// ExecuteWithERC20 is a paid mutator transaction binding the contract method 0x5131ab59.
//
// Solidity: function executeWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMTransactor) ExecuteWithERC20(opts *bind.TransactOpts, token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "executeWithERC20", token, to, amount, data)
}

// ExecuteWithERC20 is a paid mutator transaction binding the contract method 0x5131ab59.
//
// Solidity: function executeWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMSession) ExecuteWithERC20(token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.ExecuteWithERC20(&_IGatewayEVM.TransactOpts, token, to, amount, data)
}

// ExecuteWithERC20 is a paid mutator transaction binding the contract method 0x5131ab59.
//
// Solidity: function executeWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) ExecuteWithERC20(token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.ExecuteWithERC20(&_IGatewayEVM.TransactOpts, token, to, amount, data)
}

// RevertWithERC20 is a paid mutator transaction binding the contract method 0xb8969bd4.
//
// Solidity: function revertWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMTransactor) RevertWithERC20(opts *bind.TransactOpts, token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.contract.Transact(opts, "revertWithERC20", token, to, amount, data)
}

// RevertWithERC20 is a paid mutator transaction binding the contract method 0xb8969bd4.
//
// Solidity: function revertWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMSession) RevertWithERC20(token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.RevertWithERC20(&_IGatewayEVM.TransactOpts, token, to, amount, data)
}

// RevertWithERC20 is a paid mutator transaction binding the contract method 0xb8969bd4.
//
// Solidity: function revertWithERC20(address token, address to, uint256 amount, bytes data) returns()
func (_IGatewayEVM *IGatewayEVMTransactorSession) RevertWithERC20(token common.Address, to common.Address, amount *big.Int, data []byte) (*types.Transaction, error) {
	return _IGatewayEVM.Contract.RevertWithERC20(&_IGatewayEVM.TransactOpts, token, to, amount, data)
}
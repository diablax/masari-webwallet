let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://www.wallet.mask.team/api/',
	mainnetExplorerUrl: "https://mask-block-explorer.thepiratemine.nl/",
	mainnetExplorerUrlHash: "https://mask-block-explorer.thepiratemine.nl/tx/{ID}",
	mainnetExplorerUrlBlock: "https://mask-block-explorer.thepiratemine.nl/block/{ID}",
	testnetExplorerUrl: "https://testnet.mask-block-explorer.thepiratemine.nl/",
	testnetExplorerUrlHash: "https://testnet.mask-block-explorer.thepiratemine.nl/tx/{ID}",
	testnetExplorerUrlBlock: "https://testnet.mask-block-explorer.thepiratemine.nl/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 123,
	integratedAddressPrefix: 55,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 206,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 60, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'MASK',
	openAliasPrefix: "mask",
	coinName: 'Mask',
	coinUriPrefix: 'mask:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'MczDkrbBV5u6LYN6dHrjCu3GCutinuu65GhN893wdDRUMgsjV3VhHoDbMqvSbckn9ybyZAYS6WFgHenjKAcTunYKEr9CWC9',
		'MczDkrbBV5u6LYN6dHrjCu3GCutinuu65GhN893wdDRUMgsjV3VhHoDbMqvSbckn9ybyZAYS6WFgHenjKAcTunYKEr9CWC9',
		'MczDkrbBV5u6LYN6dHrjCu3GCutinuu65GhN893wdDRUMgsjV3VhHoDbMqvSbckn9ybyZAYS6WFgHenjKAcTunYKEr9CWC9'
	]
};

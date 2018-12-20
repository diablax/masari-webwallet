<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = 'sync.mask.team';
$rpcPort = $testnet ? 44071 : 44081;
$coinSymbol = 'mask';

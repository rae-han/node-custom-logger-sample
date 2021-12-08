[I] [12/07 16:07:53.197] [ApiV1 vTpWSs] GET /api/v1/user [14.46.128.10]
[I] [12/07 16:07:53.198] [ApiV1 vTpWSs] (0.000286s) SELECT `id`, `status`, `user_hash`, ... FROM `users` WHERE (`email` = 'kgodfan@naver.com') ORDER BY `users`.`id`
[I] [12/07 16:07:53.199] [ApiV1 vTpWSs User/31/권지수] 200 {"ok":true,"user":{"id":31,"email":"kgodfan@naver.com","name":"권지수","family_name":null,"tel":"821030924338","status":"active","user_hash":null,"created_at":"2021-06-10 12:07:05 UTC","updated_at":"2021-06-10 14:37:05 UTC","restrictions":null,"di_verified":true}}
[I] [12/07 16:07:57.141] [ApiV1 Xf9X2o] POST /api/v1/pin [14.46.128.10]
[I] [12/07 16:07:57.141] [ApiV1 Xf9X2o] {:pin=>"r3A27D6immpGjLwcn0qEpslFsS9Zez7o9Ae4T8huNfI="}
[I] [12/07 16:07:57.143] [ApiV1 Xf9X2o] (0.000328s) SELECT `id`, `status`, `user_hash`, ... FROM `users` WHERE (`email` = 'kgodfan@naver.com') ORDER BY `users`.`id`
[I] [12/07 16:07:57.144] [ApiV1 Xf9X2o User/31/권지수] (0.000320s) SELECT `id`, `user_id`, `type`, ... FROM `user_credentials` WHERE ((`user_id` = 31) AND (`type` = 'pin')) ORDER BY `user_credentials`.`id`
[I] [12/07 16:07:57.433] [ApiV1 Xf9X2o User/31/권지수] (0.000740s) SELECT `id`, `user_id`, `type`, ... FROM `user_credentials` WHERE (`user_credentials`.`id` = 31) ORDER BY `user_credentials`.`id`
[I] [12/07 16:07:57.439] [ApiV1 Xf9X2o User/31/권지수] (0.005379s) UPDATE `user_credentials` SET `metadata` = '{\"pin_fail_count\":0,\"pin_locked\":false}', `updated_at` = '2021-12-07 07:07:57' WHERE (`user_credentials`.`id` = 31) ORDER BY `user_credentials`.`id`
[I] [12/07 16:07:57.441] [ApiV1 Xf9X2o User/31/권지수] (0.000312s) SELECT `id`, `user_id`, `type`, ... FROM `user_credentials` WHERE (`id` IN (31)) ORDER BY `user_credentials`.`id`
[I] [12/07 16:07:57.441] [ApiV1 Xf9X2o User/31/권지수] 200 {"ok":true,"fail_count":0,"locked":false}
[I] [12/07 16:07:58.076] [ApiV1 JHTqcH] GET /api/v1/services/banners [14.46.128.10]
[I] [12/07 16:07:58.077] [ApiV1 JHTqcH] (0.000240s) SELECT `id`, `order`, `status`, ... FROM `service_banners` WHERE (`status` = 1) ORDER BY `order`
[I] [12/07 16:07:58.078] [ApiV1 JHTqcH] (0.000342s) SELECT `category` FROM `service_banners` GROUP BY `category` ORDER BY `service_banners`.`id`
[I] [12/07 16:07:58.103] [ApiV1 JHTqcH] (0.000182s) SELECT `id`, `order`, `status`, ... FROM `service_banners` WHERE ((`status` = 1) AND ((`category` IS NULL) OR (`category` IS NULL))) ORDER BY `order`, `category` DESC
[I] [12/07 16:07:58.104] [ApiV1 JHTqcH] 200 {"ok":true,"items":[{"id":1,"category":null,"title":"main","image":"https://d3r41enlzd4dke.cloudfront.net/J3tMCo93RTCPU8Rx_ZFuwsMbPrqvhXxt/iUFsrjdE0ccGgzEUYHCF0llUPccrQ0QL.png"}],"categories":{"":[{"id":1,"category":null,"title":"main","image":"https://d3r41enlzd4dke.cloudfront.net/J3tMCo93RTCPU8Rx_ZFuwsMbPrqvhXxt/iUFsrjdE0ccGgzEUYHCF0llUPccrQ0QL.png"}]}}
[I] [12/07 16:07:58.209] [ApiV1 fp8G57] GET /api/v1/wallets/primary [14.46.128.10]
[I] [12/07 16:07:58.212] [ApiV1 fp8G57] (0.000344s) SELECT `id`, `status`, `user_hash`, ... FROM `users` WHERE (`email` = 'kgodfan@naver.com') ORDER BY `users`.`id`
[I] [12/07 16:07:58.212] [ApiV1 8SE2wH] GET /api/v1/metadatas/node [14.46.128.10]
[I] [12/07 16:07:58.214] [ApiV1 fp8G57 User/31/권지수] (0.000309s) SELECT `id`, `user_id`, `type`, ... FROM `wallets` WHERE ((`user_id` = 31) AND (`type` = 'primary')) ORDER BY `wallets`.`id`
[I] [12/07 16:07:58.214] [ApiV1 8SE2wH] (0.000360s) SELECT `id`, `status`, `user_hash`, ... FROM `users` WHERE (`email` = 'kgodfan@naver.com') ORDER BY `users`.`id`
[I] [12/07 16:07:58.217] [ApiV1 fp8G57 User/31/권지수] (0.000251s) SELECT `id`, `address`, `ext_address`, ... FROM `internal_wallets` WHERE (`address` = '0xcRxgkU2iSEM13yndQGz1y5xJx8iTNUMU') ORDER BY `internal_wallets`.`id`
[I] [12/07 16:07:58.218] [ApiV1 8SE2wH User/31/권지수] (0.000482s) SELECT `id`, `user_id`, `type`, ... FROM `user_metadata` WHERE ((`user_id` = 31) AND (`type` = 'node')) ORDER BY `id` DESC LIMIT 1
[I] [12/07 16:07:58.218] [ApiV1 8SE2wH User/31/권지수] 200 {"ok":true,"metadata":{"date":"2021-03-30","tib":"12","node":"IPFSKOREA-IDC","key":"00000000000000000012","list":[{"date":"2021-03-30","type":"tib","amount":"12","node":"IPFSKOREA-IDC","key":"00000000000000000012","status":"success"}]},"attachment":null}
[I] [12/07 16:07:58.219] [ApiV1 fp8G57 User/31/권지수] (0.000146s) SELECT `id`, `address`, `ext_address`, ... FROM `internal_wallet_tokens` WHERE (`address` = '0x6XQQX3pkWGsQyy9zwL7qrvk2TkMMcMS3') ORDER BY `internal_wallet_tokens`.`id`
[I] [12/07 16:07:58.221] [ApiV1 fp8G57 User/31/권지수] (0.000738s) BEGIN
[I] [12/07 16:07:58.222] [ApiV1 fp8G57 User/31/권지수] (0.000672s) SELECT `id`, `token_id`, `transaction_id`, ... FROM `internal_wallet_books` WHERE ((`internal_wallet_id` = 74) AND (`token_id` = 1)) GROUP BY 1 ORDER BY `internal_wallet_books`.`id` FOR UPDATE
[I] [12/07 16:07:58.223] [ApiV1 fp8G57 User/31/권지수] (0.000180s) SELECT `id`, `token_id`, `transaction_id`, ... FROM `internal_wallet_books` WHERE ((`internal_wallet_id` = 74) AND (`token_id` = 1) AND (`internal_wallet_id` = 74) AND (`token_id` = 1)) ORDER BY `id` DESC LIMIT 1
[I] [12/07 16:07:58.224] [ApiV1 fp8G57 User/31/권지수] (0.000641s) COMMIT
[I] [12/07 16:07:58.224] [ApiV1 fp8G57 User/31/권지수] [Wallet::Balance] 74[0xcRxgkU2iSEM13yndQGz1y5xJx8iTNUMU] => 0.17970816e2
[I] [12/07 16:07:58.224] [ApiV1 fp8G57 User/31/권지수] 200 {"address":"0xcRxgkU2iSEM13yndQGz1y5xJx8iTNUMU","balance":"17.970816"}
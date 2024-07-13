import opensea from '@api/opensea';

opensea.server('https://testnets-api.opensea.io');
opensea.list_collections({ chain: 'base_sepolia', creator_username: 'crypto-cinema' })
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

const resultExample =
{
  "collections": [
    {
      "collection": "unidentified-contract-61febcce-f411-421b-969c-0cf6",
      "name": "Unidentified contract 61febcce-f411-421b-969c-0cf61a0c2115",
      "description": "",
      "image_url": "https://i.seadn.io/s/raw/files/73f4a8ee4fd5a75f7846bfe354da79d3.jpg?w=500&auto=format",
      "banner_image_url": "",
      "owner": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
      "safelist_status": "not_requested",
      "category": "",
      "is_disabled": false,
      "is_nsfw": false,
      "trait_offers_enabled": false,
      "collection_offers_enabled": true,
      "opensea_url": "https://testnets.opensea.io/collection/unidentified-contract-61febcce-f411-421b-969c-0cf6",
      "project_url": "",
      "wiki_url": "",
      "discord_url": "",
      "telegram_url": "",
      "twitter_username": "",
      "instagram_username": "",
      "contracts": [
        {
          "address": "0x2aeaff494abf43bcd7fefba74794e0517edff901",
          "chain": "base_sepolia"
        }
      ]
    },
    {
      "collection": "unidentified-contract-06013af2-f4b3-4d6b-80d1-f634",
      "name": "Unidentified contract 06013af2-f4b3-4d6b-80d1-f6346e2f3bc8",
      "description": "",
      "image_url": "https://i.seadn.io/s/raw/files/73f4a8ee4fd5a75f7846bfe354da79d3.jpg?w=500&auto=format",
      "banner_image_url": "",
      "owner": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
      "safelist_status": "not_requested",
      "category": "",
      "is_disabled": false,
      "is_nsfw": false,
      "trait_offers_enabled": false,
      "collection_offers_enabled": true,
      "opensea_url": "https://testnets.opensea.io/collection/unidentified-contract-06013af2-f4b3-4d6b-80d1-f634",
      "project_url": "",
      "wiki_url": "",
      "discord_url": "",
      "telegram_url": "",
      "twitter_username": "",
      "instagram_username": "",
      "contracts": [
        {
          "address": "0x477a72c39eabe229e4255a6c74db6c1a1b75f750",
          "chain": "base_sepolia"
        }
      ]
    },
    {
      "collection": "unidentified-contract-5f9cacd8-c634-4051-8856-e9ac",
      "name": "Unidentified contract 5f9cacd8-c634-4051-8856-e9ac251059c9",
      "description": "",
      "image_url": "",
      "banner_image_url": "",
      "owner": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
      "safelist_status": "not_requested",
      "category": "",
      "is_disabled": false,
      "is_nsfw": false,
      "trait_offers_enabled": false,
      "collection_offers_enabled": true,
      "opensea_url": "https://testnets.opensea.io/collection/unidentified-contract-5f9cacd8-c634-4051-8856-e9ac",
      "project_url": "",
      "wiki_url": "",
      "discord_url": "",
      "telegram_url": "",
      "twitter_username": "",
      "instagram_username": "",
      "contracts": [
        {
          "address": "0x0c2366b8fa7038663559128d6b2b729b0b0c1df1",
          "chain": "base_sepolia"
        }
      ]
    },
    {
      "collection": "unidentified-contract-5b2c5648-0d7d-4a11-9ca2-7847",
      "name": "Unidentified contract 5b2c5648-0d7d-4a11-9ca2-7847f92e7f48",
      "description": "",
      "image_url": "",
      "banner_image_url": "",
      "owner": "0xcaadd2b763f5be6cd5baea3135c5b86e8af2eb06",
      "safelist_status": "not_requested",
      "category": "",
      "is_disabled": false,
      "is_nsfw": false,
      "trait_offers_enabled": false,
      "collection_offers_enabled": true,
      "opensea_url": "https://testnets.opensea.io/collection/unidentified-contract-5b2c5648-0d7d-4a11-9ca2-7847",
      "project_url": "",
      "wiki_url": "",
      "discord_url": "",
      "telegram_url": "",
      "twitter_username": "",
      "instagram_username": "",
      "contracts": [
        {
          "address": "0xdbc4cd4c632b898d3d06c02f3b293c8cd6b2f141",
          "chain": "base_sepolia"
        }
      ]
    }
  ]
}
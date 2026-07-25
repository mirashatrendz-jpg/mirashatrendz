// --- Product Data ---
const products = [
    {
        id: 1,
        name: "Idol Coin Maanga Necklace ",
        price: 49,
        category: "Necklaces",
        image: "IdolCoinMaangaNecklace.webp",
        soldOut: true,
    },
     {
        id: 2,
        name: "Ruby Stone Goddess WhiteBeads Necklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneGoddessWhiteBeadsNecklace.webp"
    },
     {
        id: 3,
        name: "Green Maanga Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "GreenMaangaInvisibleChain.webp"
    },
     {
        id: 4,
        name: "Ruby Stone Necklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneBeautifulGoddessWhitebeadsNecklace.jpeg"
    },
     {
        id: 5,
        name: "KempStoneGreenMangoPalakka ",
        price: 49,
        category: "Necklaces",
        image: "KempStoneGreenMangoPalakka.webp"
    },
     {
        id: 6,
        name: "LakshmiCoin Kemp Flower Choker Set",
        price: 49,
        category: "Necklaces",
        image: "LakshmiCoinKempFloweredChokerSet.webp"
    },
     {
        id: 7,
        name: "Antique Lakshmi Pendant InvisibleChain",
        price: 39,
        category: "Necklaces",
        image: "AntiqueLakshmiPendantInvisibleChain.jpeg"
    },
     {
        id: 8,
        name: "Multistone Temple Necklace Set",
        price: 39,
        category: "Necklaces",
        image: "MultistoneTempleNecklaceSet.webp"
    },
     {
        id: 9,
        name: "Ruby-Emerald Peacock Floral Choker Set",
        price: 39,
        category: "Necklaces",
        image: "Ruby-EmeraldPeacockFloralChokerSet.jpeg"
    },
     {
        id: 10,
        name: "Floral Kemp Green Palakka Necklace",
        price: 49,
        category: "Necklaces",
        image: "FloralKempGreenPalakkaNecklace.webp"
    },
     {
        id: 11,
        name: "Kundan Lotus Parrot Hasli Necklace",
        price: 59,
        category: "Necklaces",
        image: "KundanLotusParrotHasliNecklace.webp"
    },
     {
        id: 12,
        name: "Multicolor Flower Choker",
        price: 39,
        category: "Necklaces",
        image: "MulticolorFlowerChoker.jpeg"
    },
     {
        id: 13,
        name: "Ruby Maanga Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "RubyMaangaInvisibleChain.webp"
    },
     {
        id: 14,
        name: "Pastel Greenbeads Invisible Chain",
        price: 29,
        category: "Necklaces",
        image: "PastelGreenbeadsInvisibleChain.webp"
    },
     {
        id: 15,
        name: "MultistoneNon-IdolNecklace",
        price: 29,
        category: "Necklaces",
        image: "MultistoneNon-IdolNecklace.webp"
    },
     {
        id: 16,
        name: "Premium Elephant Motif Choker",
        price: 49,
        category: "Necklaces",
        image: "PremiumElephantMotifChoker.jpeg"
    },
     {
        id: 17,
        name: "Kemp Kathakali Necklace",
        price: 49,
        category: "Necklaces",
        image: "KempKathakaliNecklace.webp"
    },
     {
        id: 18,
        name: "Red Palakka Emerald Stone Necklaces",
        price: 49,
        category: "Necklaces",
        image: "RedPalakkaEmeraldStoneNecklaces.webp"
    },
     {
        id: 19,
        name: "Red Padma Choker Set",
        price: 39,
        category: "Necklaces",
        image: "RedPadmaLotusChokerSet.webp"
    },
     {
        id: 20,
        name: "Multistone Floral Idol Maanga Choker",
        price: 39,
        category: "Necklaces",
        image: "MultistoneFloralIdolMaangaChoker.webp"
    },
     {
        id: 21,
        name: "Antique Floral Multistone Choker",
        price: 29,
        category: "Necklaces",
        image: "AntiqueFloralMultistoneChoker.jpeg"
    },
     {
        id: 22,
        name: "Enamel Blue Palakka With Ruby Stones",
        price: 29,
        category: "Necklaces",
        image: "EnamelBluePalakkaWithRubyStones.webp"
    },
     {
        id: 23,
        name: "Multicolor Floral IdolCoin Necklace",
        price: 39,
        category: "Necklaces",
        image: "MulticolorFloralIdolCoinNecklace.webp"
    },
     {
        id: 24,
        name: "Green Palakka Ruby Stone Necklace",
        price: 49,
        category: "Necklaces",
        image: "GreenPalakkaRubyStoneNecklace.jpeg"
    },
     {
        id: 25,
        name: "Multilayer Pearl Chain",
        price: 29,
        category: "Necklaces",
        image: "MultilayerPearlChain.webp"
    },
     {
        id: 26,
        name: "Invisible Daimond Flower Necklace",
        price: 29,
        category: "Necklaces",
        image: "InvisibleDaimondFlowerNecklace.webp"
    },
     {
        id: 27,
        name: "Idol Lotus Necklace With Pearl Hanging",
        price: 39,
        category: "Necklaces",
        image: "IdolLotusNecklaceWithPearlHanging.webp"
    },
     {
        id: 28,
        name: "Multistone Goddess Pearl Hanging",
        price: 59,
        category: "Necklaces",
        image: "MultistoneGoddessPearlHanging.webp"
    },
     {
        id: 29,
        name: "Premium Lakshmi Pendant Coral and GreenBeads Necklace",
        price: 59,
        category: "Necklaces",
        image: "PremiumLakshmiPendantCoralandGreenBeadsNecklace.webp"
    },
     {
        id: 30,
        name: "Temple Hasli Necklace Set",
        price: 59,
        category: "Necklaces",
        image: "TempleHasliNecklaceSet.webp"
    },
     {
        id: 31,
        name: "Lakshmi Pendant Ruby Palakka Necklace",
        price: 69,
        category: "Necklaces",
        image: "LakshmiPendantRubyPalakkaNecklace.webp"
    },
     {
        id: 32,
        name: "Idol Pendant Premium Parrot Necklace",
        price: 69,
        category: "Necklaces",
        image: "IdolPendantPremiumParrotNecklace.webp"
    },
     {
        id: 33,
        name: "Lakshmi Pendant Green Palakka Necklace",
        price: 69,
        category: "Necklaces",
        image: "LakshmiPendantGreenPalakkaNecklace.webp"
    },
     {
        id: 34,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra.webp"
    },
     {
        id: 35,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra2.webp"
    },
     {
        id: 36,
        name: "Multicolour floral drops Mangalsutra",
        price: 39,
        category: "Necklaces",
        image: "Multicolour floral drops Mangalsutra.webp"
    },
     {
        id: 37,
        name: "Antique Kemp Lakshmi Necklace",
        price: 39,
        category: "Necklaces",
        image: "AntiqueKempLakshmiNecklace.webp"
    },
     {
        id: 38,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra3.webp"
    },
     {
        id: 39,
        name: "Invisible Chain with White Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainwithWhiteStoneHeartDrops.webp"
    },
     {
        id: 40,
        name: "Invisible Chain with Red Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainwithRedStoneHeartDrops.webp"
    },
     {
        id: 41,
        name: "Invisible Chain with Black Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainWithBlackStoneHeartDrops.webp"
    },
     {
        id: 42,
        name: "Multistone Non-Idol Floral Necklace",
        price: 35,
        category: "Necklaces",
        image: "MultistoneNon-idolFloralNecklace.webp"
    },
     {
        id: 43,
        name: "Kemp Multistone Goddess Maanga Necklace",
        price: 59,
        category: "Necklaces",
        image: "KempMultistoneGoddessMaangaNecklace.webp"
    },
     {
        id: 44,
        name: "Goddess Lakshmi Necklace",
        price: 59,
        category: "Necklaces",
        image: "GoddessLakshmiNecklace.webp"
    },
      {
        id: 45,
        name: "Traditional kasu Necklace Set",
        price: 49,
        category: "Necklaces",
        image: "TraditionalkasuNecklaceSet.webp"
    },
     {
        id: 46,
        name: "Temple Coin Ruby Choker Necklace",
        price: 49,
        category: "Necklaces",
        image: "TempleCoinRubyChokerNecklace.webp"
    },
     {
        id: 47,
        name: "Elephant Goddess Necklace With Pastel GreenHanging",
        price: 49,
        category: "Necklaces",
        image: "ElephantGoddessNecklaceWithPastelGreenHanging.webp"
    },
     {
        id: 48,
        name: "Kemp Stone Set With Ghungroo",
        price: 49,
        category: "Necklaces",
        image: "KempStoneSetwithGhungroo.webp"
    },
     {
        id: 49,
        name: "Long Hanging Ruby Lotus Necklace",
        price: 39,
        category: "Necklaces",
        image: "LongHangingRubyLotusNecklace.webp"
    },
     {
        id: 50,
        name: "Idol Lotus Necklace With Pearl Hanging",
        price: 39,
        category: "Necklaces",
        image: "IdolLotusNecklaceWithPearlHanging.webp"
    },
     {
        id: 51,
        name: "Kemp Naga Temple Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "KempNagaTempleInvisibleChain.webp"
    },
     {
        id: 52,
        name: "ThreeLayer Gold And Pearl Beads Necklace",
        price: 39,
        category: "Necklaces",
        image: "ThreeLayerGoldAndPearlBeadsNecklace.webp"
    },
     {
        id: 53,
        name: "Kemp RadhaKrishna Necklace",
        price: 39,
        category: "Necklaces",
        image: "KempRadhaKrishnaNecklace.webp"
    },
     {
        id: 54,
        name: "Green Lotus Choker Necklace",
        price: 49,
        category: "Necklaces",
        image: "GreenLotusChokerNecklace.webp"
    },
     {
        id: 55,
        name: "Temple Coin Emerald Choker Set",
        price: 49,
        category: "Necklaces",
        image: "TempleCoinEmeraldChokerSet.webp"
    },
     {
        id: 56,
        name: "Non-idol Floral Coin Necklace",
        price: 39,
        category: "Necklaces",
        image: "Non-idolFloralCoinNecklace.webp"
    },
     {
        id: 57,
        name: "Ruby And Emerald Floral Choker Set",
        price: 29,
        category: "Necklaces",
        image: "RubyAndEmeraldFloralChokerSet.webp"
    },
     {
        id: 58,
        name: "Minimal Diamond Vine Choker",
        price: 39,
        category: "AD Necklace",
        image: "MinimalDiamondVineChoker.webp",
        soldOut: true,
    },
     {
        id: 59,
        name: "Shanku Chakra Namam Necklace Set",
        price: 39,
        category: "Necklaces",
        image: "ShankuChakraNamamNecklaceSet.webp"
    },
     {
        id: 60,
        name: "Ahaana Inspired Peacock Necklace",
        price: 49,
        category: "Necklaces",
        image: "AhaanaInspiredPeacockNecklace.webp"
    },
     {
        id: 61,
        name: "SquareCut Emeralds Lakshmi Pendant Chain",
        price: 39,
        category: "Necklaces",
        image: "SquareCutEmeraldsLakshmiPendantChain.webp"
    },
     {
        id: 62,
        name: "Layerd Pearl Chain with Pendant ",
        price: 29,
        category: "Necklaces",
        image: "LAYEREDPEARLCHAINWITHPENDANT.webp"
    },
     {
        id: 63,
        name: "Antique Jadau Coin Haaram",
        price: 69,
        category: "Haarams",
        image: "AntiqueJadauCoinHaaram.webp"
    },
     {
        id: 64,
        name: "Temple Heavy Bridal Set",
        price: 119,
        category: "Haarams",
        image: "TempleHeavyBridalSet.webp"
    },
     {
        id: 65,
        name: "Lakshmi Vaibhavam Ruby Beads Haaram",
        price: 79,
        category: "Haarams",
        image: "LakshmiVaibhavamRubyBeadsHaaram.jpeg"
    },
     {
        id: 66,
        name: "Layered Pearl Mahalakshmi Pendant Haaram",
        price: 49,
        category: "Haarams",
        image: "LayeredPearlMahalakshmiPendantHaaram.JPG.jpeg"
    },
     {
        id: 67,
        name: "Antique Long Goddess Haaram",
        price: 69,
        category: "Haarams",
        image: "AntiqueLongGoddessHaaram.webp"
    },
     {
        id: 68,
        name: "Idol Pendant Gold Beads Haaram",
        price: 39,
        category: "Haarams",
        image: "IdolPendantGoldBeadsHaaram.JPG.jpeg"
    },
     {
        id: 69,
        name: "Long Palakka Set",
        price: 49,
        category: "Haarams",
        image: "LongPalakkaSet.webp"
    },
     {
        id: 70,
        name: "Green Enamel Lakshmi Pendant Ball Chain Haaram",
        price: 49,
        category: "Haarams",
        image: "GreenEnamelLakshmiPendantBallChainHaaram.JPG.jpeg"
    },
     {
        id: 71,
        name: "Ruby Goddess Haaram",
        price: 79,
        category: "Haarams",
        image: "RubyGoddessHaaram.webp"
    },
     {
        id: 72,
        name: "Peacock Pearl Haaram",
        price: 59,
        category: "Haarams",
        image: "PeacockGoddessPearlHaaram.jpeg"
    },
     {
        id: 73,
        name: "Dasavathara Temple Haaram",
        price: 89,
        category: "Haarams",
        image: "DasavatharaTempleHaaram.JPG.jpeg"
    },
     {
        id: 74,
        name: "Nakshi Rice Drop Antique Jhumka",
        price: 49,
        category: "Earrings",
        image: "NakshiRiceDropAntiqueJhumka.webp"
    },
     {
        id: 75,
        name: "Non-idol Bridal",
        price: 79,
        category: "Haarams",
        image: "Non-idolbeAUTYHaaram.JPG.jpeg"
    },
     {
        id: 76,
        name: "IdolCoinTempleHaaram",
        price: 49,
        category: "Haarams",
        image: "IdolCoinTempleHaaram.webp"
    },
     {
        id: 77,
        name: "Premium AD climber Earcuff",
        price: 29,
        category: "Earrings",
        image: "PremiumADcimberEarcuff29.webp"
    },
      {
        id: 78,
        name: "Jadau Kundan Floral Design Bugadi",
        price: 29,
        category: "Earrings",
        image: "JadauKundanFloralDesignBugadi.webp"
    },
     {
        id: 79,
        name: "Enamel Palakk Jhumka With GreenBeads",
        price: 29,
        category: "Earrings",
        image: "EnamelPalakkJhumkaWithHangingGreenBeads.webp"
    },
     {
        id: 80,
        name: "Non-idol Haaram Set",
        price: 99,
        category: "Haarams",
        image: "Non-idolBridalbeautylSet.webp"
    },
     {
        id: 81,
        name: "Idol Coin Bridal Set",
        price: 79,
        category: "Haarams",
        image: "IdolCoinBridalSet.webp"
    },
     {
        id: 82,
        name: "Goddess Beautiful Haaram",
        price: 119,
        category: "Haarams",
        image: "GoddessHeavyHaaram.webp"
    },
     {
        id: 83,
        name: "Navaratna Necklace",
        price: 69,
        category: "AD Necklaces",
        image: "NavaratnaNecklace.webp"
    },
     {
        id: 84,
        name: "Royal Emerald Necklace Set",
        price: 69,
        category: "AD Necklaces",
        image: "RoyalEmeraldNecklaceSet.webp"
    },
     {
        id: 85,
        name: "Multistone Floral Double Layer Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "MultistoneFloralDoubleLayerNecklace.webp"
    },
      {
        id: 86,
        name: "Geometric Pattern Diamond Necklace Set",
        price: 49,
        category: "AD Necklaces",
        image: "GeometricPatternDiamondNecklaceSet.webp"
    },
     {
        id: 87,
        name: "Crystal Heart Charm Necklace Set",
        price: 39,
        category: "AD Necklaces",
        image: "CrystalHeartCharmNecklaceSet.webp"
    },
     {
        id: 88,
        name: "WaterDrop Diamond Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "WaterDropDiamondNecklace.webp"
    },
     {
        id: 89,
        name: "Minimal Ruby Vine Choker",
        price: 39,
        category: "AD Necklaces",
        image: "MinimalRubyVineChoker.webp"
    },
     {
        id: 90,
        name: "Premium Victorian Emerald Diamond Necklace Set",
        price: 89,
        category: "AD Necklaces",
        image: "PremiumVictorianEmeraldDiamondNecklaceSet.webp"
    },
      {
        id: 91,
        name: "AD Pendant Pearl Halo Necklace",
        price: 69,
        category: "AD Necklaces",
        image: "ADPendantPearlHaloNecklace.webp"
    },
     {
        id: 92,
        name: "Gold Plated Multistone AD Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "GoldPlatedMultistoneADNecklace.webp"
    },
     {
        id: 93,
        name: "Crystal Bloom Necklace Set",
        price: 59,
        category: "AD Necklaces",
        image: "CrystalBloomNecklaceSet-.webp"
    },
     {
        id: 94,
        name: "Ruby Blossom Necklace Set",
        price: 59,
        category: "AD Necklaces",
        image: "RubyBlossomNecklaceSet.webp"
    },
     {
        id: 95,
        name: "Layered Hasli Multistone Necklace",
        price: 59,
        category: "AD Necklaces",
        image: "LayeredHasliMultistoneNecklace.webp"
    },
     {
        id: 96,
        name: "Kundan Stone Pendant PearlDrops",
        price: 39,
        category: "AD Necklaces",
        image: "KundanStonePendantPearlDropsNecklace.webp"
    },
     {
        id: 97,
        name: "Snow Flakes Diamond Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "SnowFlakesDiamondNecklace.webp"
    },
      {
        id: 98,
        name: "Hollow Circle Diamond Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "HollowCircleDiamondNecklace.webp"
    },
      {
        id: 99,
        name: "Quilted-Texture Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "Quilted-TextureAdjustableRing.webp"
    },
     {
        id: 100,
        name: "Jyothika Inspired Emerald Necklace",
        price: 89,
        category: "AD Necklaces",
        image: "JyothikaInspiredEmeraldNecklace.webp"
    },
      {
        id: 101,
        name: "Premium Idol Pendant Emerald Stone",
        price: 69,
        category: "AD Necklaces",
        image: "IdolPendantEmeraldStonePremiumNecklace.webp"
    },
      {
        id: 102,
        name: "Premium Queen Necklace",
        price: 99,
        category: "AD Necklaces",
        image: "PremiumQueenNecklace.webp"
    },
      {
        id: 103,
        name: "Diamond Dew Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "DiamondDewNecklace.webp"
    },
     {
        id: 104,
        name: "Ruby And Daimond Leaf Invisible AD",
        price: 59,
        category: "AD Necklaces",
        image: "RubyAndDaimondLeafInvisibleAD.webp"
    },
     {
        id: 105,
        name: "Dancing Girl EarCuff",
        price: 19,
        category: "Earrings",
        image: "DancingGirlEarCuff.webp"
    },
      {
        id: 106,
        name: "JadauKundanHalfMoonBugadi",
        price: 29,
        category: "Earrings",
        image: "JadauKundanHalfMoonBugadi.webp"
    },
     {
        id: 107,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud.webp"
    },
     {
        id: 108,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud10.webp"
    },
     {
        id: 109,
        name: "Daily Wear Stud",
        price: 9,
        category: "Earrings",
        image: "DailyWearStud11.webp"
    },
     {
        id: 110,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud9.webp"
    },
     {
        id: 111,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud8.webp"
    },
     {
        id: 112,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud7.webp"
    },
     {
        id: 113,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud2.webp"
    },
     {
        id: 114,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud6.webp"
    },
     {
        id: 115,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud5.webp"
    },
     {
        id: 116,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud4.webp"
    },
     {
        id: 117,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud3.webp"
    },
     {
        id: 118,
        name: "Adjustable Chain with Waterdrop Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableChainwithWaterdropPendant.webp"
    },
     {
        id: 119,
        name: "Elora Oval Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "EloraOvalStud.webp"
    },
     {
        id: 120,
        name: "Heart Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartTexturedStud.webp"
    },
     {
        id: 121,
        name: "Open Cage Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "OpenCageRing.webp"
    },
     {
        id: 122,
        name: "Looping Twist Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "LoopingTwistRing.webp"
    },
     {
        id: 123,
        name: "Multi Loop Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "MultiLoopRing.webp"
    },
     {
        id: 124,
        name: "Coiled Serpant Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "CoiledSerpant.webp"
    },
     {
        id: 125,
        name: "Gold Open Fluid Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "GoldOpenFluidRing.webp"
    },
     {
        id: 126,
        name: "Multilayered Crisscross Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "MultilayeredCrisscrossRing.webp"
    },
     {
        id: 127,
        name: "Star Rabbit Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "StarRabbitStainlessSteelRing.webp"
    },
      {
        id: 128,
        name: "Isla Shell Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "IslaShellStud.webp"
    },
     {
        id: 129,
        name: "The Cora Heart Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TheCoraHeartStud.webp"
    },
     {
        id: 130,
        name: "DropletStud",
        price: 9,
        category: "Anti-Tarnish",
        image: "DropletStud.webp"
    },
     {
        id: 131,
        name: "Nugget Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "NuggetStud.webp"
    },
     {
        id: 132,
        name: "Mila Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MilaStud.webp"
    }, 
     {  id: 133,
        name: "Luna Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "LunaStud.webp"
    },
     {
        id: 134,
        name: "The Trinity Mini Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TheTrinityMiniStud.webp"
    },
     {
        id: 135,
        name: "Cleo Ribbed Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "CleoRibbedStud.webp"
    },
     {
        id: 136,
        name: "Maya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MayaTexturedStud.webp"
    },
      {
        id: 137,
        name: "Aria Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "AriaStud.webp"
    },
     {
        id: 138,
        name: "Tara Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TaraStud.webp"
    },
     {
        id: 139,
        name: "Alba Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "AlbaStud.webp"
    },
     {
        id: 140,
        name: "Star Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "StarTexturedStud.webp"
    },
      {
        id: 141,
        name: "Nina Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "NinaStud.webp"
    },
     {
        id: 142,
        name: "Mini Teddy Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MiniTeddyStud.webp"
    },
     {
        id: 143,
        name: "BlueOnyxRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlueOnyxRing.webp"
    },
     {
        id: 144,
        name: "Ruby Reign Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "RubyReignRing.webp"
    },
     {
        id: 145,
        name: "Orchid Glow Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "OrchidGlowRing.webp"
    },
     {
        id: 146,
        name: "EmeraldReignRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "EmeraldReignRing.webp"
    },
     {
        id: 147,
        name: "BlushPinkRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlushPinkRing.webp"
    },
      {
        id: 148,
        name: "Reya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "ReyaTexturedStud.webp"
    },
      {
        id: 149,
        name: "Reya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "ReyaTexturedStud.webp"
    },
      {
        id: 150,
        name: "Hollow Oval Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "HollowOvalRing.webp"
    },
      {
        id: 151,
        name: "BlackOnyxRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlackOnyxRing.webp"
    },
     {
        id: 152,
        name: "Open Twist Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "OpenTwistRing.webp"
    },
      {
        id: 153,
        name: "CrystalWhiteRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "CrystalWhiteRing.webp"
    },
     {
        id: 154,
        name: "Amber Solitaire Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "AmberSolitaireRing.webp"
    },
     {
        id: 155,
        name: "Faye Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "FayeStud.webp"
    },
      {
        id: 156,
        name: "HeartNecklace",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartNecklace.webp"
    },
     {
        id: 157,
        name: "Bamboo Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BambooRing.webp"
    },
     {
        id: 158,
        name: "Ruby Gem Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "RubyGemRing.webp"
    },
      {
        id: 159,
        name: "Twilight TeaDrop EarHook",
        price: 19,
        category: "Earrings",
        image: "TwilightTeaDropEarhook.webp"
    },
      {
        id: 160,
        name: "IcePetalEarHook",
        price: 19,
        category: "Earrings",
        image: "IcePetalEarHook.webp"
    },
      {
        id: 161,
        name: "Black Sapphire Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BlackSapphireRing.webp"
    },
     {
        id: 162,
        name: "Blue Sapphire Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BlueSapphireRing.webp"
    },
      {
        id: 163,
        name: "Emerald Gem Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "EmeraldGemRing.webp"
    },
     {
        id: 164,
        name: "Lily Bow Necklace",
        price: 9,
        category: "Anti-Tarnish",
        image: "LillyBowNecklace.webp"
    },
     {
        id: 165,
        name: "Heart Pattern Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartPatternRing.webp"
    },
     {
        id: 166,
        name: "Yara Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "YaraStud.webp"
    },
     {
        id: 167,
        name: "Flora Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "FloraStud.webp"
    },
     {
        id: 168,
        name: "Butterfly Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "ButterflyStud.webp"
    },
     {
        id: 169,
        name: "Zara Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "ZaraStud.webp"
    },
     {
        id: 170,
        name: "Snake Chain with Black Stone Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableSnakeChainwithBlackStonePendant.webp"
    },
     {
        id: 171,
        name: "One Muzham Jasmine Strings",
        price: 62,
        category: "Jasmine Strings",
        image: "OneMuzhamJasmineStrings.webp"
    },
     {
        id: 172,
        name: "Two Muzham Jasmine Strings",
        price: 124,
        category: "Jasmine Strings",
        image: "TwoMuzhamJasmineStrings.webp"
    },
     {
        id: 173,
        name: "KAMADHENU NECKLACE Necklace",
        price: 39,
        category: "Necklaces",
        image: "KAMADHENUNECKLACE.webp"
    },
     {
        id: 174,
        name: "Mayura Non-Idol Bangles",
        price: 29,
        category: "Bangles",
        image: "MayuraNon-IdolBangles.JPG.webp"
    },
     {
        id: 175,
        name: "Kempstone Antique Bangles",
        price: 39,
        category: "Bangles",
        image: "KempstoneAntiqueBangles.webp"
    },
      {
        id: 176,
        name: "Blue Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "RaindropBlueBangles.webp"
    },
      {
        id: 177,
        name: "Maroon Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "MaroonRaindropBangles.webp"
    },
       {
        id: 178,
        name: "Black Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "BlackRaindropBangles.webp"
    },
      {
        id: 179,
        name: "RaniPink Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "RaniPinkRaindropBangles.webp"
    },
     {
        id: 180,
        name: "Green Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "GreenRaindropBangles.webp"
    },
     {
        id: 181,
        name: "Black Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "BlackZaaraBangles.webp"
    },
     {
        id: 182,
        name: "HotPink Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "HotPinkZaaraBangles.webp"
    },
     {
        id: 183,
        name: "Green Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "GreenZaaraBangles.webp"
    },
     {
        id: 184,
        name: "Open Crisscross Ring",
        price: 29,
        category: "Bangles",
        image: "OpenCrisscrossRing.webp"
    },
     {
        id: 185,
        name: "Bright Orange Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "BrightOrangeRoseBangles.webp"
    },
     {
        id: 186,
        name: "Cyan Blue Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "CyanBlueRoseBangles.webp"
    },
     {
        id: 187,
        name: "Lime Green Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "LimeGreenRoseBangles.webp"
    },
     {
        id: 188,
        name: "Maroon Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "MaroonZaaraBangles.webp"
    },
     {
        id: 189,
        name: "Multistone Goddess Bangles",
        price: 59,
        category: "Bangles",
        image: "MultistoneGoddessBangles.JPG.webp"
    },
     {
        id: 190,
        name: "Green Palakka Bangles",
        price: 39,
        category: "Bangles",
        image: "GreenPalakkaBangles.JPG.webp"
    },
     {
        id: 191,
        name: "Multistone Non-Idol Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneNon-IdolBangles.JPG.webp"
    },
     {
        id: 192,
        name: "EmerladStoneGoddessBangle",
        price: 39,
        category: "Bangles",
        image: "EmerladStoneGoddessBangle.JPG.webp"
    },
     {
        id: 193,
        name: "Matte Elephant Motifs",
        price: 29,
        category: "Bangles",
        image: "MatteElephantMotifs.JPG.webp"
    },
     {
        id: 194,
        name: "Openable Premium Camel Motif Kadas",
        price: 79,
        category: "Bangles",
        image: "OpenablePremiumCamelMotifKadas.JPG.webp"
    },
     {
        id: 195,
        name: "Openable Premium Ganesha Elephant Kadas",
        price: 59,
        category: "Bangles",
        image: "OpenablePremiumGaneshaElephantKadas.JPG.webp"
    },
     {
        id: 196,
        name: "RAMPARIVAR Openable Premium Kadas",
        price: 79,
        category: "Bangles",
        image: "RAMPARIVAROpenablePremiumKadas.JPG.webp"
    },
     {
        id: 197,
        name: "Non-Idol Multistone Matte Bangles",
        price: 39,
        category: "Bangles",
        image: "Non-IdolMultistoneMatteBangles.JPG.webp"
    },
     {
        id: 198,
        name: "Multistone Beautiful Goddess Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneBeautifulGoddessBangles.JPG.webp"
    },
     {
        id: 199,
        name: "Infine Love Bangles",
        price: 19,
        category: "Bangles",
        image: "Infinelovebangles.webp"
    },
     {
        id: 200,
        name: "Three CircularStone Bangles",
        price: 19,
        category: "Bangles",
        image: "ThreeCircularStoneBangles.webp"
    },
     {
        id: 201,
        name: "OpenType Ruby White Flower Bangle",
        price: 19,
        category: "Bangles",
        image: "OpenTypeRubyWhiteFlower.webp"
    },
     {
        id: 202,
        name: "Clustered White Floral Split Bangles",
        price: 19,
        category: "Bangles",
        image: "ClusteredWhiteFloralSplitBangles.webp"
    },
     {
        id: 203,
        name: "InterlockingRingBangles",
        price: 19,
        category: "Bangles",
        image: "InterlockingRingBangles.webp"
    },
     {
        id: 204,
        name: "Double Layer Kemp Multistone Necklace",
        price: 29,
        category: "Necklaces",
        image: "DoubleLayerKempMultistoneNecklace.webp"
    },
     {
     
        id: 205,
        name: "Adjustable Butterfly Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableButterflyDesignHandcuff.webp"
    },
     {
        id: 206,
        name: "Adjustable Multilayer stoned Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "AdjustableMultilayerWiresWrapHandcuff.webp"
    },
     {
        id: 207,
        name: "Adjustable Gold Floral Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableGoldFloralDesignHandcuff.webp"
    },
     {
        id: 208,
        name: "Adjustable Daisy Flower Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableDaisyFlowerHandcuff.webp"
    },
     {
        id: 209,
        name: "Sunburst Circle Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "SunburstCircleAdjustableRing.webp"
    },
     {
        id: 210,
        name: "SpiralSwirlOpencuffBraceletwithRing",
        price: 29,
        category: "Anti-Tarnish",
        image: "SpiralSwirlOpencuffBraceletwithRing.webp"
    },
     {
        id: 211,
        name: "Hollow Abstract Geometric Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HollowAbstractGeometricRing.webp"
    },
     {
        id: 212,
        name: "Floral Design Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "FloralDesignAdjustableRing.webp"
    },
     {
        id: 213,
        name: "AdjustableMultilayerHandcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableMultilayerHandcuff.webp"
    },
     {
        id: 214,
        name: "Steel Daimond Bracelet Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "SteelDaimondBraceletWatch.webp"
    },
     {
        id: 215,
        name: "Adjustable Leaf Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "AdjustableLeafHandcuff.webp"
    },
     {
        id: 216,
        name: "ThreeLayerChain Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "ThreeLayerChain Watch.webp"
    },
     {
        id: 217,
        name: "Heart Charms Openable Kada",
        price: 39,
        category: "Anti-Tarnish",
        image: "HeartCharmsOpenable.webp"
    },
     {
        id: 218,
        name: "Hallow Abstract Geometric Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HallowAbstractRing.webp"
    },
     {
        id: 219,
        name: "Hallow Abstract Knot Design Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HallowAbstractKnotDesignRing.webp"
    },
     {
        id: 220,
        name: "Bow Knot Pendant Chain",
        price: 9,
        category: "Anti-Tarnish",
        image: "BowKnotPendantChain.webp"
    },
     {
        id: 221,
        name: "ElegantBraceletWatch",
        price: 29,
        category: "Anti-Tarnish",
        image: "ElegantBraceletWatch.webp"
    },
     {
        id: 222,
        name: "Spiral Open Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "SpiralOpenHandcuff.webp"
    },
      {
        id: 223,
        name: "Grecian Pattern Bangle Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "GrecianPatternBangleWatch.webp"
    },
     {
        id: 224,
        name: "Eternal Hollow Heart Charm and Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EternalHollowHeartCharmandCrystalNecklace.webp"
    },
     {
        id: 225,
        name: "Gold Floral With Central Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "GoldFloralWithCentralCrystalNecklace.webp"
    },
     {
        id: 226,
        name: "V-Shaped Ring",
        price: 19,
        category: "Anti-Tarnish",
        image: "V-ShapedRing.webp"
    },
     {
        id: 227,
        name: "Solid Heart Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidHeartCharmsNecklace.webp"
    },
     {
        id: 228,
        name: "Enamel details Cat and Flower Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EnameldetailsCatandFlowerPendantNecklace.webp"
    },
     {
        id: 229,
        name: "FloralCharmsandColourfulStonesNecklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "FloralCharmsandColourfulStonesNecklace.webp"
    },
     {
        id: 230,
        name: "Solid Butterfly Charms with Colorful Stones Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidButterflyCharmswithColorfulStonesNecklace.webp"
    },
     {
        id: 231,
        name: "Openable Floral Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenableFloralPendantNecklace.webp"
    },
     {
        id: 232,
        name: "Cherry Charm Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "CherryCharmPendantNecklace.webp"
    },
     {
        id: 233,
        name: "Double Layer Necklace With Heart and Bow",
        price: 19,
        category: "Anti-Tarnish",
        image: "DoubleLayerNecklaceWithHeartandBow.webp"
    },
     {
        id: 234,
        name: "BlackStone Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "BlackStoneCharmsNecklace.webp"
    },
     {
        id: 235,
        name: "Pink Enamel Butterfly Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenablePinkEnamelButterflyPendantNecklace.webp"
    },
     {
        id: 236,
        name: "Premium Earcuff Jhumka",
        price: 59,
        category: "Earrings",
        image: "PremiumEarcuffJhumka59.jpeg"
    },
     {
        id: 237,
        name: "Antique Umbrella Jhumka",
        price: 49,
        category: "Earrings",
        image: "AntiqueUmbrellaGoddessJhumka49.jpeg"
    },
     {
        id: 238,
        name: "Goddess Shanghu Jhumka",
        price: 39,
        category: "Earrings",
        image: "GoddessShanghuJhumkaWithPearlDrops39.jpeg"
    },
     {
        id: 239,
        name: "Jadau KundanLeaf Bugadi",
        price: 29,
        category: "Earrings",
        image: "JadauKundanLeafFloralDesignBugadi29.jpeg"
    },
     {
        id: 240,
        name: "Lakshmi With PearlDrops",
        price: 49,
        category: "Earrings",
        image: "AntiqueLakshmiJhumkaWithpearlDrops49.jpeg"
    },
     {
        id: 241,
        name: "Pearl Premium Earrings",
        price: 59,
        category: "Earrings",
        image: "LayeredPearlPremiumEarrings59.jpeg"
    },
     {
        id: 242,
        name: "Peacock Jhumka",
        price: 49,
        category: "Earrings",
        image: "PeacockJhumkawithPearlDrop49.jpeg"
    },
      {
        id: 243,
        name: "Nayanthara Inspired Heavy Jhumka",
        price: 39,
        category: "Earrings",
        image: "NayantharaInspiredHeavyJhumka49.jpeg"
    },
     {
        id: 244,
        name: "Ruby and Emerald Beads Jhumka",
        price: 39,
        category: "Earrings",
        image: "GoddessJhumkawithHangingRubyandEmeraldBeads39.jpeg"
    },
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('mirasha_cart')) || [];

// --- DOM Elements ---
const productList = document.getElementById('product-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('All');
    updateCartUI();
    initScrollAnimations();
    initStickyHeader();
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('page-loader').classList.add('hidden');
    }, 300);
});

// --- Product Rendering & Filtering ---
function renderProducts(filterStr) {
    productList.innerHTML = '';

    const filtered = filterStr === 'All'
        ? products
        : products.filter(p => p.category === filterStr);

    filtered.forEach(product => {
        const card = document.createElement('div');
        const soldOut = product.soldOut || false;
        card.className = 'product-card zoom-in';
        if (soldOut) card.classList.add('sold-out');
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${soldOut ? '<span class="sold-out-badge">Sold Out</span>' : ''}
            </div>
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="product-price-original">AED ${(product.price * 1.5).toFixed(2)}</span>
                AED ${product.price.toFixed(2)}
            </div>
            <div class="product-actions">
                ${soldOut
                    ? '<button class="btn btn-disabled" disabled>Sold Out</button>'
                    : `<button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>`
                }
            </div>
        `;
        productList.appendChild(card);
    });
}

// Filter button click event
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        e.target.classList.add('active');
        // Render
        const filterStr = e.target.getAttribute('data-filter');
        renderProducts(filterStr);
        initScrollAnimations();

        // Scroll to products
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// Category card click event
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const filterStr = card.getAttribute('data-filter');
        // Update filter buttons
        filterBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === filterStr);
        });
        renderProducts(filterStr);
        initScrollAnimations();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Cart Logic ---
window.addToCart = function (productId) {
    const productDef = products.find(p => p.id === productId);
    if (!productDef || productDef.soldOut) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productDef.id,
            name: productDef.name,
            price: productDef.price,
            image: productDef.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart();
};

window.updateQuantity = function (productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
};

window.removeFromCart = function (productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
};

function saveCart() {
    localStorage.setItem('mirasha_cart', JSON.stringify(cart));
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalQty = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            totalQty += item.quantity;
            totalPrice += item.price * item.quantity;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">AED ${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCount.innerText = totalQty;
    cartTotalPrice.innerText = `AED ${totalPrice.toFixed(2)}`;
}

// --- Cart Drawer UI ---
function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartToggle.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// --- WhatsApp Checkout ---
whatsappCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let messageStr = "Hi, I want to order the following items:\n\n";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const absoluteImageUrl = new URL(item.image, window.location.href).href;
        messageStr += `${index + 1}. Product: ${item.name}\n`;
        messageStr += `   Qty: ${item.quantity}\n`;
        messageStr += `   Price: AED ${item.price.toFixed(2)}\n`;
        if (item.quantity > 1) {
            messageStr += `   Item Total: AED ${itemTotal.toFixed(2)}\n`;
        }
        messageStr += `   Image: ${absoluteImageUrl}\n\n`;
        totalPrice += itemTotal;
    });

    messageStr += `Total: AED ${totalPrice.toFixed(2)}\n\n`;
    messageStr += "Please confirm availability.";

    const encodedMessage = encodeURIComponent(messageStr);
    const whatsappUrl = `https://wa.me/971555162033?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
});

// --- Scroll Animations ---
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-on-scroll, .zoom-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach(el => observer.observe(el));
}

// --- Image Modal ---
const imageModal = document.getElementById('image-modal');
const imageModalImg = document.getElementById('image-modal-img');
const imageModalClose = document.querySelector('.image-modal-close');

document.addEventListener('click', (e) => {
    const wrapper = e.target.closest('.product-img-wrapper');
    if (wrapper) {
        const img = wrapper.querySelector('img');
        if (img) {
            imageModalImg.src = img.src;
            imageModalImg.alt = img.alt;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
});

function closeImageModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
}

imageModalClose.addEventListener('click', closeImageModal);
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) closeImageModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeImageModal();
});

// --- Sticky Header Logic ---
function initStickyHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });
}

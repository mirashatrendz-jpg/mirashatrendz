// --- Product Data ---
const products = [
    {
        id: 1,
        name: "Idol Coin Maanga Necklace ",
        price: 49,
        category: "Necklaces",
        image: "IdolCoinMaangaNecklace.webp"
    },
     {
        id: 1,
        name: "Ruby Stone Goddess WhiteBeads Necklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneGoddessWhiteBeadsNecklace.webp"
    },
     {
        id: 1,
        name: "Green Maanga Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "GreenMaangaInvisibleChain.webp"
    },
     {
        id: 1,
        name: "RubyStoneBeautifulGoddessWhitebeadsNecklace",
        price: 49,
        category: "Necklaces",
        image: "RubyStoneBeautifulGoddessWhitebeadsNecklace.webp"
    },
     {
        id: 1,
        name: "KempStoneGreenMangoPalakka ",
        price: 49,
        category: "Necklaces",
        image: "KempStoneGreenMangoPalakka.webp"
    },
     {
        id: 1,
        name: "LakshmiCoin Kemp Flower Choker Set",
        price: 49,
        category: "Necklaces",
        image: "LakshmiCoinKempFloweredChokerSet.webp"
    },
     {
        id: 1,
        name: "Antique Lakshmi Pendant InvisibleChain",
        price: 39,
        category: "Necklaces",
        image: "AntiqueLakshmiPendantInvisibleChain.webp"
    },
     {
        id: 1,
        name: "Multistone Temple Necklace Set",
        price: 39,
        category: "Necklaces",
        image: "MultistoneTempleNecklaceSet.webp"
    },
     {
        id: 1,
        name: "Ruby-Emerald Peacock Floral Choker Set",
        price: 39,
        category: "Necklaces",
        image: "Ruby-EmeraldPeacockFloralChokerSet.webp"
    },
     {
        id: 1,
        name: "Floral Kemp Green Palakka Necklace",
        price: 49,
        category: "Necklaces",
        image: "FloralKempGreenPalakkaNecklace.webp"
    },
     {
        id: 1,
        name: "Kundan Lotus Parrot Hasli Necklace",
        price: 59,
        category: "Necklaces",
        image: "KundanLotusParrotHasliNecklace.webp"
    },
     {
        id: 1,
        name: "Multicolor Flower Choker",
        price: 39,
        category: "Necklaces",
        image: "MulticolorFlowerChoker.webp"
    },
     {
        id: 1,
        name: "Ruby Maanga Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "RubyMaangaInvisibleChain.webp"
    },
     {
        id: 1,
        name: "Pastel Greenbeads Invisible Chain",
        price: 29,
        category: "Necklaces",
        image: "PastelGreenbeadsInvisibleChain.webp"
    },
     {
        id: 1,
        name: "MultistoneNon-IdolNecklace",
        price: 29,
        category: "Necklaces",
        image: "MultistoneNon-IdolNecklace.webp"
    },
     {
        id: 1,
        name: "Premium Elephant Motif Choker Set",
        price: 49,
        category: "Necklaces",
        image: "PremiumElephantMotifChokerSet.webp"
    },
     {
        id: 1,
        name: "Kemp Kathakali Necklace",
        price: 49,
        category: "Necklaces",
        image: "KempKathakaliNecklace.webp"
    },
     {
        id: 1,
        name: "Red Palakka Emerald Stone Necklaces",
        price: 49,
        category: "Necklaces",
        image: "RedPalakkaEmeraldStoneNecklaces.webp"
    },
     {
        id: 1,
        name: "Red Padma Choker Set",
        price: 39,
        category: "Necklaces",
        image: "RedPadmaLotusChokerSet.webp"
    },
     {
        id: 1,
        name: "Multistone Floral Idol Maanga Choker",
        price: 39,
        category: "Necklaces",
        image: "MultistoneFloralIdolMaangaChoker.webp"
    },
     {
        id: 1,
        name: "Antique Floral Multistone Choker",
        price: 29,
        category: "Necklaces",
        image: "AntiqueFloralMultistoneChoker.webp"
    },
     {
        id: 1,
        name: "Enamel Blue Palakka With Ruby Stones",
        price: 29,
        category: "Necklaces",
        image: "EnamelBluePalakkaWithRubyStones.webp"
    },
     {
        id: 1,
        name: "Multicolor Floral IdolCoin Necklace",
        price: 39,
        category: "Necklaces",
        image: "MulticolorFloralIdolCoinNecklace.webp"
    },
     {
        id: 1,
        name: "Green Palakka Ruby Stone Necklace",
        price: 49,
        category: "Necklaces",
        image: "GreenPalakkaRubyStoneNecklace.webp"
    },
     {
        id: 1,
        name: "Multilayer Pearl Chain",
        price: 29,
        category: "Necklaces",
        image: "MultilayerPearlChain.webp"
    },
     {
        id: 1,
        name: "Invisible Daimond Flower Necklace",
        price: 29,
        category: "Necklaces",
        image: "InvisibleDaimondFlowerNecklace.webp"
    },
     {
        id: 1,
        name: "Idol Lotus Necklace With Pearl Hanging",
        price: 39,
        category: "Necklaces",
        image: "IdolLotusNecklaceWithPearlHanging.webp"
    },
     {
        id: 1,
        name: "Multistone Goddess Pearl Hanging",
        price: 59,
        category: "Necklaces",
        image: "MultistoneGoddessPearlHanging.webp"
    },
     {
        id: 1,
        name: "Premium Lakshmi Pendant Coral and GreenBeads Necklace",
        price: 59,
        category: "Necklaces",
        image: "PremiumLakshmiPendantCoralandGreenBeadsNecklace.webp"
    },
     {
        id: 1,
        name: "Temple Hasli Necklace Set",
        price: 59,
        category: "Necklaces",
        image: "TempleHasliNecklaceSet.webp"
    },
     {
        id: 1,
        name: "Lakshmi Pendant Ruby Palakka Necklace",
        price: 69,
        category: "Necklaces",
        image: "LakshmiPendantRubyPalakkaNecklace.webp"
    },
     {
        id: 1,
        name: "Idol Pendant Premium Parrot Necklace",
        price: 69,
        category: "Necklaces",
        image: "IdolPendantPremiumParrotNecklace.webp"
    },
     {
        id: 1,
        name: "Lakshmi Pendant Green Palakka Necklace",
        price: 69,
        category: "Necklaces",
        image: "LakshmiPendantGreenPalakkaNecklace.webp"
    },
     {
        id: 1,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra.webp"
    },
     {
        id: 1,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra2.webp"
    },
     {
        id: 1,
        name: "Multicolour floral drops Mangalsutra",
        price: 39,
        category: "Necklaces",
        image: "Multicolour floral drops Mangalsutra.webp"
    },
     {
        id: 1,
        name: "Antique Kemp Lakshmi Necklace",
        price: 39,
        category: "Necklaces",
        image: "AntiqueKempLakshmiNecklace.webp"
    },
     {
        id: 1,
        name: "Mangalsutra",
        price: 29,
        category: "Necklaces",
        image: "Mangalsutra3.webp"
    },
     {
        id: 1,
        name: "Invisible Chain with White Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainwithWhiteStoneHeartDrops.webp"
    },
     {
        id: 1,
        name: "Invisible Chain with Red Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainwithRedStoneHeartDrops.webp"
    },
     {
        id: 1,
        name: "Invisible Chain with Black Stone Heart Drops",
        price: 9,
        category: "Necklaces",
        image: "InvisibleChainWithBlackStoneHeartDrops.webp"
    },
     {
        id: 1,
        name: "Multistone Non-Idol Floral Necklace",
        price: 35,
        category: "Necklaces",
        image: "MultistoneNon-idolFloralNecklace.webp"
    },
     {
        id: 1,
        name: "Kemp Multistone Goddess Maanga Necklace",
        price: 59,
        category: "Necklaces",
        image: "KempMultistoneGoddessMaangaNecklace.webp"
    },
     {
        id: 1,
        name: "Goddess Lakshmi Necklace",
        price: 59,
        category: "Necklaces",
        image: "GoddessLakshmiNecklace.webp"
    },
      {
        id: 1,
        name: "Traditional kasu Necklace Set",
        price: 49,
        category: "Necklaces",
        image: "TraditionalkasuNecklaceSet.webp"
    },
     {
        id: 1,
        name: "Temple Coin Ruby Choker Necklace",
        price: 49,
        category: "Necklaces",
        image: "TempleCoinRubyChokerNecklace.webp"
    },
     {
        id: 1,
        name: "Elephant Goddess Necklace With Pastel GreenHanging",
        price: 49,
        category: "Necklaces",
        image: "ElephantGoddessNecklaceWithPastelGreenHanging.webp"
    },
     {
        id: 1,
        name: "Kemp Stone Set With Ghungroo",
        price: 49,
        category: "Necklaces",
        image: "KempStoneSetwithGhungroo.webp"
    },
     {
        id: 1,
        name: "Long Hanging Ruby Lotus Necklace",
        price: 39,
        category: "Necklaces",
        image: "LongHangingRubyLotusNecklace.webp"
    },
     {
        id: 1,
        name: "Idol Lotus Necklace With Pearl Hanging",
        price: 39,
        category: "Necklaces",
        image: "IdolLotusNecklaceWithPearlHanging.webp"
    },
     {
        id: 1,
        name: "Kemp Naga Temple Invisible Chain",
        price: 39,
        category: "Necklaces",
        image: "KempNagaTempleInvisibleChain.webp"
    },
     {
        id: 1,
        name: "ThreeLayer Gold And Pearl Beads Necklace",
        price: 39,
        category: "Necklaces",
        image: "ThreeLayerGoldAndPearlBeadsNecklace.webp"
    },
     {
        id: 1,
        name: "Kemp RadhaKrishna Necklace",
        price: 39,
        category: "Necklaces",
        image: "KempRadhaKrishnaNecklace.webp"
    },
     {
        id: 1,
        name: "Green Lotus Choker Necklace",
        price: 49,
        category: "Necklaces",
        image: "GreenLotusChokerNecklace.webp"
    },
     {
        id: 1,
        name: "Temple Coin Emerald Choker Set",
        price: 49,
        category: "Necklaces",
        image: "TempleCoinEmeraldChokerSet.webp"
    },
     {
        id: 1,
        name: "Non-idol Floral Coin Necklace",
        price: 39,
        category: "Necklaces",
        image: "Non-idolFloralCoinNecklace.webp"
    },
     {
        id: 1,
        name: "Ruby And Emerald Floral Choker Set",
        price: 29,
        category: "Necklaces",
        image: "RubyAndEmeraldFloralChokerSet.webp"
    },
     {
        id: 1,
        name: "Minimal Diamond Vine Choker",
        price: 39,
        category: "Necklaces",
        image: "MinimalDiamondVineChoker.webp"
    },
     {
        id: 1,
        name: "Shanku Chakra Namam Necklace Set",
        price: 39,
        category: "Necklaces",
        image: "ShankuChakraNamamNecklaceSet.webp"
    },
     {
        id: 1,
        name: "Ahaana Inspired Peacock Necklace",
        price: 49,
        category: "Necklaces",
        image: "AhaanaInspiredPeacockNecklace.webp"
    },
     {
        id: 1,
        name: "SquareCut Emeralds Lakshmi Pendant Chain",
        price: 39,
        category: "Necklaces",
        image: "SquareCutEmeraldsLakshmiPendantChain.webp"
    },
     {
        id: 1,
        name: "Layerd Pearl Chain with Pendant ",
        price: 29,
        category: "Necklaces",
        image: "LAYEREDPEARLCHAINWITHPENDANT.webp"
    },
     {
        id: 2,
        name: "Antique Jadau Coin Haaram",
        price: 69,
        category: "Haarams",
        image: "AntiqueJadauCoinHaaram.webp"
    },
     {
        id: 2,
        name: "Temple Heavy Bridal Set",
        price: 119,
        category: "Haarams",
        image: "TempleHeavyBridalSet.webp"
    },
     {
        id: 2,
        name: "Lakshmi Vaibhavam Ruby Beads Haaram",
        price: 79,
        category: "Haarams",
        image: "LakshmiVaibhavamRubyBeadsHaaram.webp"
    },
     {
        id: 2,
        name: "Layered Pearl Mahalakshmi Pendant Haaram",
        price: 49,
        category: "Haarams",
        image: "LayeredPearlMahalakshmiPendantHaaram.webp"
    },
     {
        id: 2,
        name: "Antique Long Goddess Haaram",
        price: 69,
        category: "Haarams",
        image: "AntiqueLongGoddessHaaram.webp"
    },
     {
        id: 2,
        name: "Idol Pendant Gold Beads Haaram",
        price: 39,
        category: "Haarams",
        image: "IdolPendantGoldBeadsHaaram.webp"
    },
     {
        id: 2,
        name: "Long Palakka Set",
        price: 49,
        category: "Haarams",
        image: "LongPalakkaSet.webp"
    },
     {
        id: 2,
        name: "Green Enamel Lakshmi Pendant Ball Chain Haaram",
        price: 49,
        category: "Haarams",
        image: "GreenEnamelLakshmiPendantBallChainHaaram.webp"
    },
     {
        id: 2,
        name: "Ruby Goddess Haaram",
        price: 79,
        category: "Haarams",
        image: "RubyGoddessHaaram.webp"
    },
     {
        id: 2,
        name: "Peacock Goddess Pearl Haaram",
        price: 59,
        category: "Haarams",
        image: "PeacockGoddessPearlHaaram.webp"
    },
     {
        id: 2,
        name: "Dasavathara Temple Haaram",
        price: 89,
        category: "Haarams",
        image: "DasavatharaTempleHaaram.webp"
    },
     {
        id: 2,
        name: "Nakshi Rice Drop Antique Jhumka",
        price: 49,
        category: "Earrings",
        image: "NakshiRiceDropAntiqueJhumka.webp"
    },
     {
        id: 2,
        name: "Non-idol Bridal Set",
        price: 99,
        category: "Haarams",
        image: "Non-idolBridalSet.webp"
    },
     {
        id: 2,
        name: "IdolCoinTempleHaaram",
        price: 49,
        category: "Haarams",
        image: "IdolCoinTempleHaaram.webp"
    },
     {
        id: 2,
        name: "Premium AD climber Earcuff",
        price: 29,
        category: "Earrings",
        image: "PremiumADcimberEarcuff29.webp"
    },
      {
        id: 2,
        name: "Jadau Kundan Floral Design Bugadi",
        price: 29,
        category: "Earrings",
        image: "JadauKundanFloralDesignBugadi.webp"
    },
     {
        id: 2,
        name: "Enamel Palakk Jhumka With GreenBeads",
        price: 29,
        category: "Earrings",
        image: "EnamelPalakkJhumkaWithHangingGreenBeads.webp"
    },
     {
        id: 2,
        name: "Non-idol Haaram",
        price: 79,
        category: "Haarams",
        image: "Non-idolHaaram.webp"
    },
     {
        id: 2,
        name: "Idol Coin Bridal Set",
        price: 79,
        category: "Haarams",
        image: "IdolCoinBridalSet.webp"
    },
     {
        id: 2,
        name: "Goddess Beautiful Haaram",
        price: 119,
        category: "Haarams",
        image: "GoddessHeavyHaaram.webp"
    },
     {
        id: 3,
        name: "Navaratna Necklace",
        price: 69,
        category: "AD Necklaces",
        image: "NavaratnaNecklace.webp"
    },
     {
        id: 3,
        name: "Royal Emerald Necklace Set",
        price: 69,
        category: "AD Necklaces",
        image: "RoyalEmeraldNecklaceSet.webp"
    },
     {
        id: 3,
        name: "Multistone Floral Double Layer Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "MultistoneFloralDoubleLayerNecklace.webp"
    },
      {
        id: 3,
        name: "Geometric Pattern Diamond Necklace Set",
        price: 49,
        category: "AD Necklaces",
        image: "GeometricPatternDiamondNecklaceSet.webp"
    },
     {
        id: 3,
        name: "Crystal Heart Charm Necklace Set",
        price: 39,
        category: "AD Necklaces",
        image: "CrystalHeartCharmNecklaceSet.webp"
    },
     {
        id: 3,
        name: "WaterDrop Diamond Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "WaterDropDiamondNecklace.webp"
    },
     {
        id: 3,
        name: "Minimal Ruby Vine Choker",
        price: 39,
        category: "AD Necklaces",
        image: "MinimalRubyVineChoker.webp"
    },
     {
        id: 3,
        name: "Premium Victorian Emerald Diamond Necklace Set",
        price: 89,
        category: "AD Necklaces",
        image: "PremiumVictorianEmeraldDiamondNecklaceSet.webp"
    },
      {
        id: 3,
        name: "AD Pendant Pearl Halo Necklace",
        price: 69,
        category: "AD Necklaces",
        image: "ADPendantPearlHaloNecklace.webp"
    },
     {
        id: 3,
        name: "Gold Plated Multistone AD Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "GoldPlatedMultistoneADNecklace.webp"
    },
     {
        id: 3,
        name: "Crystal Bloom Necklace Set",
        price: 59,
        category: "AD Necklaces",
        image: "CrystalBloomNecklaceSet-.webp"
    },
     {
        id: 3,
        name: "Ruby Blossom Necklace Set",
        price: 59,
        category: "AD Necklaces",
        image: "RubyBlossomNecklaceSet.webp"
    },
     {
        id: 3,
        name: "Layered Hasli Multistone Necklace",
        price: 59,
        category: "AD Necklaces",
        image: "LayeredHasliMultistoneNecklace.webp"
    },
     {
        id: 3,
        name: "Kundan Stone Pendant PearlDrops",
        price: 39,
        category: "AD Necklaces",
        image: "KundanStonePendantPearlDropsNecklace.webp"
    },
     {
        id: 3,
        name: "Snow Flakes Diamond Necklace",
        price: 49,
        category: "AD Necklaces",
        image: "SnowFlakesDiamondNecklace.webp"
    },
      {
        id: 3,
        name: "Hollow Circle Diamond Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "HollowCircleDiamondNecklace.webp"
    },
      {
        id: 3,
        name: "Quilted-Texture Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "Quilted-TextureAdjustableRing.webp"
    },
     {
        id: 3,
        name: "Jyothika Inspired Emerald Necklace",
        price: 89,
        category: "AD Necklaces",
        image: "JyothikaInspiredEmeraldNecklace.webp"
    },
      {
        id: 3,
        name: "Premium Idol Pendant Emerald Stone",
        price: 69,
        category: "AD Necklaces",
        image: "IdolPendantEmeraldStonePremiumNecklace.webp"
    },
      {
        id: 3,
        name: "Premium Queen Necklace",
        price: 99,
        category: "AD Necklaces",
        image: "PremiumQueenNecklace.webp"
    },
      {
        id: 3,
        name: "Diamond Dew Necklace",
        price: 39,
        category: "AD Necklaces",
        image: "DiamondDewNecklace.webp"
    },
     {
        id: 3,
        name: "Ruby And Daimond Leaf Invisible AD",
        price: 59,
        category: "AD Necklaces",
        image: "RubyAndDaimondLeafInvisibleAD.webp"
    },
     {
        id: 4,
        name: "Dancing Girl EarCuff",
        price: 19,
        category: "Earrings",
        image: "DancingGirlEarCuff.webp"
    },
      {
        id: 4,
        name: "JadauKundanHalfMoonBugadi",
        price: 29,
        category: "Earrings",
        image: "JadauKundanHalfMoonBugadi.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud10.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 9,
        category: "Earrings",
        image: "DailyWearStud11.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud9.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud8.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud7.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud2.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud6.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud5.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud4.webp"
    },
     {
        id: 4,
        name: "Daily Wear Stud",
        price: 19,
        category: "Earrings",
        image: "DailyWearStud3.webp"
    },
     {
        id: 6,
        name: "Adjustable Chain with Waterdrop Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableChainwithWaterdropPendant.webp"
    },
     {
        id: 6,
        name: "Elora Oval Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "EloraOvalStud.webp"
    },
     {
        id: 6,
        name: "Heart Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartTexturedStud.webp"
    },
     {
        id: 6,
        name: "Open Cage Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "OpenCageRing.webp"
    },
     {
        id: 6,
        name: "Looping Twist Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "LoopingTwistRing.webp"
    },
     {
        id: 6,
        name: "Multi Loop Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "MultiLoopRing.webp"
    },
     {
        id: 6,
        name: "Coiled Serpant Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "CoiledSerpant.webp"
    },
     {
        id: 6,
        name: "Gold Open Fluid Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "GoldOpenFluidRing.webp"
    },
     {
        id: 6,
        name: "Multilayered Crisscross Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "MultilayeredCrisscrossRing.webp"
    },
     {
        id: 6,
        name: "Star Rabbit Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "StarRabbitStainlessSteelRing.webp"
    },
      {
        id: 6,
        name: "Isla Shell Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "IslaShellStud.webp"
    },
     {
        id: 6,
        name: "The Cora Heart Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TheCoraHeartStud.webp"
    },
     {
        id: 6,
        name: "DropletStud",
        price: 9,
        category: "Anti-Tarnish",
        image: "DropletStud.webp"
    },
     {
        id: 6,
        name: "Nugget Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "NuggetStud.webp"
    },
     {
        id: 6,
        name: "Mila Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MilaStud.webp"
    }, 
     {  id: 6,
        name: "Luna Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "LunaStud.webp"
    },
     {
        id: 6,
        name: "The Trinity Mini Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TheTrinityMiniStud.webp"
    },
     {
        id: 6,
        name: "Cleo Ribbed Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "CleoRibbedStud.webp"
    },
     {
        id: 6,
        name: "Maya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MayaTexturedStud.webp"
    },
      {
        id: 6,
        name: "Aria Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "AriaStud.webp"
    },
     {
        id: 6,
        name: "Tara Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "TaraStud.webp"
    },
     {
        id: 6,
        name: "Alba Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "AlbaStud.webp"
    },
     {
        id: 6,
        name: "Star Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "StarTexturedStud.webp"
    },
      {
        id: 6,
        name: "Nina Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "NinaStud.webp"
    },
     {
        id: 6,
        name: "Mini Teddy Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "MiniTeddyStud.webp"
    },
     {
        id: 6,
        name: "BlueOnyxRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlueOnyxRing.webp"
    },
     {
        id: 6,
        name: "Ruby Reign Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "RubyReignRing.webp"
    },
     {
        id: 6,
        name: "Orchid Glow Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "OrchidGlowRing.webp"
    },
     {
        id: 6,
        name: "EmeraldReignRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "EmeraldReignRing.webp"
    },
     {
        id: 6,
        name: "BlushPinkRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlushPinkRing.webp"
    },
      {
        id: 6,
        name: "Reya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "ReyaTexturedStud.webp"
    },
      {
        id: 6,
        name: "Reya Textured Stud",
        price: 9,
        category: "Anti-Tarnish",
        image: "ReyaTexturedStud.webp"
    },
      {
        id: 6,
        name: "Hollow Oval Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "HollowOvalRing.webp"
    },
      {
        id: 6,
        name: "BlackOnyxRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "BlackOnyxRing.webp"
    },
     {
        id: 6,
        name: "Open Twist Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "OpenTwistRing.webp"
    },
      {
        id: 6,
        name: "CrystalWhiteRing",
        price: 15,
        category: "Anti-Tarnish",
        image: "CrystalWhiteRing.webp"
    },
     {
        id: 6,
        name: "Amber Solitaire Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "AmberSolitaireRing.webp"
    },
     {
        id: 6,
        name: "Faye Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "FayeStud.webp"
    },
      {
        id: 6,
        name: "HeartNecklace",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartNecklace.webp"
    },
     {
        id: 6,
        name: "Bamboo Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BambooRing.webp"
    },
     {
        id: 6,
        name: "Ruby Gem Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "RubyGemRing.webp"
    },
      {
        id: 6,
        name: "Twilight TeaDrop EarHook",
        price: 19,
        category: "Earrings",
        image: "TwilightTeaDropEarhook.webp"
    },
      {
        id: 6,
        name: "IcePetalEarHook",
        price: 19,
        category: "Earrings",
        image: "IcePetalEarHook.webp"
    },
      {
        id: 6,
        name: "Black Sapphire Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BlackSapphireRing.webp"
    },
     {
        id: 6,
        name: "Blue Sapphire Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "BlueSapphireRing.webp"
    },
      {
        id: 6,
        name: "Emerald Gem Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "EmeraldGemRing.webp"
    },
     {
        id: 6,
        name: "Lily Bow Necklace",
        price: 9,
        category: "Anti-Tarnish",
        image: "LillyBowNecklace.webp"
    },
     {
        id: 6,
        name: "Heart Pattern Ring",
        price: 9,
        category: "Anti-Tarnish",
        image: "HeartPatternRing.webp"
    },
     {
        id: 6,
        name: "Yara Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "YaraStud.webp"
    },
     {
        id: 6,
        name: "Flora Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "FloraStud.webp"
    },
     {
        id: 6,
        name: "Butterfly Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "ButterflyStud.webp"
    },
     {
        id: 6,
        name: "Zara Stud",
        price: 19,
        category: "Anti-Tarnish",
        image: "ZaraStud.webp"
    },
     {
        id: 6,
        name: "Snake Chain with Black Stone Pendant",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableSnakeChainwithBlackStonePendant.webp"
    },
     {
        id: 7,
        name: "One Muzham Jasmine Strings",
        price: 62,
        category: "Jasmine Strings",
        image: "OneMuzhamJasmineStrings.webp"
    },
     {
        id: 7,
        name: "Two Muzham Jasmine Strings",
        price: 124,
        category: "Jasmine Strings",
        image: "TwoMuzhamJasmineStrings.webp"
    },
     {
        id: 8,
        name: "KAMADHENU NECKLACE Necklace",
        price: 39,
        category: "Necklaces",
        image: "KAMADHENUNECKLACE.webp"
    },
     {
        id: 9,
        name: "Mayura Non-Idol Bangles",
        price: 29,
        category: "Bangles",
        image: "MayuraNon-IdolBangles.JPG.webp"
    },
     {
        id: 9,
        name: "Kempstone Antique Bangles",
        price: 39,
        category: "Bangles",
        image: "KempstoneAntiqueBangles.webp"
    },
      {
        id: 9,
        name: "Blue Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "RaindropBlueBangles.webp"
    },
      {
        id: 9,
        name: "Maroon Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "MaroonRaindropBangles.webp"
    },
       {
        id: 9,
        name: "Black Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "BlackRaindropBangles.webp"
    },
      {
        id: 9,
        name: "RaniPink Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "RaniPinkRaindropBangles.webp"
    },
     {
        id: 9,
        name: "Green Raindrop Bangles",
        price: 19,
        category: "Bangles",
        image: "GreenRaindropBangles.webp"
    },
     {
        id: 9,
        name: "Black Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "BlackZaaraBangles.webp"
    },
     {
        id: 9,
        name: "HotPink Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "HotPinkZaaraBangles.webp"
    },
     {
        id: 9,
        name: "Green Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "GreenZaaraBangles.webp"
    },
     {
        id: 9,
        name: "Open Crisscross Ring",
        price: 29,
        category: "Bangles",
        image: "OpenCrisscrossRing.webp"
    },
     {
        id: 9,
        name: "Bright Orange Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "BrightOrangeRoseBangles.webp"
    },
     {
        id: 9,
        name: "Cyan Blue Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "CyanBlueRoseBangles.webp"
    },
     {
        id: 9,
        name: "Lime Green Rose Bangles",
        price: 29,
        category: "Bangles",
        image: "LimeGreenRoseBangles.webp"
    },
     {
        id: 9,
        name: "Maroon Zaara Bangles",
        price: 29,
        category: "Bangles",
        image: "MaroonZaaraBangles.webp"
    },
     {
        id: 9,
        name: "Multistone Goddess Bangles",
        price: 59,
        category: "Bangles",
        image: "MultistoneGoddessBangles.JPG.webp"
    },
     {
        id: 9,
        name: "Green Palakka Bangles",
        price: 39,
        category: "Bangles",
        image: "GreenPalakkaBangles.JPG.webp"
    },
     {
        id: 9,
        name: "Multistone Non-Idol Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneNon-IdolBangles.JPG.webp"
    },
     {
        id: 9,
        name: "EmerladStoneGoddessBangle",
        price: 39,
        category: "Bangles",
        image: "EmerladStoneGoddessBangle.JPG.webp"
    },
     {
        id: 9,
        name: "Matte Elephant Motifs",
        price: 29,
        category: "Bangles",
        image: "MatteElephantMotifs.JPG.webp"
    },
     {
        id: 9,
        name: "Openable Premium Camel Motif Kadas",
        price: 79,
        category: "Bangles",
        image: "OpenablePremiumCamelMotifKadas.JPG.webp"
    },
     {
        id: 9,
        name: "Openable Premium Ganesha Elephant Kadas",
        price: 59,
        category: "Bangles",
        image: "OpenablePremiumGaneshaElephantKadas.JPG.webp"
    },
     {
        id: 9,
        name: "RAMPARIVAR Openable Premium Kadas",
        price: 79,
        category: "Bangles",
        image: "RAMPARIVAROpenablePremiumKadas.JPG.webp"
    },
     {
        id: 9,
        name: "Non-Idol Multistone Matte Bangles",
        price: 39,
        category: "Bangles",
        image: "Non-IdolMultistoneMatteBangles.JPG.webp"
    },
     {
        id: 9,
        name: "Multistone Beautiful Goddess Bangles",
        price: 39,
        category: "Bangles",
        image: "MultistoneBeautifulGoddessBangles.JPG.webp"
    },
     {
        id: 9,
        name: "Infine Love Bangles",
        price: 19,
        category: "Bangles",
        image: "Infinelovebangles.webp"
    },
     {
        id: 9,
        name: "Three CircularStone Bangles",
        price: 19,
        category: "Bangles",
        image: "ThreeCircularStoneBangles.webp"
    },
     {
        id: 9,
        name: "OpenType Ruby White Flower Bangle",
        price: 19,
        category: "Bangles",
        image: "OpenTypeRubyWhiteFlower.webp"
    },
     {
        id: 9,
        name: "Clustered White Floral Split Bangles",
        price: 19,
        category: "Bangles",
        image: "ClusteredWhiteFloralSplitBangles.webp"
    },
     {
        id: 9,
        name: "InterlockingRingBangles",
        price: 19,
        category: "Bangles",
        image: "InterlockingRingBangles.webp"
    },
     {
        id: 9,
        name: "Double Layer Kemp Multistone Necklace",
        price: 29,
        category: "Necklaces",
        image: "DoubleLayerKempMultistoneNecklace.webp"
    },
     {
     
        id: 9,
        name: "Adjustable Butterfly Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableButterflyDesignHandcuff.webp"
    },
     {
        id: 9,
        name: "Adjustable Multilayer stoned Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "AdjustableMultilayerWiresWrapHandcuff.webp"
    },
     {
        id: 9,
        name: "Adjustable Gold Floral Design Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableGoldFloralDesignHandcuff.webp"
    },
     {
        id: 9,
        name: "Adjustable Daisy Flower Handcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableDaisyFlowerHandcuff.webp"
    },
     {
        id: 9,
        name: "Sunburst Circle Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "SunburstCircleAdjustableRing.webp"
    },
     {
        id: 9,
        name: "SpiralSwirlOpencuffBraceletwithRing",
        price: 29,
        category: "Anti-Tarnish",
        image: "SpiralSwirlOpencuffBraceletwithRing.webp"
    },
     {
        id: 9,
        name: "Hollow Abstract Geometric Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HollowAbstractGeometricRing.webp"
    },
     {
        id: 9,
        name: "Floral Design Adjustable Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "FloralDesignAdjustableRing.webp"
    },
     {
        id: 9,
        name: "AdjustableMultilayerHandcuff",
        price: 19,
        category: "Anti-Tarnish",
        image: "AdjustableMultilayerHandcuff.webp"
    },
     {
        id: 9,
        name: "Steel Daimond Bracelet Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "SteelDaimondBraceletWatch.webp"
    },
     {
        id: 9,
        name: "Adjustable Leaf Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "AdjustableLeafHandcuff.webp"
    },
     {
        id: 9,
        name: "ThreeLayerChain Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "ThreeLayerChain Watch.webp"
    },
     {
        id: 9,
        name: "Heart Charms Openable Kada",
        price: 39,
        category: "Anti-Tarnish",
        image: "HeartCharmsOpenable.webp"
    },
     {
        id: 9,
        name: "Hallow Abstract Geometric Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HallowAbstractRing.webp"
    },
     {
        id: 9,
        name: "Hallow Abstract Knot Design Ring",
        price: 15,
        category: "Anti-Tarnish",
        image: "HallowAbstractKnotDesignRing.webp"
    },
     {
        id: 9,
        name: "Bow Knot Pendant Chain",
        price: 9,
        category: "Anti-Tarnish",
        image: "BowKnotPendantChain.webp"
    },
     {
        id: 9,
        name: "ElegantBraceletWatch",
        price: 29,
        category: "Anti-Tarnish",
        image: "ElegantBraceletWatch.webp"
    },
     {
        id: 9,
        name: "Spiral Open Handcuff",
        price: 29,
        category: "Anti-Tarnish",
        image: "SpiralOpenHandcuff.webp"
    },
      {
        id: 9,
        name: "Grecian Pattern Bangle Watch",
        price: 29,
        category: "Anti-Tarnish",
        image: "GrecianPatternBangleWatch.webp"
    },
     {
        id: 10,
        name: "Eternal Hollow Heart Charm and Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EternalHollowHeartCharmandCrystalNecklace.webp"
    },
     {
        id: 11,
        name: "Gold Floral With Central Crystal Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "GoldFloralWithCentralCrystalNecklace.webp"
    },
     {
        id: 11,
        name: "V-Shaped Ring",
        price: 19,
        category: "Anti-Tarnish",
        image: "V-ShapedRing.webp"
    },
     {
        id: 11,
        name: "Solid Heart Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidHeartCharmsNecklace.webp"
    },
     {
        id: 11,
        name: "Enamel details Cat and Flower Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "EnameldetailsCatandFlowerPendantNecklace.webp"
    },
     {
        id: 11,
        name: "FloralCharmsandColourfulStonesNecklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "FloralCharmsandColourfulStonesNecklace.webp"
    },
     {
        id: 11,
        name: "Solid Butterfly Charms with Colorful Stones Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "SolidButterflyCharmswithColorfulStonesNecklace.webp"
    },
     {
        id: 11,
        name: "Openable Floral Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenableFloralPendantNecklace.webp"
    },
     {
        id: 11,
        name: "Cherry Charm Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "CherryCharmPendantNecklace.webp"
    },
     {
        id: 11,
        name: "Double Layer Necklace With Heart and Bow",
        price: 19,
        category: "Anti-Tarnish",
        image: "DoubleLayerNecklaceWithHeartandBow.webp"
    },
     {
        id: 11,
        name: "BlackStone Charms Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "BlackStoneCharmsNecklace.webp"
    },
     {
        id: 11,
        name: "Pink Enamel Butterfly Pendant Necklace",
        price: 19,
        category: "Anti-Tarnish",
        image: "OpenablePinkEnamelButterflyPendantNecklace.webp"
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

// --- Product Rendering & Filtering ---
function renderProducts(filterStr) {
    productList.innerHTML = '';

    const filtered = filterStr === 'All'
        ? products
        : products.filter(p => p.category === filterStr);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card zoom-in';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="product-price-original">AED ${(product.price * 1.5).toFixed(2)}</span>
                AED ${product.price.toFixed(2)}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
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
    if (!productDef) return;

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

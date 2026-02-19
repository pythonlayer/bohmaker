// Music types from Reflourished codenames
const MUSIC_TYPES = [
    { name: 'Ultimate Battle', value: 'MiniGame_A' },
    { name: 'Demonstration Minigame', value: 'MiniGame_B' },
    { name: 'Cerebrawl', value: 'MiniGame_C' },
    { name: 'Cerebrawl (Player\'s House)', value: 'MiniGame_C2' },
    { name: 'Miniboss Music (FBC only)', value: 'MiniGame_MiniBoss' }
];

// Sound IDs from carnival JSON files
const SOUND_IDS = [
    'Play_Awooga',
    'Play_Siren',
    'Play_UI_Grave_Spawn'
];

// Zombie types (pipe-separated string - easy to paste from external list)
const ZOMBIE_TYPES_RAW = 'mummy|mummy_armor1|mummy_armor2|mummy_armor4|mummy_flag|mummy_flag_veteran|ra|camel_onehump|camel_twohump|camel_manyhump|explorer|explorer_veteran|tomb_raiser|pharaoh|egypt_gargantuar|egypt_imp|pirate|pirate_armor1|pirate_armor2|pirate_armor4|pirate_flag|pirate_flag_veteran|swashbuckler|seagull|pelican|barrelroller|pirate_barrel|barrelroller_explosive|pirate_barrel_explosive|cannon|pirate_captain|pirate_gargantuar|pirate_imp|cowboy|cowboy_armor1|cowboy_armor2|cowboy_armor4|cowboy_flag|cowboy_flag_veteran|prospector|piano|poncho|poncho_plate|poncho_no_plate|chicken_farmer|chicken|west_bull|west_bull_veteran|cowboy_gargantuar|west_bullrider|future|future_armor1|future_armor2|future_armor4|future_flag|future_flag_veteran|future_jetpack|future_jetpack_veteran|future_protector|future_protector_generator|mech_cone|disco_mech|future_jetpack_disco|football_mech|future_gargantuar|future_imp|dark|dark_armor1|dark_armor2|dark_armor3|dark_armor4|dark_flag|dark_flag_veteran|dark_juggler|dark_wizard|dark_wizard_veteran|dark_king|dark_robber|dark_imp_dragon|dark_explorer|dark_gargantuar|dark_imp|beach|beach_armor1|beach_armor2|beach_armor4|beach_fem|beach_fem_armor1|beach_fem_armor2|beach_fem_armor4|beach_flag|beach_flag_veteran|beach_snorkel|beach_snorkel_veteran|beach_surfer|beach_octopus|beach_fisherman|beach_gargantuar|beach_imp|iceage|iceage_armor1|iceage_armor2|iceage_armor3|iceage_armor4|iceage_flag|iceage_flag_veteran|iceage_hunter|iceage_dodo|iceage_dodo_veteran|iceage_troglobite_1block|iceage_troglobite_2block|iceage_troglobite|iceage_weaselhoarder|iceage_weasel|iceage_gargantuar|iceage_imp|lostcity|lostcity_armor1|lostcity_armor2|lostcity_armor4|lostcity_flag|lostcity_flag_veteran|lostcity_excavator|lostcity_jane|lostcity_lostpilot|lostcity_bug|lostcity_bug_armor1|lostcity_bug_armor2|lostcity_impporter|lostcity_relichunter|lostcity_crystalskull|lostcity_crystalskull_veteran|lostcity_explorer|lostcity_gargantuar|lostcity_imp|eighties|eighties_armor1|eighties_armor2|eighties_armor4|eighties_flag|eighties_flag_veteran|eighties_punk|eighties_punk_veteran|eighties_glitter|eighties_mc|eighties_breakdancer|eighties_arcade|eighties_8bit|eighties_8bit_armor1|eighties_8bit_armor2|eighties_boombox|eighties_gargantuar|eighties_imp|eighties_punk_8bit|eighties_punk_veteran_8bit|eighties_glitter_8bit|eighties_mc_8bit|eighties_breakdancer_8bit|eighties_boombox_8bit|eighties_gargantuar_8bit|dino|dino_armor1|dino_armor2|dino_armor3|dino_armor4|dino_flag|dino_flag_veteran|dino_bully|dino_bully_blue|dino_bully_veteran|dino_pterry|dino_eggshell|dino_eggstealer|dino_gargantuar|dino_imp|tutorial|tutorial_armor1|tutorial_armor2|tutorial_armor4|tutorial_flag|tutorial_flag_veteran|modern_newspaper|newspaper_veteran|modern_balloon|tutorial_balloon|modern_allstar|modern_superfanimp|tutorial_gargantuar|tutorial_imp|miniboss_impfinity|birthday_caketank|hero_zmech|hero_crystalskull|feastivus_multplicity|mashup_arcade|iceage_hunter_veteran|iceage_weaselhoarder_veteran|iceage_weasel_veteran|iceage_charred|iceage_chief|iceage_chief_veteran|iceage_chief_miniboss_phase1|iceage_chief_miniboss_phase2|iceage_chief_miniboss_friend_spawner|steam|steam_armor1|steam_armor2|steam_flag|steam_gentleman|steam_barrel|steam_miner|steam_miner_armor1|steam_miner_armor2|steam_miner_coal|steam_gargantuar|steam_imp|steam_furnace|steam_mechanic|steam_clockwork|steam_clockwork_blue|steam_clockwork_green|steam_inventor|steam_repairimp|steam_back|steam_back_armor1|steam_back_armor2|steam_back_flag|steam_back_imp|treasureyeti|holiday_treasureyeti|vase_gargantuar|feastivus_caketank|space_dancer|space_dancer_8bit|pet|foodfight_turkey_boss|imppear_piano|imppear_imp_summoner|imppear_overseer|fire_ball|ice_ball|zoybeanpod_basic|zoybeanpod_armor1|zoybeanpod_armor2|zoybeanpod_gargantuar|turkeypult_basic|turkeypult_turkzilla|imppear_imp|solarsage_enlightened|gum|valentines|valentines_armor1|valentines_armor2|valentines_flag|valentines_jane|valentines_balloon|valentines_superfanimp|summer_boombox|summer_boombox_ballad|valentines_gargantuar|valentines_imp|valentines_lovebomb|stpatrick|stpatrick_armor1|stpatrick_armor2|stpatrick_flag|stpatrick_ra|leprachaun_dodo|stpatrick_glitter|stpatrick_glitter_pop|stpatrick_punk|stpatrick_punk_punk|stpatrick_gargantuar|stpatrick_gargantuar_metal|leprachaun_imp|spring|spring_armor1|spring_armor2|spring_armor4_blue|spring_armor4_red|spring_armor4_green|spring_flag|spring_camel_onehump|spring_camel_twohump|spring_camel_manyhump|spring_poncho|spring_poncho_plate|spring_poncho_no_plate|spring_wizard|spring_prospector|easter_troglobite_1block|easter_troglobite_2block|easter_troglobite|spring_gargantuar|spring_imp|spring_gargantuar_af|spring_imp_af|chocolate_launcher1|chocolate_launcher2|chocolate_launcher3|chocolate_launcher4|chocolate_launcher5|birthday|birthday_armor1|birthday_armor2|birthday_flag|birthday_flag|birthday_pharaoh|birthday_barrel|birthday_jetpack|birthday_juggler|birthday_troglobite_1block|birthday_troglobite_2block|birthday_troglobite|birthday_barrelroller|birthday_mech_cone|birthday_imp|birthday_gargantuar|children_basic|children_armor1|children_armor2|children_armor4|children_flag|children_balloon|children_captain|children_football_mech|children_gargantuar|children_imp|summer_basic|summer_armor1|summer_armor2|summer_flag|summer_bug|summer_bug_armor1|summer_bug_armor2|summer_explorer|summer_gargantuar|summer_imp|halloween|halloween_armor1|halloween_armor2|halloween_flag|halloween_witch|halloween_breakdancer|halloween_crow|halloween_ghost|halloween_relichunter|halloween_octopus|halloween_gargantuar|halloween_imp|bighead|bighead_armor1|bighead_armor2|bighead_flag|bighead_newspaper|bighead_balloon|bighead_allstar|bighead_superfan|bighead_barrelroller|bighead_barrel|bighead_lostpilot|bighead_gargantuar|bighead_imp|foodfight|foodfight_armor1|foodfight_armor2|foodfight_flag|foodfight_overstuff|foodfight_protector|foodfight_chefster|foodfight_gobbler_king|foodfight_turkey|foodfight_gargantuar|foodfight_imp|feastivus|feastivus_armor1|feastivus_armor2|feastivus_flag|feastivus_piano|feastivus_swashbuckler|feastivus_poncho|feastivus_poncho_plate|feastivus_poncho_no_plate|feastivus_gargantuar|feastivus_imp|feastivus_camel_onehump|feastivus_camel_twohump|feastivus_camel_manyhump|feastivus_troglobite_1block|feastivus_troglobite_2block|feastivus_troglobite|feastivus_hunter|feastivus_fisherman|holiday_gargantuar|holiday_imp|zcorp|zcorp_armor1|zcorp_armor2|zcorp_armor4|zcorp_fem|zcorp_fem_armor1|zcorp_fem_armor2|zcorp_fem_armor4|zcorp_flag|zcorp_consultant|zcorp_helpdesk|zcorp_racer_chair|zcorp_racer|zcorp_gargantuar|zcorp_imp|hero_electricboogaloo|hero_armor1|hero_armor2|hero_flag|hero_disco_mech|hero_jetpack_disco|hero_rustbolt|hero_superbrainz|hero_weaselhoarder|hero_weasel|galaxy_dodo|hero_barrelroller|hero_barrel|hero_smash|hero_impfinity|hero_neptuna|lunar|lunar_armor1|lunar_armor2|lunar_flag|lunar_superfanimp|lunar_camel_onehump|lunar_camel_twohump|lunar_camel_manyhump|lunar_relichunter|lunar_bandit|lunar_moneytree|lion_dance|lunar_gargantuar|lunar_imp|endlesswealth|sportzball|sportzball_armor1|sportzball_armor2|sportzball_foam|sportzball_armor1_foam|sportzball_armor2_foam|sportzball_flag|sportzball_flag_armor1|sportzball_flag_armor2|sportzball_wizard|sportzball_balloon|sportzball_gargantuar|sportzball_imp|chili|chili_armor1|chili_armor2|chili_armor4|chili_flag|valentines_seagull|stpatrick_breakdancer|stpatrick_breakdancer_8bit|stpatrick_ballista|birthday_magician|summer_ra|halloween_excavator|feastivus_troglobite_armor1|feastivus_troglobite_armor2|toymaker_troglobite|feastivus_troglobite_gobbler|dark_gravedropper|dark_infected|beach_toxicwater|eighties_bass_c7|eighties_bass_c6|eighties_bass|eighties_bass_c4|eighties_bass_c3|roman|roman_armor1|roman_armor2|roman_armor3|roman_armor4|roman_flag|roman_healer|roman_segment|roman_shield_top|roman_shield_pair|roman_shield_triad|roman_ballista|roman_medusa|roman_gargantuar|roman_imp|carnie|carnie_armor1|carnie_armor2|carnie_armor4|carnie_monkey|carnie_flag|carnie_cannon|carnie_firebreather|carnie_magician|carnie_stiltwalker|carnie_gargantuar|carnie_imp|carnie_imp_twins|carnie_imp_split|harvest|harvest_armor1|harvest_armor2|harvest_flag|harvest_flag_armor1|harvest_flag_armor2|harvest_outhouse|harvest_pitchfork|harvest_eggshell|harvest_eggstealer|harvest_pterry|harvest_imp|harvest_gargantuar|swashbuckler_basic|iceage_troglobite_basic|lostcity_relichunter_basic|eighties_arcade_basic|easter_troglobite_basic|birthday_troglobite_basic|halloween_relichunter_basic|feastivus_swashbuckler_basic|feastivus_troglobite_basic|eighties_bass_basic|general_treadmill_phase1|general_treadmill_phase2|general_treadmill_phase3|general_caesar_phase1|general_caesar_phase2|general_caesar_phase3|zombossmech_egypt|zombossmech_pirate|zombossmech_cowboy|zombossmech_future|zombossmech_dark|zombossmech_beach|zombossmech_iceage|zombossmech_lostcity|zombossmech_eighties|zombossmech_dino|zombossmech_modern1|zombossmech_modern_egypt|zombossmech_modern_pirate|zombossmech_modern_cowboy|zombossmech_modern_future|zombossmech_modern_dark|zombossmech_modern_beach|zombossmech_modern_iceage|zombossmech_modern_lostcity|zombossmech_modern_eighties|zombossmech_modern_dino|zombossmech_holiday|zombossmech_iceage3|zombossmech_steam|zombossmech_market|beghouled|beghouled_armor1|beghouled_armor2|beghouled_newspaper|beghouled_mummy|beghouled_mummy_armor1|beghouled_mummy_armor2|beghouled_pirate|beghouled_pirate_armor1|beghouled_pirate_armor2|beghouled_cowboy|beghouled_cowboy_armor1|beghouled_cowboy_armor2|beghouled_future|beghouled_future_armor1|beghouled_future_armor2|beghouled_dark|beghouled_dark_armor1|beghouled_dark_armor2|beghouled_beach|beghouled_beach_armor1|beghouled_beach_armor2|beghouled_beach_fem|beghouled_beach_fem_armor1|beghouled_beach_fem_armor2|beghouled_iceage|beghouled_iceage_armor1|beghouled_iceage_armor2|beghouled_lostcity|beghouled_lostcity_armor1|beghouled_lostcity_armor2|general_waveadvancer|gameover_idiot|dark_wizard_veteran_vanilla|skycity|skycity_armor1|skycity_armor2|skycity_armor3|skycity_armor4|skycity_battleplane|skycity_battleplane_land|skycity_twinsplane|skycity_twinsplane_land|skycity_electric|skycity_electric_veteran|skycity_rocket|skycity_arbiter|skycity_arbiter_land|skycity_protector|skycity_gargantuar|skycity_launcher_zombie|carnie_cottoncandy_pink|carnie_cottoncandy_blue|carnie_trapeze_blue|carnie_trapeze_red|carnie_trapeze_yellow|carnie_toy_ball|carnie_toy_teeth|carnie_mirror|carnie_prankster|carnie_musicbox|carnie_musicbox_zomboss|carnie_toy_teddy|carnie_toy_sniffer|carnie_toy_gargantuar|rift|rift_armor1|rift_armor2|rift_armor4|rift_excavator|rift_jane|rift_gargimp|rift_weasel|rift_barrelroller|rift_gremlin|rift_sniffer|rift_imp|rift_imp_sandwich|rift_gargantuar|rift_berserker|zombotany_peashooter|zombotany_gatling|zombotany_repeater|zombotany_wallnut|zombotany_tallnut|zombotany_torchwood|zombotany_jalapeno|zombotany_chip|zombotany_firepeashooter|zombotany_lotusroot|zombotany_primalwallnut|zombotany_peanut|zombotany_murkadamia|zombotany_potatomine|zombotany_phatbeet|zombotany_kiwibeast|zombotany_imppear|zombotany_snowpea|zombotany_splitpea|zombotany_passionflower|zombotany_boomflower|zombotany_witchhazel|zombotany_puffshroom|zombotany_threepeater|zombotany_bloomerang|steam_miner_train|steam_miner_train_armor1|steam_miner_train_armor2|duckytube|duckytube_armor1|duckytube_armor2|duckytube_armor4|beach_duckytube|beach_duckytube_armor1|beach_duckytube_armor2|beach_duckytube_armor4|beach_fem_duckytube|beach_fem_duckytube_armor1|beach_fem_duckytube_armor2|beach_fem_duckytube_armor4|beach_shell|beach_shell_shield|beach_shell_basic|beach_garbage_weak|beach_garbage_normal|beach_garbage_strong|beach_garbage_imp|beach_garbage_imp_zombie|beach_greaser_imp|hero_mc|hero_repairimp|hero_glitter|hero_bass|hero_bass_c7|hero_bass_c6|hero_bass_c4|hero_bass_c3|hero_poncho|hero_stiltwalker|hero_captain|treasureyeti_noloot|tutorial_swashbuckler_rally|tutorial_lostpilot_rally|||||zombotany_cheesestrawberry|zombotany_magicshroom|zombotany_lightningreed|lris_bird|lris_bird_pf|plantagenet|plantagenet_armor1|plantagenet_armor2|plantagenet_flag|plantagenet_gargantuar|travellog_market_gargantuar|plantagenet_imp|plantagenet_wine|plantagenet_noblewoman|plantagenet_princess|servant|servant_red|servant_armor1|servant_red_armor1|servant_armor2|servant_red_armor2|servant_flag|servant_red_flag|servant_flag_buff|servant_red_flag_buff|servant_flag_veteran|servant_red_flag_veteran|servant_imp|servant_black_imp|servant_besom|servant_red_besom|servant_bell|servant_red_bell|servant_tea|servant_red_tea|servant_fly|servant_fly_black|servant_fly_basic|servant_fly_black_basic|desire_shikaisen|shikaisen_basic|desire_emperor|shikaisen_pot';
const ZOMBIE_TYPES = ZOMBIE_TYPES_RAW.split('|').map(z => z.trim()).filter(z => z);

const PREVIEW_ZOMBIES = [
    'carnie', 'stpatrick', 'tutorial'
];

const HAT_ANIMS = [
    'POPANIM_EFFECTS_CARNIVAL_1HATS',
    'POPANIM_EFFECTS_CARNIVAL_2HATS',
    'POPANIM_EFFECTS_CARNIVAL_3HATS'
];

// Movement curve types from carnival25.json
const MOVEMENT_CURVES = [
    'linear', 'constant', 'ease_in', 'ease_out', 'ease_in_out',
    'ease_in_out_weak', 'fast_in_out', 'fast_in_out_weak', 'bounce',
    'bounce_fast_middle', 'bounce_slow_middle', 'toss', 'sin_wave',
    'ease_sin_wave', 'sin_wave_normalized'
];

// Plant types (pipe-separated string - easy to paste from external list)
const PLANT_TYPES_RAW = 'peashooter|sunflower|wallnut|potatomine|cabbagepult|bloomerang|iceburg|gravebuster|bonkchoy|repeater|twinsunflower|squash|snowpea|kernelpult|snapdragon|spikeweed|coconutcannon|springbean|threepeater|spikerock|cherry_bomb|applemortar|iceweed|splitpea|chilibean|lightningreed|tallnut|peapod|melonpult|wintermelon|tumbleweed|ultomato|laser_bean|blover|citron|empea|holonut|magnifyinggrass|powerplant|zoybeanpod|starfruit|sunshroom|puffshroom|fumeshroom|sunbean|magnetshroom|hypnoshroom|witchhazel|lilypad|tanglekelp|bowlingbulb|guacodile|banana|chomper|homingthistle|hotpotato|pepperpult|chardguard|stunion|xshot|hurrikale|firepeashooter|redstinger|akee|endurian|stallia|goldleaf|lavaguava|dazeychain|phatbeet|celerystalker|thymewarp|garlic|sporeshroom|intensivecarrot|electricblueberry|gumnut|primalpeashooter|primalwallnut|perfumeshroom|primalsunflower|primalpotatomine|hotdate|parsnip|hocus|moonflower|nightshade|shadowshroom|dusklobber|grimrose|noctarine|murkadamia|shadowpeashooter|sapfling|ghostpepper|dandelion|cactus|jalapeno|bloominghearts|sweetpotato|boingsetta|strawburst|jackolantern|caulipower|unused_47|unused_43|unused_45|peanut|unused_49|unused_46|torchwood|goldbloom|electriccurrant|aloe|imppear|hollybarrierleaf|powerlily|imitater|toadstool|grapeshot|coldsnapdragon|shrinkingviolet|bombegranate|escaperoot|electricpeashooter|solartomato|missiletoe|slingpea|wasabiwhip|explodeonut|kiwibeast|hollyknight|poisonpeashooter|snappea|blastberry|pokra|pyrevine|electricitea|pumpkin|icebloom|dartichoke|olivepit|turkeypult|puffball|draftodil|shinevine|pvine|gloomvine|stickybombrice|inferno|boomflower|solarsage|solarsage|unused_48|headbutter|teleportatomine|heathseeker|potatochip|caramelpopcorn|tigergrass|magicshroom|greatzucchini|buttercup|blockoli|bramblebush|solarpea|meteorflower|sweetpea|lotuspod|acidlemon|asparagus|pineapple|saucer|loquat|horsebean|gatlingcheesestrawberry|frozenpear|lris|missiletoast|begonia||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||tool_powertile_alpha|tool_powertile_beta|tool_powertile_gamma|tool_powertile_delta|tool_powertile_epsilon|||||||||||tool_projectile_bowlingbulb1|tool_projectile_bowlingbulb2|tool_projectile_bowlingbulb3|tool_projectile_bowlingbulb_explode|tool_projectile_bowlingbulb_mega|iceburg_zomboss|boostjackolantern||||||||||||||||||||||||||||||||||';
const PLANT_TYPES = PLANT_TYPES_RAW.split('|').map(p => p.trim()).filter(p => p);

// Swap styles from carnival25.json
const SWAP_STYLES = ['SwapStraight', 'ParabolicUp', 'ParabolicDown'];

// All available stages
const STAGE_TYPES = [
    // Tutorial & Main Adventures
    { name: 'Tutorial', value: 'TutorialStage' },
    { name: 'Pinata Party', value: 'FrontLawnStage' },
    { name: 'Ancient Egypt', value: 'EgyptStage' },
    { name: 'Ancient Egypt (No Powerups)', value: 'EgyptStageNoPowerUps' },
    { name: 'Pirate Seas', value: 'PirateStage' },
    { name: 'Pirate Seas (AltverZ)', value: 'PirateAltverzStage' },
    { name: 'Wild West', value: 'WestStage' },
    { name: 'Far Future', value: 'FutureStage' },
    { name: 'Dark Ages', value: 'DarkStage' },
    { name: 'Dark Ages (AltverZ)', value: 'DarkAltverzStage' },
    { name: 'Big Wave Beach', value: 'BeachStage' },
    { name: 'Big Wave Beach (No Powerups)', value: 'BeachStageNoPowerUps' },
    { name: 'Big Wave Beach (AltverZ)', value: 'BeachAltverzStage' },
    { name: 'Frostbite Caves', value: 'IceageStage' },
    { name: 'Frostbite Caves (No Powerups)', value: 'IceageStageNoPowerUps' },
    { name: 'Frostbite Caves (AltverZ)', value: 'IceageAltverzStage' },
    { name: 'Hypothermic Hollows', value: 'IceageVeteranStage' },
    { name: 'Lost City', value: 'LostCityStage' },
    { name: 'Lost City (Jams)', value: 'LostCityVeteranStage' },
    { name: 'Lost City (No Powerups)', value: 'LostCityStageNoPowerUps' },
    { name: 'Lost City Night', value: 'LostCityNightsStage' },
    { name: 'Lost City Night (Jams)', value: 'LostCityNightsVeteranStage' },
    { name: 'Neon Mixtape Tour', value: 'EightiesStage' },
    { name: 'Neon Mixtape Tour (AltverZ)', value: 'EightiesAltverzStage' },
    { name: 'Jurassic Marsh', value: 'DinoStage' },
    { name: 'Modern Day', value: 'ModernStage' },
    { name: 'Modern Day (No Powerups)', value: 'ModernStageNoPowerUps' },
    { name: 'Modern Day (Day 17)', value: 'Modern17Stage' },
    { name: 'Modern Day (All Jams)', value: 'ModernAllJamsStage' },
    { name: 'Modern Night', value: 'ModernNightStage' },
    { name: 'Modern Night (All Jams)', value: 'ModernNightAllJamsStage' },
    { name: 'Modern Pool', value: 'ModernPoolStage' },
    
    // Event Stages
    { name: 'Valenbrainz', value: 'ValentineStage' },
    { name: 'St. Patricks', value: 'PaddysStage' },
    { name: 'Springening', value: 'SpringStage' },
    { name: 'Birthdayz', value: 'BirthdayStage' },
    { name: 'Birthdayz (PvZ1)', value: 'BirthdayPvZ1Stage' },
    { name: 'Childrens Day', value: 'ChildStage' },
    { name: 'Summer Nights', value: 'SummerStage' },
    { name: 'Summer Dayz', value: 'SummerDayzStage' },
    { name: 'Big Brainz', value: 'BigheadStage' },
    { name: 'Big Brainz (Old)', value: 'BigheadOldStage' },
    { name: 'Lawn of Doom', value: 'HalloweenStage' },
    { name: 'Heroes Event Stage', value: 'HeroesStage' },
    { name: 'Food Fight', value: 'FoodStage' },
    { name: 'Feastivus', value: 'XmasStage' },
    { name: 'Feastivus (Night)', value: 'XmasNightStage' },
    { name: 'Holiday Mashup', value: 'MashupStage' },
    { name: 'Steam Ages', value: 'SteamStage' },
    { name: 'Caliginous Carnival', value: 'CarnivalStage' },
    
    // Teasers
    { name: 'Front Lawn Far Future Teaser', value: 'FrontLawnFutureStage' },
    { name: 'Front Lawn Dark Ages Teaser', value: 'FrontLawnDarkStage' },
    { name: 'Front Lawn Big Wave Beach Teaser', value: 'FrontLawnBeachStage' },
    { name: 'Front Lawn Frostbite Caves Teaser', value: 'FrontLawnIceageStage' },
    { name: 'Front Lawn Lost City Teaser', value: 'FrontLawnLostCityStage' },
    { name: 'Front Lawn Neon Mixtape Tour Teaser', value: 'FrontLawnEightiesStage' },
    { name: 'Front Lawn Jurassic Marsh Teaser', value: 'FrontLawnDinoStage' },
    { name: 'Front Lawn Steam Ages Teaser', value: 'FrontLawnSteamStage' },
    { name: 'Front Lawn Caliginous Carnival Teaser', value: 'FrontLawnCarnivalStage' },
    
    // Special Events
    { name: 'Lunar New Year (Day)', value: 'LunarDayStage' },
    { name: 'Lunar New Year (Night)', value: 'LunarStage' },
    { name: 'Harvest', value: 'HarvestStage' },
    { name: 'Backyard Brain Bowl', value: 'SportzballStage' },
    { name: 'Anniversary', value: 'AnniversaryStage' },
    { name: 'Assault Airspace', value: 'SkyCityStage' },
    { name: 'MeteorZ', value: 'MeteorZStage' },
    { name: 'Rift Road', value: 'RiftStage' },
    { name: 'Lunar Rainbow Market', value: 'MarketNightsStage' },
    { name: 'Lunar Rainbow Market (Vet)', value: 'MarketNightsVetStage' },
    { name: 'Arena', value: 'JoustStage' },
    
    // Content Collaborations
    { name: 'Spongebob Age (Good)', value: 'SpongebobGoodStage' },
    { name: 'Spongebob Age (Bad)', value: 'SpongebobShitStage' },
    { name: 'Spongebob Age (Mall)', value: 'SpongebobMallStage' },
    { name: 'April Fools Lawn', value: 'SpringFoolsStage' },
    { name: 'Dave\'s House', value: 'N3XTDaveStage' },
    { name: 'Campgrounds', value: 'N3XTCampgroundsStage' },
    { name: 'Iconic Jungle', value: 'N3XTJungleStage' },
    { name: 'Braking Bad', value: 'BreakingStages' },
    { name: 'Breakin Goblin', value: 'BreakingStagesGoblin' },
    { name: 'Freddy Fazbear\'s Pizza', value: 'FNAFStage' },
    { name: 'Five Riddles at Goblin\'s', value: 'FNAFStageGoblin' },
    { name: 'Happyland', value: 'HappyLandStage' },
    { name: 'Mesopotamia Spongebob Age', value: 'MesopotamiaStage' },
    { name: 'Spongebob Age 2.0', value: 'Spongebob24GoodStage' },
    
    // Endless Variants
    { name: 'Breaking Bad Solar', value: 'LunarSolarStage' },
    { name: 'Five Nebulas at Freddy\'s', value: 'LunarNebulaStage' },
    { name: 'Happyland Vortex', value: 'LunarVortexStage' },
    { name: 'Mesopotamia Stardust', value: 'LunarStardustStage' },
    { name: 'Calamity Calendar Valenbrainz', value: 'ValentineEndlessStage' },
    { name: 'Calamity Calendar St. Patricks', value: 'PaddysEndlessStage' },
    { name: 'Calamity Calendar Springening', value: 'SpringEndlessStage' },
    { name: 'Calamity Calendar Birthdayz', value: 'BirthdayEndlessStage' },
    { name: 'Calamity Calendar Childrens Day', value: 'ChildEndlessStage' },
    { name: 'Calamity Calendar Big Brainz', value: 'BigheadEndlessStage' },
    { name: 'Calamity Calendar Lawn of Doom', value: 'HalloweenEndlessStage' },
    { name: 'Calamity Calendar Heroes Event', value: 'HeroesEndlessStage' },
    { name: 'Calamity Calendar Food Fight', value: 'FoodEndlessStage' },
    { name: 'Calamity Calendar Summer Nights', value: 'SummerEndlessStage' },
    { name: 'Calamity Calendar Feastivus', value: 'XmasEndlessStage' },
    { name: 'Calamity Calendar Holiday Mashup', value: 'MashupLevelGenStage' }
];

// Embedded templates (if any)
const TEMPLATE_JSONS = {
    carnival12: `{
	"#comment": "Dino 16 - Gargantuar Battle",
	"objects": [
		{
			"objclass": "LevelDefinition",
			"objdata": {
				"Description": "[PLAYERS_TRIP_TO_CARNIVAL]",
				"LevelNumber": 12,
				"StartingSun": 0,
				"SuppressPlantfoodPurchase": false,
				"SuppressAccountUpgrades": true,
				"DisableSaveGame": true,
				"LevelPowerupSet": "LevelPowerupsDefault",
				"Loot": "RTID(NoLoot@LevelModules)",
				"Modules": [
					"RTID(StandardIntro@LevelModules)",
                    "RTID(ZombiesDeadWinCon@LevelModules)",
					"RTID(SeedBank@CurrentLevel)",
					"RTID(CarnieMinigameModule@CurrentLevel)",
					"RTID(Posters@CurrentLevel)",
					"RTID(SeedPacketHalfTimeModule@CurrentLevel)"
				],
				"MusicType": "MiniGame_B",
				"Name": "[CARNIVAL_LEVEL_NAME]",
				"NormalPresentTable": "egypt_normal_01",
				"ShinyPresentTable": "egypt_shiny_01",
				"StageModule": "RTID(CarnivalStage@LevelModules)"
			}
		},
		{
			"aliases": [
				"Posters"
			],
			"objclass": "CarniePosterModuleProperties",
			"objdata": {
				"LeftPosterImageName": "IMAGE_BACKGROUNDS_CARNIVAL_POSTER_FIREBREATHER_LEFT",
				"RightPosterImageName": "IMAGE_BACKGROUNDS_CARNIVAL_POSTER_BOOMFLOWER_RIGHT"
			}
		},
		{
            "aliases": [
                "CarnieMinigameModule"
            ],
            "objclass": "CarnieMinigameProperties",
            "objdata": {
                "AllowRestart": true,
                "Waves": [
                    {
						"# Wave1": 0,
						"HatCount": 1,
						"UseRandomZombiePlacement": true,
						"UseCustomHatPositions": false,
						"# Board positions hats start in": 0,
						"CustomHatPositions": [
							{
								"# x 200, y 160 is GridX 0, GridY 0": 0,
								"# Tile is 64 wide and 76 tall": 0,
								"x": 0,
								"y": 0,
								"z": 0
							},
							{
								"x": 0,
								"y": 0,
								"z": 0
							}
						],
						"# Time Hats show zombies before swapping starts": 0,
						"PreviewDuration": 0,
						"# Time Hats show zombies after a hat is picked": 0,
						"RevealDuration": 3,
						"HatPopAnims": [
							"POPANIM_EFFECTS_CARNIVAL_1HATS"
						],
						"WaveStartSoundID": "Play_Awooga",
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 0,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "idiot",
										"HasPlantfood": false,
										"UseCustomSpawnPosition": false,
										"SpawnPosition": {
											"x": 0,
											"y": 0,
											"z": 0
										}
									}
								],
								"# X board position first zombie in a lane spawns": 0,
								"JitteredStartX": 840,
								"# X board space between each zombie spawn in a lane": 0,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Randomly picks one of these to do for the swap": 0,
									"# Swap1": 0,
									"# Pattern0": 0,
									"# List signifying hat number": 0,
									"First": [0],
									"# Hat will move to the position of another hat based on order listed. Make -1 if using Custom": 0,
									"Second": [0],
									"# Hat will move to specific board position": 0,
									"Custom": [
										{
											"x": 0,
											"y": 0,
											"z": 0
										}
									],
									"# Style of each hat. SwapStraight, ParabolicUp, ParabolicDown. Defaults to SwapStraight": 0,
									"# ParabolicUp - Counter-Clockwise, ParabolicDown - Clockwise": 0,
									"Style": [
										"SwapStraight"
									],
									"# Height of each hat when using ParabolicUp or ParabolicDown": 0,
									"ParabolicHeight": [120],
									"# constant, linear, ease_in, ease_out, ease_in_out, ease_in_out_weak, fast_in_out, fast_in_out_weak, bounce, bounce_fast_middle, bounce_slow_middle, toss, sin_wave, ease_sin_wave, sin_wave_normalized": 0,
									"MovementCurve": [
										"linear"
									],
									"# Time it takes hats to move": 0,
									"Duration": 0,
									"# Time hats wait until next swap starts": 0,
									"Cooldown": 0,
									"# Force the next wave to use a specific entry. Can be used to chain random waves together": 0,
									"ForceNextWavePattern": 0
								},
								{
									"# Pattern1": 0,
									"First": [0],
									"Second": [0],
									"Custom": [
										{}
									],
									"Style": [
										"SwapStraight"
									],
									"ParabolicHeight": [120],
									"MovementCurve": [
										"linear"
									],
									"Duration": 0,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave2": 0,
						"HatCount": 2,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 776,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 700,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 776,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave3": 0,
						"HatCount": 3,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 950,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 1300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 2050,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 2],
									"Second": [2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave4": 0,
						"HatCount": 4,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 1800,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 2300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 2600,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_stiltwalker",
								"SunAmount": 2600,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 3, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 3, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave5": 0,
						"HatCount": 5,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 456,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 2050,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 2050,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_stiltwalker",
								"SunAmount": 3200,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1224,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1224,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_imp_twins",
								"SunAmount": 3200,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 2900,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4],
									"Second": [2, 4, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 3, 4],
									"Second": [1, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [2, 3, 4],
									"Second": [3, 4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [3, 4],
									"Second": [4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 0, 3, 4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 2, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [3, 2, 0, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 3, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [3, 0, 4, 2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave6": 0,
						"HatCount": 6,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 328,
								"y": 312,
								"z": 0
							},
							{
								"x": 584,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"WaveStartMessage": "FINAL WAVE!",
						"WaveStartSoundID": "Play_Siren",
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_stiltwalker",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_firebreather",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_stiltwalker"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_imp_twins"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor4",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor4"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor4"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor4"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor4"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor4"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_firebreather"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 3, 0, 1, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 4, 3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 2, 1, 0, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 5, 4, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 3, 2, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 2, 1, 4, 3, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 4, 5, 0, 1, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 3, 4, 1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 4, 0, 5, 1, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 2, 1, 0, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0
								}
							]
						]
					}
				]
            }
        },
		{
			"aliases": [
				"SeedPacketHalfTimeModule"
			],
			"objclass": "PlantCooldownModifierProperties",
			"objdata": {
				"CooldownMultiplier": 0.0,
				"HomeworldToExcludeFromOverride": ""
			}
		},
		{
			"aliases": [
				"SeedBank"
			],
			"objclass": "SeedBankProperties",
			"objdata": {
				"PresetPlantList": [
					{
						"PlantType": "peashooter",
						"Level": -1
					},
					{
						"PlantType": "redstinger",
						"Level": -1
					},
					{
						"PlantType": "bonkchoy",
						"Level": -1
					},
					{
						"PlantType": "bloomerang",
						"Level": -1
					},
					{
						"PlantType": "threepeater",
						"Level": -1
					},
					{
						"PlantType": "boomflower",
						"Level": -1
					},
					{
						"PlantType": "wintermelon",
						"Level": -1
					},
					{
						"PlantType": "escaperoot",
						"Level": -1
					}
				],
				"SelectionMethod": "preset"
			}
		}
	],
	"version": 1
}`,
    carnival25: `{
	"#comment": "Dino 16 - Gargantuar Battle",
	"objects": [
		{
			"objclass": "LevelDefinition",
			"objdata": {
				"Description": "[PLAYERS_TRIP_TO_CARNIVAL]",
				"LevelNumber": 25,
				"StartingSun": 0,
				"SuppressPlantfoodPurchase": false,
				"SuppressAccountUpgrades": true,
				"DisableSaveGame": true,
				"LevelPowerupSet": "LevelPowerupsDefault",
				"Loot": "RTID(NoLoot@LevelModules)",
				"Modules": [
					"RTID(StandardIntro@LevelModules)",
                    "RTID(ZombiesDeadWinCon@LevelModules)",
					"RTID(SeedBank@CurrentLevel)",
					"RTID(CarnieMinigameModule@CurrentLevel)",
					"RTID(SeedPacketHalfTimeModule@CurrentLevel)",
					"RTID(Posters@CurrentLevel)",
					"RTID(NewWaves@CurrentLevel)"
				],
				"MusicType": "MiniGame_B",
				"Name": "[CARNIVAL_LEVEL_NAME]",
				"NormalPresentTable": "egypt_normal_01",
				"ShinyPresentTable": "egypt_shiny_01",
				"StageModule": "RTID(CarnivalStage@LevelModules)"
			}
		},
		{
			"aliases": [
				"Posters"
			],
			"objclass": "CarniePosterModuleProperties",
			"objdata": {
				"LeftPosterImageName": "IMAGE_BACKGROUNDS_CARNIVAL_POSTER_HAVEABLAST_LEFT",
				"RightPosterImageName": "IMAGE_BACKGROUNDS_CARNIVAL_POSTER_TRAMPOLIMPS_RIGHT"
			}
		},
		{
            "aliases": [
                "CarnieMinigameModule"
            ],
            "objclass": "CarnieMinigameProperties",
            "objdata": {
                "AllowRestart": true,
                "Waves": [
                    {
						"# Wave1": 0,
						"HatCount": 2,
						"UseRandomZombiePlacement": true,
						"UseCustomHatPositions": false,
						"# Board positions hats start in": 0,
						"CustomHatPositions": [
							{
								"# x 200, y 160 is GridX 0, GridY 0": 0,
								"# Tile is 64 wide and 76 tall": 0,
								"x": 0,
								"y": 0,
								"z": 0
							},
							{
								"x": 0,
								"y": 0,
								"z": 0
							}
						],
						"# Time Hats show zombies before swapping starts": 0,
						"PreviewDuration": 3,
						"# Time Hats show zombies after a hat is picked": 0,
						"RevealDuration": 1,
						"WaveStartSoundID": "Play_Awooga",
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 700,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie",
										"HasPlantfood": false,
										"UseCustomSpawnPosition": false,
										"SpawnPosition": {
											"x": 0,
											"y": 0,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"# X board position first zombie in a lane spawns": 0,
								"JitteredStartX": 840,
								"# X board space between each zombie spawn in a lane": 0,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 800,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Randomly picks one of these to do for the swap": 0,
									"# Swap1": 0,
									"# Pattern0": 0,
									"# List signifying hat number": 0,
									"First": [0, 1],
									"# Hat will move to the position of another hat based on order listed. Make -1 if using Custom": 0,
									"Second": [1, 0],
									"# Hat will move to specific board position": 0,
									"Custom": [
										{
											"x": 0,
											"y": 0,
											"z": 0
										},
										{}
									],
									"# Style of each hat. SwapStraight, ParabolicUp, ParabolicDown. Defaults to SwapStraight": 0,
									"# ParabolicUp - Counter-Clockwise, ParabolicDown - Clockwise": 0,
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"# Height of each hat when using ParabolicUp or ParabolicDown": 0,
									"ParabolicHeight": [120, 120],
									"# constant, linear, ease_in, ease_out, ease_in_out, ease_in_out_weak, fast_in_out, fast_in_out_weak, bounce, bounce_fast_middle, bounce_slow_middle, toss, sin_wave, ease_sin_wave, sin_wave_normalized": 0,
									"MovementCurve": [
										"ease_in",
										"ease_in"
									],
									"# Time it takes hats to move": 0,
									"Duration": 1.0,
									"# Time hats wait until next swap starts": 0,
									"Cooldown": 0,
									"# Force the next wave to use a specific entry. Can be used to chain random waves together": 0,
									"ForceNextWavePattern": 0
								},
								{
									"# Pattern1": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Custom": [
										{},
										{}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"ease_in",
										"ease_in"
									],
									"Duration": 1.0,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"ease_out",
										"ease_out"
									],
									"Duration": 1.0,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"ease_in",
										"ease_in"
									],
									"Duration": 1.0,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.5,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"ease_out",
										"ease_out"
									],
									"Duration": 1.0,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave2": 0,
						"HatCount": 3,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 1000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 1000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_cottoncandy_pink",
								"SunAmount": 1000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap13": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap14": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap15": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap16": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap17": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap18": 0,
									"# Pattern0": 0,
									"First": [0, 2],
									"Second": [2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap19": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap20": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap21": 0,
									"# Pattern0": 0,
									"First": [0, 2],
									"Second": [2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap22": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap23": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap24": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap25": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap26": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap27": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap28": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap29": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap30": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [2, 0, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.7,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave3": 0,
						"HatCount": 4,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 1500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 1500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 3100,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_cottoncandy_blue",
								"SunAmount": 3000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap13": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap14": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap15": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap16": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap17": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap18": 0,
									"# Pattern0": 0,
									"First": [0, 2],
									"Second": [2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap19": 0,
									"# Pattern0": 0,
									"First": [1, 3],
									"Second": [3, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap20": 0,
									"# Pattern0": 0,
									"First": [0, 3],
									"Second": [3, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap21": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap22": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap23": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 3, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.15,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap24": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap25": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap26": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap27": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap28": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap29": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap30": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap31": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap32": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap33": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap34": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap35": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap36": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap37": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap38": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap39": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap40": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave4": 0,
						"HatCount": 5,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1",
										"HasPlantfood": true
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1",
										"HasPlantfood": true
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor2",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2",
										"HasPlantfood": true
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_trapeze_blue_basic",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue",
										"HasPlantfood": true
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_jackinthebox_preview",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1",
										"HasPlantfood": true
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap13": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap14": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap15": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap16": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap17": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap18": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap19": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap20": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4],
									"Second": [2, 4, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap21": 0,
									"# Pattern0": 0,
									"First": [2, 4],
									"Second": [4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap22": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 0, 4, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap23": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 1, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap24": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4],
									"Second": [2, 1, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap25": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4],
									"Second": [2, 0, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.1
								}
							],
							[
								{
									"# Swap26": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap27": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap28": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap29": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap30": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap31": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap32": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap33": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap34": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap35": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 3, 0, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap36": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap37": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap38": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap39": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap40": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap41": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap42": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap43": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap44": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap45": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 4, 1, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 32, 32, 32, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap46": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 2, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap47": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 3, 0, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap48": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4],
									"Second": [2, 1, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap49": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4],
									"Second": [1, 0, 4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap50": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4],
									"Second": [4, 3, 2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0.15
								}
							],
							[
								{
									"# Swap51": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 2, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.2,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave5": 0,
						"HatCount": 6,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 328,
								"y": 312,
								"z": 0
							},
							{
								"x": 584,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 3000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_prankster",
								"SunAmount": 4000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_trapeze_red_basic",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_trio"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_trio"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_trio"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_trio"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_trio"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_jackinthebox_preview",
								"SunAmount": 3500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_magician",
								"SunAmount": 4000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 1032,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap13": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap14": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap15": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap16": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap17": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap18": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap19": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap20": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap21": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 3, 0, 1, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap22": 0,
									"# Pattern0": 0,
									"First": [2, 3, 4, 5],
									"Second": [5, 4, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap23": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 3, 2, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap24": 0,
									"# Pattern0": 0,
									"First": [0, 1, 4, 5],
									"Second": [5, 4, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap25": 0,
									"# Pattern0": 0,
									"First": [0, 2, 3, 5],
									"Second": [5, 3, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.1
								}
							],
							[
								{
									"# Swap26": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap27": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap28": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap29": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap30": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap31": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap32": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap33": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap34": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap35": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap36": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap37": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap38": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap39": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap40": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap41": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap42": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap43": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap44": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap45": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap46": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap47": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 3, 4, 1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap48": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 4, 0, 5, 1, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.1
								}
							],
							[
								{
									"# Swap49": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap50": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap51": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap52": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap53": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap54": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap55": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 3, 0, 5, 2, 4],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [32, 64, 64, 64, 64, 32],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap56": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap57": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap58": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap59": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap60": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap61": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap62": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 4, 1, 5, 3],
									"Style": [
										"ParabolicDown",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicDown"
									],
									"ParabolicHeight": [64, 32, 64, 64, 32, 64],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave6": 0,
						"HatCount": 7,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 200,
								"y": 312,
								"z": 0
							},
							{
								"x": 456,
								"y": 312,
								"z": 0
							},
							{
								"x": 712,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"WaveStartMessage": "FINAL WAVE!",
						"WaveStartSoundID": "Play_Siren",
						"Choices": [
							{
								"PreviewZombie": "carnie",
								"SunAmount": 4000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 527,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_armor1",
								"SunAmount": 4000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 527,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_cottoncandy_pink",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 527,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_jackinthebox_preview",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_5"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_gargantuar",
								"SunAmount": 4000,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_gargantuar"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_gargantuar"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_gargantuar"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_gargantuar"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_gargantuar"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_cannon"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cannon"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie"
									},
									{
										"Row": 5,
										"ZombieType": "carnie"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 527,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 236,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 312,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_trapeze_trio",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 388,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "carnie_prankster",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 2,
										"ZombieType": "carnie"
									},
									{
										"Row": 3,
										"ZombieType": "carnie"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cottoncandy_pink"
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cottoncandy_blue"
									},
									{
										"Row": 1,
										"ZombieType": "carnie"
									},
									{
										"Row": 2,
										"ZombieType": "carnie_magician"
									},
									{
										"Row": 3,
										"ZombieType": "carnie_prankster"
									},
									{
										"Row": 5,
										"ZombieType": "carnie_jackinthebox_spawner_1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_cannon",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 904,
											"y": 527,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_trapeze_duo",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 160,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_trapeze_quad",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 840,
											"y": 464,
											"z": 0
										}
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 2, 5, 6, 4, 1],
									"Second": [-1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 210,
											"y": 312,
											"z": 0
										},
										{
											"x": 338,
											"y": 454,
											"z": 0
										},
										{
											"x": 574,
											"y": 454,
											"z": 0
										},
										{
											"x": 702,
											"y": 312,
											"z": 0
										},
										{
											"x": 574,
											"y": 170,
											"z": 0
										},
										{
											"x": 338,
											"y": 170,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [1, 0, 2, 5, 6, 4],
									"Second": [-1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 220,
											"y": 312,
											"z": 0
										},
										{
											"x": 348,
											"y": 444,
											"z": 0
										},
										{
											"x": 564,
											"y": 444,
											"z": 0
										},
										{
											"x": 692,
											"y": 312,
											"z": 0
										},
										{
											"x": 564,
											"y": 180,
											"z": 0
										},
										{
											"x": 348,
											"y": 180,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [4, 1, 0, 2, 5, 6],
									"Second": [-1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 230,
											"y": 312,
											"z": 0
										},
										{
											"x": 358,
											"y": 434,
											"z": 0
										},
										{
											"x": 554,
											"y": 434,
											"z": 0
										},
										{
											"x": 682,
											"y": 312,
											"z": 0
										},
										{
											"x": 554,
											"y": 190,
											"z": 0
										},
										{
											"x": 358,
											"y": 190,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [6, 4, 1, 0, 2, 5],
									"Second": [-1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 240,
											"y": 312,
											"z": 0
										},
										{
											"x": 368,
											"y": 424,
											"z": 0
										},
										{
											"x": 544,
											"y": 424,
											"z": 0
										},
										{
											"x": 672,
											"y": 312,
											"z": 0
										},
										{
											"x": 544,
											"y": 200,
											"z": 0
										},
										{
											"x": 368,
											"y": 200,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [5, 6, 4, 1, 0, 2],
									"Second": [-1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 250,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 414,
											"z": 0
										},
										{
											"x": 534,
											"y": 414,
											"z": 0
										},
										{
											"x": 662,
											"y": 312,
											"z": 0
										},
										{
											"x": 534,
											"y": 210,
											"z": 0
										},
										{
											"x": 378,
											"y": 210,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap13": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap14": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap15": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap16": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap17": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4, 5, 6],
									"Second": [2, 0, 5, 1, 6, 4],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap18": 0,
									"# Pattern0": 0,
									"First": [2, 5, 6, 4, 1, 0, 3],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 314,
											"y": 261,
											"z": 0
										},
										{
											"x": 314,
											"y": 363,
											"z": 0
										},
										{
											"x": 417,
											"y": 363,
											"z": 0
										},
										{
											"x": 598,
											"y": 363,
											"z": 0
										},
										{
											"x": 598,
											"y": 261,
											"z": 0
										},
										{
											"x": 442,
											"y": 210,
											"z": 0
										},
										{
											"x": 456,
											"y": 363,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap19": 0,
									"# Pattern0": 0,
									"First": [2, 5, 3, 4, 1, 0, 6],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 250,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 414,
											"z": 0
										},
										{
											"x": 534,
											"y": 414,
											"z": 0
										},
										{
											"x": 662,
											"y": 312,
											"z": 0
										},
										{
											"x": 534,
											"y": 210,
											"z": 0
										},
										{
											"x": 378,
											"y": 210,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap20": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 5, 4, 1, 3],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap21": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 5, 4, 1, 3],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap22": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 0, 5, 4, 1, 3],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap23": 0,
									"# Pattern0": 0,
									"First": [0, 2, 5, 3, 4, 1, 6],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 392,
											"y": 261,
											"z": 0
										},
										{
											"x": 314,
											"y": 363,
											"z": 0
										},
										{
											"x": 470,
											"y": 414,
											"z": 0
										},
										{
											"x": 598,
											"y": 363,
											"z": 0
										},
										{
											"x": 598,
											"y": 261,
											"z": 0
										},
										{
											"x": 442,
											"y": 210,
											"z": 0
										},
										{
											"x": 353,
											"y": 261,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap24": 0,
									"# Pattern0": 0,
									"First": [6, 2, 5, 3, 4, 1, 0],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 250,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 414,
											"z": 0
										},
										{
											"x": 534,
											"y": 414,
											"z": 0
										},
										{
											"x": 662,
											"y": 312,
											"z": 0
										},
										{
											"x": 534,
											"y": 210,
											"z": 0
										},
										{
											"x": 378,
											"y": 210,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap25": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap26": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap27": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap28": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap29": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap30": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [6, 5, 4, 1, 3, 2],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap31": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [4, 6, 5, 3, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap32": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [4, 6, 5, 3, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap33": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [4, 6, 5, 3, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap34": 0,
									"# Pattern0": 0,
									"First": [1, 2, 3, 4, 5, 6],
									"Second": [4, 6, 5, 3, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap35": 0,
									"# Pattern0": 0,
									"First": [1, 4, 3, 5, 2, 6, 0],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 470,
											"y": 210,
											"z": 0
										},
										{
											"x": 495,
											"y": 261,
											"z": 0
										},
										{
											"x": 598,
											"y": 363,
											"z": 0
										},
										{
											"x": 442,
											"y": 414,
											"z": 0
										},
										{
											"x": 314,
											"y": 363,
											"z": 0
										},
										{
											"x": 314,
											"y": 261,
											"z": 0
										},
										{
											"x": 495,
											"y": 261,
											"z": 0
										}
									],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap36": 0,
									"# Pattern0": 0,
									"First": [1, 0, 3, 5, 2, 6, 4],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 534,
											"y": 210,
											"z": 0
										},
										{
											"x": 662,
											"y": 312,
											"z": 0
										},
										{
											"x": 534,
											"y": 414,
											"z": 0
										},
										{
											"x": 378,
											"y": 414,
											"z": 0
										},
										{
											"x": 250,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 210,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										}
									],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [8, 8, 8, 8, 8, 8, 8],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.125,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap37": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap38": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap39": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap40": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap41": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap42": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [3, 0, 6, 1, 5, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap43": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap44": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap45": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap46": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap47": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [3, 0, 6, 1, 5, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap48": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap49": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap50": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap51": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [3, 0, 6, 1, 5, 4, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.3,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap52": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap53": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap54": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap55": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap56": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [3, 0, 6, 5, 2, 1],
									"Style": [
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown",
										"ParabolicDown"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap57": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [1, 6, 5, 0, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in",
										"ease_in"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap58": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [1, 6, 5, 0, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap59": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [1, 6, 5, 0, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap60": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 5, 6],
									"Second": [1, 6, 5, 0, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap61": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"ease_in",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap62": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap63": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap64": 0,
									"# Pattern0": 0,
									"First": [6, 2, 5, 3, 0, 1, 4],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 250,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 414,
											"z": 0
										},
										{
											"x": 534,
											"y": 414,
											"z": 0
										},
										{
											"x": 662,
											"y": 312,
											"z": 0
										},
										{
											"x": 534,
											"y": 210,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 378,
											"y": 210,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap65": 0,
									"# Pattern0": 0,
									"First": [4, 6, 2, 5, 3, 0, 1],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 240,
											"y": 312,
											"z": 0
										},
										{
											"x": 368,
											"y": 424,
											"z": 0
										},
										{
											"x": 544,
											"y": 424,
											"z": 0
										},
										{
											"x": 672,
											"y": 312,
											"z": 0
										},
										{
											"x": 544,
											"y": 200,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 368,
											"y": 200,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap66": 0,
									"# Pattern0": 0,
									"First": [1, 4, 6, 2, 5, 3, 0],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 230,
											"y": 312,
											"z": 0
										},
										{
											"x": 358,
											"y": 434,
											"z": 0
										},
										{
											"x": 554,
											"y": 434,
											"z": 0
										},
										{
											"x": 682,
											"y": 312,
											"z": 0
										},
										{
											"x": 554,
											"y": 190,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 358,
											"y": 190,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap67": 0,
									"# Pattern0": 0,
									"First": [0, 1, 4, 6, 2, 5, 3],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 220,
											"y": 312,
											"z": 0
										},
										{
											"x": 348,
											"y": 444,
											"z": 0
										},
										{
											"x": 564,
											"y": 444,
											"z": 0
										},
										{
											"x": 692,
											"y": 312,
											"z": 0
										},
										{
											"x": 564,
											"y": 180,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 348,
											"y": 180,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [16, 16, 16, 16, 16, 16, 16],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap68": 0,
									"# Pattern0": 0,
									"First": [3, 0, 1, 4, 6, 2, 5],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 210,
											"y": 312,
											"z": 0
										},
										{
											"x": 338,
											"y": 454,
											"z": 0
										},
										{
											"x": 574,
											"y": 454,
											"z": 0
										},
										{
											"x": 702,
											"y": 312,
											"z": 0
										},
										{
											"x": 574,
											"y": 170,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 338,
											"y": 170,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap69": 0,
									"# Pattern0": 0,
									"First": [5, 3, 0, 1, 4, 6, 2],
									"Second": [-1, -1, -1, -1, -1, -1, -1],
									"Custom": [
										{
											"x": 200,
											"y": 312,
											"z": 0
										},
										{
											"x": 328,
											"y": 464,
											"z": 0
										},
										{
											"x": 584,
											"y": 464,
											"z": 0
										},
										{
											"x": 712,
											"y": 312,
											"z": 0
										},
										{
											"x": 584,
											"y": 160,
											"z": 0
										},
										{
											"x": 456,
											"y": 312,
											"z": 0
										},
										{
											"x": 328,
											"y": 160,
											"z": 0
										}
									],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap70": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap71": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap72": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap73": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap74": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap75": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap76": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap77": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap78": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							],
							[
								{
									"# Swap79": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5, 6],
									"Second": [1, 4, 5, 0, 6, 3, 2],
									"Style": [
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp",
										"ParabolicUp"
									],
									"ParabolicHeight": [25, 25, 25, 25, 25, 25, 25],
									"MovementCurve": [
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out",
										"ease_out"
									],
									"Duration": 0.65,
									"Cooldown": 0
								}
							]
						]
					}
				]
            }
        },
		{
			"aliases": [
				"SeedPacketHalfTimeModule"
			],
			"objclass": "PlantCooldownModifierProperties",
			"objdata": {
				"CooldownMultiplier": 0.0,
				"HomeworldToExcludeFromOverride": ""
			}
		},
		{
			"aliases": [
				"SeedBank"
			],
			"objclass": "SeedBankProperties",
			"objdata": {
				"PresetPlantList": [
					{
						"PlantType": "peashooter",
						"Level": -1
					},
					{
						"PlantType": "starfruit",
						"Level": -1
					},
					{
						"PlantType": "sweetpotato",
						"Level": -1
					},
					{
						"PlantType": "tigergrass",
						"Level": -1
					},
					{
						"PlantType": "dandelion",
						"Level": -1
					},
					{
						"PlantType": "missiletoe",
						"Level": -1
					},
					{
						"PlantType": "coconutcannon",
						"Level": -1
					},
					{
						"PlantType": "intensivecarrot",
						"Level": -1
					}
				],
				"SelectionMethod": "preset"
			}
		},
		{
			"aliases": [
				"NewWaves"
			],
			"objclass": "WaveManagerModuleProperties",
			"objdata": {
				"WaveManagerProps": "RTID(WaveManagerProps@CurrentLevel)"
			}
		},
		{
			"aliases": [
				"WaveManagerProps"
			],
			"objclass": "WaveManagerProperties",
			"objdata": {
				"FlagWaveInterval": 1,
				"WaveCount": 0,
				"ZombieCountdownFirstWaveSecs": 0,
				"ZombieCountdownHugeWaveDelay": 0,
				"SuppressFlagZombie": false,
				"MaxNextWaveHealthPercentage": 0.5,
				"MinNextWaveHealthPercentage": 0.5,
				"Waves": []
			}
		}
	],
	"version": 1
}`,
    luck: `{
	"#comment": "Luck o The Zombie Blight of Hand",
	"objects": [
		{
			"objclass": "LevelDefinition",
			"objdata": {
				"Description": "",
				"LevelNumber": 9,
				"StartingSun": 0,
				"SuppressPlantfoodPurchase": false,
				"SuppressAccountUpgrades": true,
				"DisableSaveGame": true,
				"FirstIntroNarrative": "LTE_2025_03_LUCKOTHEZOMBIE_9_INTRO",
				"LevelPowerupSet": "LevelPowerupsDefault",
    "ResourceGroupNames": [
					"ZombieCarnieMagicianAudio"
    ],
				"Loot": "RTID(NoLoot@LevelModules)",
				"Modules": [
					"RTID(StandardIntro@LevelModules)",
        "RTID(ZombiesDeadWinCon@LevelModules)",
					"RTID(SeedBank@CurrentLevel)",
					"RTID(CarnieMinigameModule@CurrentLevel)",
					"RTID(JamZombiesModule@LevelModules)",
					"RTID(SeedPacketHalfTimeModule@CurrentLevel)"
				],
				"MusicType": "MiniGame_B",
				"Name": "[LTE_LEVEL_NAME_LOTZ]",
				"StageModule": "RTID(LostCityNightsStage@LevelModules)"
			}
		},
		{
            "aliases": [
                "CarnieMinigameModule"
            ],
            "objclass": "CarnieMinigameProperties",
            "objdata": {
                "AllowRestart": true,
                "Waves": [
                    {
						"# Wave1": 0,
						"HatCount": 1,
						"UseRandomZombiePlacement": true,
						"UseCustomHatPositions": false,
						"# Board positions hats start in": 0,
						"CustomHatPositions": [
							{
								"# x 200, y 160 is GridX 0, GridY 0": 0,
								"# Tile is 64 wide and 76 tall": 0,
								"x": 0,
								"y": 0,
								"z": 0
							},
							{
								"x": 0,
								"y": 0,
								"z": 0
							}
						],
						"# Time Hats show zombies before swapping starts": 0,
						"PreviewDuration": 0,
						"# Time Hats show zombies after a hat is picked": 0,
						"RevealDuration": 3,
						"HatPopAnims": [
							"POPANIM_EFFECTS_CARNIVAL_1HATS"
						],
						"WaveStartSoundID": "Play_Awooga",
						"Choices": [
							{
								"PreviewZombie": "stpatrick",
								"SunAmount": 0,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "idiot",
										"HasPlantfood": false,
										"UseCustomSpawnPosition": false,
										"SpawnPosition": {
											"x": 0,
											"y": 0,
											"z": 0
										}
									}
								],
								"# X board position first zombie in a lane spawns": 0,
								"JitteredStartX": 840,
								"# X board space between each zombie spawn in a lane": 0,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Randomly picks one of these to do for the swap": 0,
									"# Swap1": 0,
									"# Pattern0": 0,
									"# List signifying hat number": 0,
									"First": [0],
									"# Hat will move to the position of another hat based on order listed. Make -1 if using Custom": 0,
									"Second": [0],
									"# Hat will move to specific board position": 0,
									"Custom": [
										{
											"x": 0,
											"y": 0,
											"z": 0
										}
									],
									"# Style of each hat. SwapStraight, ParabolicUp, ParabolicDown. Defaults to SwapStraight": 0,
									"# ParabolicUp - Counter-Clockwise, ParabolicDown - Clockwise": 0,
									"Style": [
										"SwapStraight"
									],
									"# Height of each hat when using ParabolicUp or ParabolicDown": 0,
									"ParabolicHeight": [120],
									"# constant, linear, ease_in, ease_out, ease_in_out, ease_in_out_weak, fast_in_out, fast_in_out_weak, bounce, bounce_fast_middle, bounce_slow_middle, toss, sin_wave, ease_sin_wave, sin_wave_normalized": 0,
									"MovementCurve": [
										"linear"
									],
									"# Time it takes hats to move": 0,
									"Duration": 0,
									"# Time hats wait until next swap starts": 0,
									"Cooldown": 0,
									"# Force the next wave to use a specific entry. Can be used to chain random waves together": 0,
									"ForceNextWavePattern": 0
								},
								{
									"# Pattern1": 0,
									"First": [0],
									"Second": [0],
									"Custom": [
										{}
									],
									"Style": [
										"SwapStraight"
									],
									"ParabolicHeight": [120],
									"MovementCurve": [
										"linear"
									],
									"Duration": 0,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave2": 0,
						"HatCount": 2,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "stpatrick_armor1",
								"RevealZombie": "stpatrick_armor2",
								"SunAmount": 1750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 776,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_armor2",
								"SunAmount": 1750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 872,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 776,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35
								}
							],
							[
								{
									"# Swap2 - Standard swap": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Custom": [
										{},
										{}
									],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"ParabolicHeight": [120, 120],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35,
									"ForceNextWavePattern": 0
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.35
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave3": 0,
						"HatCount": 3,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "stpatrick_armor1",
								"RevealZombie": "lostcity_jane",
								"SunAmount": 1750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_armor2",
								"RevealZombie": "lostcity_jane",
								"SunAmount": 1750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "lostcity_jane",
								"SunAmount": 1750,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 2],
									"Second": [2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [1, 2],
									"Second": [2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.25,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave4": 0,
						"HatCount": 4,
						"UseCustomHatPositions": false,
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "stpatrick_armor1",
								"RevealZombie": "stpatrick_glitter",
								"SunAmount": 2250,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_armor2",
								"RevealZombie": "stpatrick_glitter",
								"SunAmount": 2250,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor1"
									},
		           {
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "lostcity_jane",
								"RevealZombie": "stpatrick_glitter",
								"SunAmount": 2250,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_glitter",
								"SunAmount": 2250,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 3, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 0, 3, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 3, 0, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [2, 3, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [1, 0, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.27,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave5": 0,
						"HatCount": 5,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 456,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"Choices": [
							{
								"PreviewZombie": "stpatrick_armor1",
								"RevealZombie": "barrelroller_explosive_almanac",
								"SunAmount": 2500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_armor2",
								"RevealZombie": "barrelroller_explosive_almanac",
								"SunAmount": 2500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "lostcity_jane",
								"RevealZombie": "barrelroller_explosive_almanac",
								"SunAmount": 2500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_glitter",
								"RevealZombie": "barrelroller_explosive_almanac",
								"SunAmount": 2500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "barrelroller_explosive_almanac",
								"SunAmount": 2500,
								"SpawnedZombies": [
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 4,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_armor1"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 4],
									"Second": [2, 4, 0, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3],
									"Second": [3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 3, 4],
									"Second": [1, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [2, 3, 4],
									"Second": [3, 4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1],
									"Second": [1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2],
									"Second": [1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [3, 4],
									"Second": [4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 0, 3, 4, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [1, 2, 0, 4, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [3, 2, 0, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [2, 0, 3, 4, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.2
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4],
									"Second": [3, 0, 4, 2, 1],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0
								}
							]
						]
					},
					{
						"# Wave6": 0,
						"HatCount": 6,
						"UseCustomHatPositions": true,
						"CustomHatPositions": [
							{
								"x": 328,
								"y": 160,
								"z": 0
							},
							{
								"x": 584,
								"y": 160,
								"z": 0
							},
							{
								"x": 328,
								"y": 312,
								"z": 0
							},
							{
								"x": 584,
								"y": 312,
								"z": 0
							},
							{
								"x": 328,
								"y": 464,
								"z": 0
							},
							{
								"x": 584,
								"y": 464,
								"z": 0
							}
						],
						"PreviewDuration": 3,
						"RevealDuration": 1,
						"WaveStartMessage": "FINAL WAVE!",
						"WaveStartSoundID": "Play_Siren",
						"Choices": [
							{
								"PreviewZombie": "lostcity_flag_veteran",
								"RevealZombie": "cannon",
								"SunAmount": 3300,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_armor2",
								"RevealZombie": "cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "lostcity_jane",
								"RevealZombie": "cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "stpatrick_glitter",
								"RevealZombie": "cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "barrelroller_explosive_almanac",
								"RevealZombie": "cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 1,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							},
							{
								"PreviewZombie": "cannon",
								"SunAmount": 4500,
								"SpawnedZombies": [
									{
										"Row": 3,
										"ZombieType": "lostcity_flag_veteran"
									},
									{
										"Row": 1,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 5,
										"ZombieType": "stpatrick_glitter"
									},
									{
										"Row": 1,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 3,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 5,
										"ZombieType": "lostcity_jane"
									},
									{
										"Row": 2,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 3,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row": 4,
										"ZombieType": "stpatrick_armor2"
									},
									{
										"Row":" 1",
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 2,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 4,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 5,
										"ZombieType": "barrelroller_explosive"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 3,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "cannon"
									},
									{
										"Row": 2,
										"ZombieType": "cannon"
									},
									{
										"Row": 4,
										"ZombieType": "cannon"
									},
									{
										"Row": 5,
										"ZombieType": "cannon"
									},
									{
										"Row": 1,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 223,
											"z": 0
										}
									},
									{
										"Row": 2,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 299,
											"z": 0
										}
									},
									{
										"Row": 3,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 375,
											"z": 0
										}
									},
									{
										"Row": 4,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 451,
											"z": 0
										}
									},
									{
										"Row": 5,
										"ZombieType": "carnie_poof",
										"UseCustomSpawnPosition": true,
										"SpawnPosition": {
											"x": 936,
											"y": 527,
											"z": 0
										}
									}
								],
								"JitteredStartX": 840,
								"JitteredOffset": 64
							}
						],
						"SwapWaves": [
							[
								{
									"# Swap1": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 3, 0, 1, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap2": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap3": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 4, 3, 2, 1, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap4": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 2, 1, 0, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap5": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 5, 4, 3, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap6": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 3, 2, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap7": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 2, 1, 4, 3, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap8": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [1, 0, 4, 5, 2, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.22,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap9": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 4, 5, 0, 1, 2],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.35,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap10": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [5, 3, 4, 1, 2, 0],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap11": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [2, 4, 0, 5, 1, 3],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0.22
								}
							],
							[
								{
									"# Swap12": 0,
									"# Pattern0": 0,
									"First": [0, 1, 2, 3, 4, 5],
									"Second": [3, 2, 1, 0, 5, 4],
									"Style": [
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight",
										"SwapStraight"
									],
									"MovementCurve": [
										"linear",
										"linear",
										"linear",
										"linear",
										"linear",
										"linear"
									],
									"Duration": 0.23,
									"Cooldown": 0
								}
							]
						]
					}
				]
            }
        },
		{
			"aliases": [
				"SeedPacketHalfTimeModule"
			],
			"objclass": "PlantCooldownModifierProperties",
			"objdata": {
				"CooldownMultiplier": 0.0,
				"HomeworldToExcludeFromOverride": ""
			}
		},
		{
			"aliases": [
				"SeedBank"
			],
			"objclass": "SeedBankProperties",
			"objdata": {
				"PresetPlantList": [
					{
						"PlantType": "repeater",
						"Level": -1
					},
					{
						"PlantType": "threepeater",
						"Level": -1
					},
					{
						"PlantType": "springbean",
						"Level": -1
					},
					{
						"PlantType": "melonpult",
						"Level": -1
					},
					{
						"PlantType": "boomflower",
						"Level": -1
					},
					{
						"PlantType": "bonkchoy",
						"Level": -1
					},
					{
						"PlantType": "guacodile",
						"Level": -1
					},
					{
						"PlantType": "escaperoot",
						"Level": -1
					}
				],
				"SelectionMethod": "preset"
			}
		}
	],
	"version": 1
}`
};
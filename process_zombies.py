import json
import re

def load_json_file(file_path):
    """Load a JSON file and return its contents."""
    with open(file_path, 'r') as f:
        return json.load(f)

def extract_rtid_name(rtid_string):
    """Extract the name before @ from an RTID string.
    Example: 'RTID(ZombieLrisBasicDefault@ZombieProperties)' -> 'ZombieLrisBasicDefault'
    """
    match = re.search(r'RTID\((.+?)@', rtid_string)
    if match:
        return match.group(1)
    return None

def find_wave_point_cost(zombie_type_name, newz_data, props_data):
    """
    Find WavePointCost for a zombie type.
    First searches in newz.json, then in props.json.
    """
    # Search in newz.json
    if isinstance(newz_data, list):
        for item in newz_data:
            if isinstance(item, dict):
                aliases = item.get('aliases', [])
                if zombie_type_name in aliases:
                    if 'WavePointCost' in item.get('objdata', {}):
                        return item['objdata']['WavePointCost']
    
    # Search in props.json
    if isinstance(props_data, dict):
        objects = props_data.get('objects', [])
        for item in objects:
            if isinstance(item, dict):
                aliases = item.get('aliases', [])
                if zombie_type_name in aliases:
                    if 'WavePointCost' in item.get('objdata', {}):
                        return item['objdata']['WavePointCost']
    
    return None

def process_zombie_types(newz_path, props_path, exclude_zombies=""):
    """
    Process zombie types from newz.json and extract relevant information.
    
    For each zombie type:
    - Use ONLY the first alias
    - Skip if first alias is in exclude_zombies string (pipe-separated)
    - Extract Properties RTID name and TypeName
    - Find WavePointCost (divide by 100)
    - Calculate ratio
    """
    newz_data = load_json_file(newz_path)
    props_data = load_json_file(props_path)
    
    # Parse excluded zombies from pipe-separated string
    excluded_set = set()
    if exclude_zombies:
        excluded_set = set(exclude_zombies.split('|'))
    
    results = []
    zombie_types = []  # Store full zombie type info for combined output
    
    if isinstance(newz_data, list):
        for item in newz_data:
            if not isinstance(item, dict):
                continue
            
            if item.get('objclass') == 'ZombieType':
                aliases = item.get('aliases', [])
                if not aliases:
                    continue
                
                # Use ONLY the first alias
                first_alias = aliases[0]
                
                # Skip if this zombie is already in the exclude list
                if first_alias in excluded_set:
                    print(f"Skipping {first_alias} (already exists)")
                    continue
                
                objdata = item.get('objdata', {})
                type_name = objdata.get('TypeName', '')
                properties_rtid = objdata.get('Properties', '')
                
                # Extract the property sheet name from RTID
                property_sheet_name = extract_rtid_name(properties_rtid)
                
                # Find WavePointCost
                wave_point_cost = find_wave_point_cost(property_sheet_name, newz_data, props_data)
                
                # Calculate ratio (divide by 100)
                cost_ratio = wave_point_cost / 100 if wave_point_cost else None
                
                # Create ONE entry for the first alias only
                result = {
                    'alias': first_alias,
                    'type_name': type_name,
                    'property_sheet': property_sheet_name,
                    'wave_point_cost': wave_point_cost,
                    'cost_ratio': cost_ratio,
                    'properties_rtid': properties_rtid,
                    'all_aliases': aliases
                }
                results.append(result)
                
                # Store for combined output
                zombie_types.append({
                    'aliases': [first_alias],  # Only first alias
                    'type_name': type_name,
                    'cost_ratio': cost_ratio
                })
    
    return results, zombie_types

def print_results(results):
    """Pretty print the results."""
    print(f"\n{'Alias':<20} {'TypeName':<20} {'Property Sheet':<30} {'Wave Cost':<12} {'Cost Ratio':<12}")
    print("-" * 95)
    
    for result in results:
        alias = result['alias']
        type_name = result['type_name'] or 'N/A'
        property_sheet = result['property_sheet'] or 'N/A'
        wave_cost = str(result['wave_point_cost']) if result['wave_point_cost'] else 'N/A'
        cost_ratio = f"{result['cost_ratio']:.2f}" if result['cost_ratio'] else 'N/A'
        
        print(f"{alias:<20} {type_name:<20} {property_sheet:<30} {wave_cost:<12} {cost_ratio:<12}")

def print_combined_output(zombie_types):
    """Print combined output in two lines with SAME LENGTH.
    Line 1: alias|alias|alias|...
    Line 2: cost_ratio,alias,Typename|cost_ratio,alias,Typename|...
    Numbers formatted: 1 (not 1.00), 0.5 (not 0.50), 0.01 stays as is
    """
    print("\n" + "="*95)
    print("COMBINED OUTPUT:")
    print("="*95)
    
    all_aliases = []
    detailed_entries = []
    
    for zt in zombie_types:
        if zt['cost_ratio'] is not None:
            # Use first alias
            first_alias = zt['aliases'][0]
            
            # Add to Line 1
            all_aliases.append(first_alias)
            
            # Add to Line 2 with formatted cost (remove trailing zeros)
            cost_str = f"{zt['cost_ratio']:.2f}".rstrip('0').rstrip('.')
            entry = f"{cost_str},Aliases,Typename"
            detailed_entries.append(entry)
    
    # Line 1: All aliases
    line1 = '|'.join(all_aliases)
    print("\nLine 1 (All Codenames/Aliases):")
    print(line1)
    print(f"Length: {len(all_aliases)}")
    
    # Line 2: Detailed format (same length as Line 1)
    line2 = '|'.join(detailed_entries)
    print("\nLine 2 (Detailed):")
    print(line2)
    print(f"Length: {len(detailed_entries)}")
    
    return line1, line2

if __name__ == '__main__':
    newz_path = r'c:\Users\Mansoum\Documents\test\newz.json'
    props_path = r'c:\Users\Mansoum\Documents\test\props.json'
    
    # PASTE YOUR EXISTING ZOMBIES STRING HERE (pipe-separated)
    existing_zombies = "mummy|mummy_armor1|mummy_armor2|mummy_armor4|mummy_flag|mummy_flag_veteran|ra|camel_onehump|camel_twohump|camel_manyhump|explorer|explorer_veteran|tomb_raiser|pharaoh|egypt_gargantuar|egypt_imp|pirate|pirate_armor1|pirate_armor2|pirate_armor4|pirate_flag|pirate_flag_veteran|swashbuckler|seagull|pelican|barrelroller|pirate_barrel|barrelroller_explosive|pirate_barrel_explosive|cannon|pirate_captain|pirate_gargantuar|pirate_imp|cowboy|cowboy_armor1|cowboy_armor2|cowboy_armor4|cowboy_flag|cowboy_flag_veteran|prospector|piano|poncho|poncho_plate|poncho_no_plate|chicken_farmer|chicken|west_bull|west_bull_veteran|cowboy_gargantuar|west_bullrider|future|future_armor1|future_armor2|future_armor4|future_flag|future_flag_veteran|future_jetpack|future_jetpack_veteran|future_protector|future_protector_generator|mech_cone|disco_mech|future_jetpack_disco|football_mech|future_gargantuar|future_imp|dark|dark_armor1|dark_armor2|dark_armor3|dark_armor4|dark_flag|dark_flag_veteran|dark_juggler|dark_wizard|dark_wizard_veteran|dark_king|dark_robber|dark_imp_dragon|dark_explorer|dark_gargantuar|dark_imp|beach|beach_armor1|beach_armor2|beach_armor4|beach_fem|beach_fem_armor1|beach_fem_armor2|beach_fem_armor4|beach_flag|beach_flag_veteran|beach_snorkel|beach_snorkel_veteran|beach_surfer|beach_octopus|beach_fisherman|beach_gargantuar|beach_imp|iceage|iceage_armor1|iceage_armor2|iceage_armor3|iceage_armor4|iceage_flag|iceage_flag_veteran|iceage_hunter|iceage_dodo|iceage_dodo_veteran|iceage_troglobite_1block|iceage_troglobite_2block|iceage_troglobite|iceage_weaselhoarder|iceage_weasel|iceage_gargantuar|iceage_imp|lostcity|lostcity_armor1|lostcity_armor2|lostcity_armor4|lostcity_flag|lostcity_flag_veteran|lostcity_excavator|lostcity_jane|lostcity_lostpilot|lostcity_bug|lostcity_bug_armor1|lostcity_bug_armor2|lostcity_impporter|lostcity_relichunter|lostcity_crystalskull|lostcity_crystalskull_veteran|lostcity_explorer|lostcity_gargantuar|lostcity_imp|eighties|eighties_armor1|eighties_armor2|eighties_armor4|eighties_flag|eighties_flag_veteran|eighties_punk|eighties_punk_veteran|eighties_glitter|eighties_mc|eighties_breakdancer|eighties_arcade|eighties_8bit|eighties_8bit_armor1|eighties_8bit_armor2|eighties_boombox|eighties_gargantuar|eighties_imp|eighties_punk_8bit|eighties_punk_veteran_8bit|eighties_glitter_8bit|eighties_mc_8bit|eighties_breakdancer_8bit|eighties_boombox_8bit|eighties_gargantuar_8bit|dino|dino_armor1|dino_armor2|dino_armor3|dino_armor4|dino_flag|dino_flag_veteran|dino_bully|dino_bully_blue|dino_bully_veteran|dino_pterry|dino_eggshell|dino_eggstealer|dino_gargantuar|dino_imp|tutorial|tutorial_armor1|tutorial_armor2|tutorial_armor4|tutorial_flag|tutorial_flag_veteran|modern_newspaper|newspaper_veteran|modern_balloon|tutorial_balloon|modern_allstar|modern_superfanimp|tutorial_gargantuar|tutorial_imp|miniboss_impfinity|birthday_caketank|hero_zmech|hero_crystalskull|feastivus_multplicity|mashup_arcade|iceage_hunter_veteran|iceage_weaselhoarder_veteran|iceage_weasel_veteran|iceage_charred|iceage_chief|iceage_chief_veteran|iceage_chief_miniboss_phase1|iceage_chief_miniboss_phase2|iceage_chief_miniboss_friend_spawner|steam|steam_armor1|steam_armor2|steam_flag|steam_gentleman|steam_barrel|steam_miner|steam_miner_armor1|steam_miner_armor2|steam_miner_coal|steam_gargantuar|steam_imp|steam_furnace|steam_mechanic|steam_clockwork|steam_clockwork_blue|steam_clockwork_green|steam_inventor|steam_repairimp|steam_back|steam_back_armor1|steam_back_armor2|steam_back_flag|steam_back_imp|treasureyeti|holiday_treasureyeti|vase_gargantuar|feastivus_caketank|space_dancer|space_dancer_8bit|pet|foodfight_turkey_boss|imppear_piano|imppear_imp_summoner|imppear_overseer|fire_ball|ice_ball|zoybeanpod_basic|zoybeanpod_armor1|zoybeanpod_armor2|zoybeanpod_gargantuar|turkeypult_basic|turkeypult_turkzilla|imppear_imp|solarsage_enlightened|gum|valentines|valentines_armor1|valentines_armor2|valentines_flag|valentines_jane|valentines_balloon|valentines_superfanimp|summer_boombox|summer_boombox_ballad|valentines_gargantuar|valentines_imp|valentines_lovebomb|stpatrick|stpatrick_armor1|stpatrick_armor2|stpatrick_flag|stpatrick_ra|leprachaun_dodo|stpatrick_glitter|stpatrick_glitter_pop|stpatrick_punk|stpatrick_punk_punk|stpatrick_gargantuar|stpatrick_gargantuar_metal|leprachaun_imp|spring|spring_armor1|spring_armor2|spring_armor4_blue|spring_armor4_red|spring_armor4_green|spring_flag|spring_camel_onehump|spring_camel_twohump|spring_camel_manyhump|spring_poncho|spring_poncho_plate|spring_poncho_no_plate|spring_wizard|spring_prospector|easter_troglobite_1block|easter_troglobite_2block|easter_troglobite|spring_gargantuar|spring_imp|spring_gargantuar_af|spring_imp_af|chocolate_launcher1|chocolate_launcher2|chocolate_launcher3|chocolate_launcher4|chocolate_launcher5|birthday|birthday_armor1|birthday_armor2|birthday_flag|birthday_flag|birthday_pharaoh|birthday_barrel|birthday_jetpack|birthday_juggler|birthday_troglobite_1block|birthday_troglobite_2block|birthday_troglobite|birthday_barrelroller|birthday_mech_cone|birthday_imp|birthday_gargantuar|children_basic|children_armor1|children_armor2|children_armor4|children_flag|children_balloon|children_captain|children_football_mech|children_gargantuar|children_imp|summer_basic|summer_armor1|summer_armor2|summer_flag|summer_bug|summer_bug_armor1|summer_bug_armor2|summer_explorer|summer_gargantuar|summer_imp|halloween|halloween_armor1|halloween_armor2|halloween_flag|halloween_witch|halloween_breakdancer|halloween_crow|halloween_ghost|halloween_relichunter|halloween_octopus|halloween_gargantuar|halloween_imp|bighead|bighead_armor1|bighead_armor2|bighead_flag|bighead_newspaper|bighead_balloon|bighead_allstar|bighead_superfan|bighead_barrelroller|bighead_barrel|bighead_lostpilot|bighead_gargantuar|bighead_imp|foodfight|foodfight_armor1|foodfight_armor2|foodfight_flag|foodfight_overstuff|foodfight_protector|foodfight_chefster|foodfight_gobbler_king|foodfight_turkey|foodfight_gargantuar|foodfight_imp|feastivus|feastivus_armor1|feastivus_armor2|feastivus_flag|feastivus_piano|feastivus_swashbuckler|feastivus_poncho|feastivus_poncho_plate|feastivus_poncho_no_plate|feastivus_gargantuar|feastivus_imp|feastivus_camel_onehump|feastivus_camel_twohump|feastivus_camel_manyhump|feastivus_troglobite_1block|feastivus_troglobite_2block|feastivus_troglobite|feastivus_hunter|feastivus_fisherman|holiday_gargantuar|holiday_imp|zcorp|zcorp_armor1|zcorp_armor2|zcorp_armor4|zcorp_fem|zcorp_fem_armor1|zcorp_fem_armor2|zcorp_fem_armor4|zcorp_flag|zcorp_consultant|zcorp_helpdesk|zcorp_racer_chair|zcorp_racer|zcorp_gargantuar|zcorp_imp|hero_electricboogaloo|hero_armor1|hero_armor2|hero_flag|hero_disco_mech|hero_jetpack_disco|hero_rustbolt|hero_superbrainz|hero_weaselhoarder|hero_weasel|galaxy_dodo|hero_barrelroller|hero_barrel|hero_smash|hero_impfinity|hero_neptuna|lunar|lunar_armor1|lunar_armor2|lunar_flag|lunar_superfanimp|lunar_camel_onehump|lunar_camel_twohump|lunar_camel_manyhump|lunar_relichunter|lunar_bandit|lunar_moneytree|lion_dance|lunar_gargantuar|lunar_imp|endlesswealth|sportzball|sportzball_armor1|sportzball_armor2|sportzball_foam|sportzball_armor1_foam|sportzball_armor2_foam|sportzball_flag|sportzball_flag_armor1|sportzball_flag_armor2|sportzball_wizard|sportzball_balloon|sportzball_gargantuar|sportzball_imp|chili|chili_armor1|chili_armor2|chili_armor4|chili_flag|valentines_seagull|stpatrick_breakdancer|stpatrick_breakdancer_8bit|stpatrick_ballista|birthday_magician|summer_ra|halloween_excavator|feastivus_troglobite_armor1|feastivus_troglobite_armor2|toymaker_troglobite|feastivus_troglobite_gobbler|dark_gravedropper|dark_infected|beach_toxicwater|eighties_bass_c7|eighties_bass_c6|eighties_bass|eighties_bass_c4|eighties_bass_c3|roman|roman_armor1|roman_armor2|roman_armor3|roman_armor4|roman_flag|roman_healer|roman_segment|roman_shield_top|roman_shield_pair|roman_shield_triad|roman_ballista|roman_medusa|roman_gargantuar|roman_imp|carnie|carnie_armor1|carnie_armor2|carnie_armor4|carnie_monkey|carnie_flag|carnie_cannon|carnie_firebreather|carnie_magician|carnie_stiltwalker|carnie_gargantuar|carnie_imp|carnie_imp_twins|carnie_imp_split|harvest|harvest_armor1|harvest_armor2|harvest_flag|harvest_flag_armor1|harvest_flag_armor2|harvest_outhouse|harvest_pitchfork|harvest_eggshell|harvest_eggstealer|harvest_pterry|harvest_imp|harvest_gargantuar|swashbuckler_basic|iceage_troglobite_basic|lostcity_relichunter_basic|eighties_arcade_basic|easter_troglobite_basic|birthday_troglobite_basic|halloween_relichunter_basic|feastivus_swashbuckler_basic|feastivus_troglobite_basic|eighties_bass_basic|general_treadmill_phase1|general_treadmill_phase2|general_treadmill_phase3|general_caesar_phase1|general_caesar_phase2|general_caesar_phase3|zombossmech_egypt|zombossmech_pirate|zombossmech_cowboy|zombossmech_future|zombossmech_dark|zombossmech_beach|zombossmech_iceage|zombossmech_lostcity|zombossmech_eighties|zombossmech_dino|zombossmech_modern1|zombossmech_modern_egypt|zombossmech_modern_pirate|zombossmech_modern_cowboy|zombossmech_modern_future|zombossmech_modern_dark|zombossmech_modern_beach|zombossmech_modern_iceage|zombossmech_modern_lostcity|zombossmech_modern_eighties|zombossmech_modern_dino|zombossmech_holiday|zombossmech_iceage3|zombossmech_steam|beghouled|beghouled_armor1|beghouled_armor2|beghouled_newspaper|beghouled_mummy|beghouled_mummy_armor1|beghouled_mummy_armor2|beghouled_pirate|beghouled_pirate_armor1|beghouled_pirate_armor2|beghouled_cowboy|beghouled_cowboy_armor1|beghouled_cowboy_armor2|beghouled_future|beghouled_future_armor1|beghouled_future_armor2|beghouled_dark|beghouled_dark_armor1|beghouled_dark_armor2|beghouled_beach|beghouled_beach_armor1|beghouled_beach_armor2|beghouled_beach_fem|beghouled_beach_fem_armor1|beghouled_beach_fem_armor2|beghouled_iceage|beghouled_iceage_armor1|beghouled_iceage_armor2|beghouled_lostcity|beghouled_lostcity_armor1|beghouled_lostcity_armor2|general_waveadvancer|gameover_idiot|dark_wizard_veteran_vanilla|skycity|skycity_armor1|skycity_armor2|skycity_armor3|skycity_armor4|skycity_battleplane|skycity_battleplane_land|skycity_twinsplane|skycity_twinsplane_land|skycity_electric|skycity_rocket|skycity_arbiter|skycity_arbiter_land|skycity_protector|skycity_gargantuar|skycity_launcher_zombie|carnie_cottoncandy_pink|carnie_cottoncandy_blue|carnie_trapeze_blue|carnie_trapeze_red|carnie_trapeze_yellow|carnie_toy_ball|carnie_toy_teeth|carnie_mirror|carnie_prankster|carnie_musicbox|carnie_musicbox_zomboss|carnie_toy_teddy|carnie_toy_sniffer|carnie_toy_gargantuar|rift|rift_armor1|rift_armor2|rift_armor4|rift_excavator|rift_jane|rift_gargimp|rift_weasel|rift_barrelroller|rift_gremlin|rift_sniffer|rift_imp|rift_imp_sandwich|rift_gargantuar|rift_berserker|zombotany_peashooter|zombotany_gatling|zombotany_repeater|zombotany_wallnut|zombotany_tallnut|zombotany_torchwood|zombotany_jalapeno|zombotany_chip|zombotany_firepeashooter|zombotany_lotusroot|zombotany_primalwallnut|zombotany_peanut|zombotany_murkadamia|zombotany_potatomine|zombotany_phatbeet|zombotany_kiwibeast|zombotany_imppear|zombotany_snowpea|zombotany_splitpea|zombotany_passionflower|zombotany_boomflower|zombotany_witchhazel|zombotany_puffshroom|zombotany_threepeater|zombotany_bloomerang|steam_miner_train|steam_miner_train_armor1|steam_miner_train_armor2|duckytube|duckytube_armor1|duckytube_armor2|duckytube_armor4|beach_duckytube|beach_duckytube_armor1|beach_duckytube_armor2|beach_duckytube_armor4|beach_fem_duckytube|beach_fem_duckytube_armor1|beach_fem_duckytube_armor2|beach_fem_duckytube_armor4|beach_shell|beach_shell_shield|beach_shell_basic|beach_garbage_weak|beach_garbage_normal|beach_garbage_strong|beach_garbage_imp|beach_garbage_imp_zombie|beach_greaser_imp|hero_mc|hero_repairimp|hero_glitter|hero_bass|hero_bass_c7|hero_bass_c6|hero_bass_c4|hero_bass_c3|hero_poncho|hero_stiltwalker|hero_captain|treasureyeti_noloot|tutorial_swashbuckler_rally|tutorial_lostpilot_rally|lris_bird|lris_bird_pf|plantagenet|plantagenet_armor1|plantagenet_armor2|plantagenet_flag|plantagenet_gargantuar|travellog_market_gargantuar|plantagenet_imp|plantagenet_wine|plantagenet_noblewoman|plantagenet_princess|servant|servant_red|servant_armor2|servant_red_armor2|servant_flag|servant_red_flag|servant_flag_buff|servant_red_flag_buff|servant_flag_veteran|servant_red_flag_veteran|servant_imp|servant_black_imp|servant_besom|servant_red_besom|servant_bell|servant_red_bell|servant_tea|servant_red_tea|servant_fly|servant_fly_black|servant_fly_basic|servant_fly_black_basic|desire_shikaisen|shikaisen_basic|desire_emperor"    
    print("Processing zombie types...")
    results, zombie_types = process_zombie_types(newz_path, props_path, existing_zombies)
    
    print(f"\nFound {len(zombie_types)} new zombie types\n")
    print_results(results)
    
    # Print combined output
    line1, line2 = print_combined_output(zombie_types)
    
    # Save results to JSON
    output_path = r'c:\Users\Mansoum\Documents\test\zombie_analysis.json'
    with open(output_path, 'w') as f:
        json.dump(results, f, indent=2)
    print(f"\nDetailed results saved to {output_path}")
    
    # Save combined output to text file
    combined_output_path = r'c:\Users\Mansoum\Documents\test\zombie_combined.txt'
    with open(combined_output_path, 'w') as f:
        f.write("Line 1 (All Codenames/Aliases):\n")
        f.write(line1 + "\n\n")
        f.write("Line 2 (Detailed):\n")
        f.write(line2)
    print(f"Combined output saved to {combined_output_path}")

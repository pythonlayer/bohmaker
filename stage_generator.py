import json
import copy

def generate_stage_variants(stage_data):
    """
    Takes a stage dictionary and generates joust and eighties variants.
    Returns a tuple of (joust_variant, eighties_variant)
    """
    
    # Create joust variant
    joust_variant = copy.deepcopy(stage_data)
    joust_variant["objclass"] = "JoustStageProperties"
    
    # Create eighties variant
    eighties_variant = copy.deepcopy(stage_data)
    eighties_variant["objclass"] = "EightiesStageProperties"
    # Add Eighties_Background_Effects to the beginning of ResourceGroupNames
    eighties_variant["objdata"]["ResourceGroupNames"].insert(
        0, "Eighties_Background_Effects"
    )
    
    return joust_variant, eighties_variant


def format_stage_json(stage_data):
    """
    Formats the stage data to match the exact output format with proper indentation.
    """
    return json.dumps(stage_data, indent=4)


def print_stage_variants(stage_data):
    """
    Generates and prints both variants in the exact format requested.
    """
    joust_variant, eighties_variant = generate_stage_variants(stage_data)
    
    print("JOUST:")
    print(format_stage_json(joust_variant))
    print("\n\nEIGHTIES:")
    print(format_stage_json(eighties_variant))


# Example usage
if __name__ == "__main__":
    # You can load a stage from a JSON file or provide it directly
    
    # Example: Load from JSON file
    # with open('egypt_stage.json', 'r') as f:
    #     stage = json.load(f)
    # print_stage_variants(stage)
    
    # Or provide the stage data directly:
    egypt_stage = {
        "aliases": ["EgyptStage"],
        "objclass": "EgyptStageProperties",
        "objdata": {
            "ResourceGroupNames": [
                "DelayLoad_Background_Egypt_Compressed",
                "Dirt_Spawn_Dirt",
                "AudioEgypt",
                "EgyptGroansAudio"
            ],
            "GroupsToUnloadForAds": ["DelayLoad_Background_Egypt_Compressed"],
            "StagePrefix": "egypt",
            "BackgroundResourceGroup": "DelayLoad_Background_Egypt_Compressed",
            "BackgroundImagePrefix": "IMAGE_BACKGROUNDS_EGYPT",
            "LevelPowerupSet": "LevelPowerupsDefault",
            "BasicZombieTypeName": "mummy",
            "FlagZombieTypeName": "mummy_flag",
            "FlagVeteranZombieTypeNames": ["mummy_flag_veteran"],
            "Armor1ZombieTypeName": "mummy_armor1",
            "Armor2ZombieTypeName": "mummy_armor2",
            "MusicSuffix": "Egypt",
            "AmbientAudioSuffix": "Egypt_Wind_BG",
            "RailcartDefaultTypeName": "railcart_egypt",
            "GravestoneDefaultTypeName": "gravestone_egypt",
            "DirtSpawnEffectName": "POPANIM_EFFECTS_DIRT_SPAWN_DIRT",
            "StarChallengeUnlockLevel": "egypt11",
            "DisabledStreetCells": [
                {"mX": 0, "mY": 0},
                {"mX": 0, "mY": 1},
                {"mX": 0, "mY": 2},
                {"mX": 0, "mY": 3},
                {"mX": 0, "mY": 4},
                {"mX": 0, "mY": 5},
                {"mX": 0, "mY": 6},
                {"mX": 0, "mY": 7},
                {"mX": 0, "mY": 8},
                {"mX": 0, "mY": 9},
                {"mX": 1, "mY": 0},
                {"mX": 1, "mY": 1},
                {"mX": 1, "mY": 2},
                {"mX": 1, "mY": 3},
                {"mX": 1, "mY": 4},
                {"mX": 1, "mY": 5},
                {"mX": 1, "mY": 6},
                {"mX": 1, "mY": 7},
                {"mX": 1, "mY": 8},
                {"mX": 1, "mY": 9},
                {"mX": 2, "mY": 0},
                {"mX": 2, "mY": 1},
                {"mX": 2, "mY": 2},
                {"mX": 2, "mY": 3},
                {"mX": 2, "mY": 4},
                {"mX": 2, "mY": 5},
                {"mX": 2, "mY": 6},
                {"mX": 2, "mY": 7},
                {"mX": 2, "mY": 8},
                {"mX": 2, "mY": 9},
                {"mX": 3, "mY": 9},
                {"mX": 3, "mY": 8},
                {"mX": 3, "mY": 7},
                {"mX": 4, "mY": 9},
                {"mX": 4, "mY": 8},
                {"mX": 5, "mY": 9},
                {"mX": 5, "mY": 8},
                {"mX": 5, "mY": 7},
                {"mX": 6, "mY": 9},
                {"mX": 6, "mY": 8},
                {"mX": 7, "mY": 9},
                {"mX": 7, "mY": 8},
                {"mX": 7, "mY": 7},
                {"mX": 7, "mY": 6},
                {"mX": 7, "mY": 0},
                {"mX": 7, "mY": 1},
                {"mX": 7, "mY": 2},
                {"mX": 8, "mY": 9},
                {"mX": 8, "mY": 8},
                {"mX": 8, "mY": 7},
                {"mX": 8, "mY": 6},
                {"mX": 8, "mY": 2},
                {"mX": 8, "mY": 1},
                {"mX": 8, "mY": 0}
            ]
        }
    }
    
    print_stage_variants(egypt_stage)

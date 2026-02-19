import json
import copy
import pyperclip

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
    Includes trailing space after "Eighties_Background_Effects" and trailing comma.
    """
    json_str = json.dumps(stage_data, indent=4)
    
    # Add trailing space after "Eighties_Background_Effects",
    json_str = json_str.replace(
        '"Eighties_Background_Effects",',
        '"Eighties_Background_Effects", '
    )
    
    # Add trailing comma at the end
    json_str = json_str.rstrip() + ','
    
    return json_str


def print_stage_variants(stage_data):
    """
    Generates and prints both variants in the exact format requested.
    Eighties variant is copied to clipboard automatically.
    Press enter to get joust variant copied to clipboard.
    """
    joust_variant, eighties_variant = generate_stage_variants(stage_data)
    
    # Copy eighties variant to clipboard
    eighties_json = format_stage_json(eighties_variant)
    pyperclip.copy(eighties_json)
    
    print("EIGHTIES variant copied to clipboard!")
    print("\n" + eighties_json)
    print("\n" + "="*80)
    input("Press ENTER to copy JOUST variant to clipboard...")
    
    # Copy joust variant to clipboard
    joust_json = format_stage_json(joust_variant)
    pyperclip.copy(joust_json)
    
    print("\nJOUST:")
    print(joust_json)
    print("\nJOUST variant copied to clipboard!")


# Example usage
if __name__ == "__main__":
    # You can load a stage from a JSON file or provide it directly
    
    # Example: Load from JSON file
    # with open('stage.json', 'r') as f:
    #     stage = json.load(f)
    # print_stage_variants(stage)
    
    # Or provide the stage data directly:
    egypt_stage = {
	"objclass": "RFLCarnivalStageProperties",
	"aliases": [
		"CarnivalStage"
	],
	"objdata": {
		"ResourceGroupNames": [
			"DelayLoad_Background_Carnival",
			"CarniePosterModule",
			"Dirt_Spawn_Grass",
			"AudioTutorial",
			"AudioModern",
			"PlantExplodeONutAudio"
		],
		"GroupsToUnloadForAds": [
			"DelayLoad_Background_Carnival"
		],
		"StagePrefix": "carnie",
		"BackgroundResourceGroup": "DelayLoad_Background_Carnival",
		"BackgroundImagePrefix": "IMAGE_BACKGROUNDS_CARNIVAL",
		"LevelPowerupSet": "LevelPowerupsDefault",
		"BasicZombieTypeName": "carnie",
		"FlagZombieTypeName": "carnie_flag",
		"Armor1ZombieTypeName": "carnie_armor1",
		"Armor2ZombieTypeName": "carnie_armor2",
		"RailcartDefaultTypeName": "railcart_tutorial",
		"GravestoneDefaultTypeName": "gravestone_tutorial",
		"DirtSpawnEffectName": "POPANIM_EFFECTS_DIRT_SPAWN_GRASS",
		"MusicSuffix": "Carnival",
		"DisabledStreetCells": [
			{
				"mX": 0,
				"mY": 0
			},
			{
				"mX": 0,
				"mY": 1
			},
			{
				"mX": 0,
				"mY": 2
			},
			{
				"mX": 0,
				"mY": 3
			},
			{
				"mX": 0,
				"mY": 4
			},
			{
				"mX": 0,
				"mY": 5
			},
			{
				"mX": 0,
				"mY": 6
			},
			{
				"mX": 0,
				"mY": 7
			},
			{
				"mX": 0,
				"mY": 8
			},
			{
				"mX": 0,
				"mY": 9
			},
			{
				"mX": 1,
				"mY": 0
			},
			{
				"mX": 1,
				"mY": 1
			},
			{
				"mX": 1,
				"mY": 2
			},
			{
				"mX": 1,
				"mY": 3
			},
			{
				"mX": 1,
				"mY": 4
			},
			{
				"mX": 1,
				"mY": 5
			},
			{
				"mX": 1,
				"mY": 6
			},
			{
				"mX": 1,
				"mY": 7
			},
			{
				"mX": 1,
				"mY": 8
			},
			{
				"mX": 1,
				"mY": 9
			},
			{
				"mX": 2,
				"mY": 0
			},
			{
				"mX": 2,
				"mY": 1
			},
			{
				"mX": 2,
				"mY": 2
			},
			{
				"mX": 2,
				"mY": 3
			},
			{
				"mX": 2,
				"mY": 4
			},
			{
				"mX": 2,
				"mY": 5
			},
			{
				"mX": 2,
				"mY": 6
			},
			{
				"mX": 2,
				"mY": 7
			},
			{
				"mX": 2,
				"mY": 8
			},
			{
				"mX": 2,
				"mY": 9
			},
			{
				"mX": 5,
				"mY": 9
			},
			{
				"mX": 6,
				"mY": 0
			},
			{
				"mX": 6,
				"mY": 1
			},
			{
				"mX": 6,
				"mY": 2
			},
			{
				"mX": 6,
				"mY": 3
			},
			{
				"mX": 6,
				"mY": 4
			},
			{
				"mX": 6,
				"mY": 5
			},
			{
				"mX": 6,
				"mY": 6
			},
			{
				"mX": 6,
				"mY": 7
			},
			{
				"mX": 6,
				"mY": 8
			},
			{
				"mX": 6,
				"mY": 9
			},
			{
				"mX": 7,
				"mY": 0
			},
			{
				"mX": 7,
				"mY": 6
			},
			{
				"mX": 7,
				"mY": 7
			},
			{
				"mX": 7,
				"mY": 8
			},
			{
				"mX": 7,
				"mY": 9
			},
			{
				"mX": 8,
				"mY": 0
			},
			{
				"mX": 8,
				"mY": 6
			},
			{
				"mX": 8,
				"mY": 7
			},
			{
				"mX": 8,
				"mY": 8
			},
			{
				"mX": 8,
				"mY": 9
			}
		]
	}
}
    
    print_stage_variants(egypt_stage)

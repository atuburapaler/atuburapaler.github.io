# MODERN WARFARE III
![](https://cdn2.steamgriddb.com/hero/4971ea42e67e73f2e0dc2546ac114455.jpg)
*->"Take this to hell with you, Captain... Never bury your enemies alive."<-*

## Menus
- `openmenu mainmenuoffline`
- `openmenu customizemenu`
- `openmenu musicpackselect`
- `openmenu mybundleselect`
- `openmenu systemlinklobby`
- `openmenu solooperatorselect`

## Visuals
- `seta #x3879E55ACF9D60DEB`
This displays the Halloween themed Season Six HUD, in the next match (0-1)
- `#x3BB4DBC0D6A10A598`
This displays the Call of Duty Endowment banner in the countdown after the warmup, in the next ![](https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt50cbf0004f8aeba3/6373bd4c5148880e83ab6d4a/codwz2.svg){6%:6%} match (0-1)
- `lui_channels_enabled`
- `lui_notifications_enabled`
These defines if the top right menu will display various buttons, or not (0-1)
- `#x3f1453ba49333b368`
This defines if the reactive operator skins, and weapon blueprints, will render particles, or not (0-1)
- `lui_recommended_weapons_enabled`
This will show/hide the recommended weapons flairs from the current build (0-1)
- `lui_atvi_clantag_icons_enabled`
This will show/hide the clan tag icons for COD studios if chosen (0-1)
- `r_dof_enable`
This will enable/disable depth of field.
- `r_ssrsamplecount 900`
This will try to fix blurry screen space reflections by increasing the sample count.
- `r_ssrsamplecount 64`
This will restore previous values and return to the default sample count.
- `seta #x3a540c6958867cedf 1; seta #x3563be5c72972f316 0`
Something about bots, i'll test it later.
- `cg_drawdevoverlays`
This will show/hide developer info in an overlay (0-1)
- `lui_enable_gun_effect_preview_firing_range`
This defines if the weapon preview from the firing range will display or not a tracers preview window like in bundle menus (0-1)
- `r_globalSnow 1`
Experimental, this will render snow textures on the whole game, can affect all kind of maps.

## Inventories
- `setJupiterPrivateLoadout loadouts 0 name`
- `setJupiterPrivateLoadout loadouts 0 weaponSetups 0 weapon`
- `setJupiterPrivateLoadout loadouts 0 weaponSetups 0 camo`
- `setJupiterPrivateLoadoutsPlayerData customizationSetup operatorCustomization`
- `setJupiterPrivateLoadout loadouts 0 weaponSetups 0 weapon jup_cp01_sh_aromeo410;setJupiterPrivateLoadout loadouts 0 weaponSetups 0 attachmentSetup 0 attachment jup_ammo_410g_vortex`
Equip the Arcade game mode Riveter shotgun with unique explosive ammo.
- `setJupiterPrivateLoadout loadouts 0 weaponSetups 1 weapon jup_jp35_sn_moscar;setJupiterPrivateLoadout loadouts 0 weaponSetups 1 attachmentSetup 0 attachment jup_jp35_sn_moscar_bar_explode`
Equip the Arcade game mode MORS sniper rifle with unique explosive ammo.

### Camouflages
Multiplayer mastery
Name|Icon|ID
-|:-:|-
Gilded|![](https://static.wikia.nocookie.net/callofduty/images/3/3e/Gilded_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_comp_01`
Forged|![](https://static.wikia.nocookie.net/callofduty/images/2/25/Forged_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_comp_02`
Priceless|![](https://static.wikia.nocookie.net/callofduty/images/0/09/Priceless_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_comp_03`
Interstellar|![](https://static.wikia.nocookie.net/callofduty/images/9/9a/Interstellar_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_comp_04`

Weapon Prestige
Name|Icon|ID
-|:-:|-
One Trick|![](https://static.wikia.nocookie.net/callofduty/images/8/88/OneTrick_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_prest_01`
Molten Obsidian|![](https://static.wikia.nocookie.net/callofduty/images/f/f7/MoltenObsidian_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_prest_02`
Mercury|![](https://static.wikia.nocookie.net/callofduty/images/b/b8/Mercury_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_prest_03`
Constellation's End|![](https://static.wikia.nocookie.net/callofduty/images/6/61/ConstellationsEnd_Camo_Icon_MWIII.png/revision/latest?cb=20240918233408&format=original){90px:90px}|`jup_camo_prest_04`

Events
Name|Icon|ID
-|:-:|-
Gridlocked|![](https://static.wikia.nocookie.net/callofduty/images/8/8e/Gridlocked_Camo_Icon_MWIII.png){90px:90px}|
Shifting Grid|![](https://static.wikia.nocookie.net/callofduty/images/d/df/ShiftingGrid_Camo_Icon_MWIII.png){90px:90px}|
Synth-Bust|![](https://static.wikia.nocookie.net/callofduty/images/f/fb/SynthBust_Camo_Icon_MWIII.png){90px:90px}|

## ![](https://cdn2.steamgriddb.com/logo/50d2be98900f1d8a2fb3c3207c6d31b9.png){10%:10%} Zombies

- `cl_transientcollision_memorybudgetgame 224288000;cl_transientcollision_maxtilesoverride 64;scr_default_maxagents 64;ui_serverframeduration 16;ui_physicsframeduration 16`
Stability values.
- `set ob_devuav`
This defines if the next match will display hostiles on the mini map persistently.
- `set party_maxsquadsize`
This sets the number of teammates the player will have in the next match.
- `set party_maxplayers`
This sets the number of Operation Deadbolt allies the player will have in the next match (marked with blue)
- `set bot_enablenopathnodebehavior`
This will define if bots can follow a path and track hostiles, or not, in the next match, it's disabled by default (0-1)
- `set #x32c3222a73adb30fd "iw9_me_fists_mp"`
I have to test this one, later.
- `seta #x389f5285b9abcc3b2`
A lot of loot bla bla bla (0-3)
- `set scr_start_currency`
Set the amount of essence the players will have in the next match.
- `set #x3ef237da69bb64ef6 mp_jup_st_c_gw;seta #x3f0651f120dc9412d 1`
Act 1 - Exfil Dr Jansen
- `set #x3ef237da69bb64ef6 mp_jup_resort_gw;seta #x3f0651c120dc93a94 1`
Act 2 - Test Site
- `set #x3ef237da69bb64ef6 mp_jup_gw_fallout;seta #x3f0651d120dc93cc7 1`
Act 3 - Confront Zakhaev
- `set #x3ef237da69bb64ef6 mp_jup_fort;seta #x3596076b5ab54d511 1`
Season 1 - Rift
- `set #x3ef237da69bb64ef6 mp_jup_sira;seta #x3c385fef4df4638cb 1`
Season 2 - Rift
- `set #x3ef237da69bb64ef6 mp_jup_hydro;seta #x3596074b5ab54d0ab 1`
Season 3 - Rift Story
- `set #x3ef237da69bb64ef6 mp_jup_hydro;seta #x3ad8d5450e8812fde 1`
Season 3 - Rift
- `set #x3ef237da69bb64ef6 mp_jup_fort;seta #x3fcdaef0b6dd641d2 1`
Season 4 - Unstable Rift
- `set #x3ef237da69bb64ef6 mp_jup_tower;seta #x359607ab5ab54dddd 1`
Season 5 Rift Story
- `set #x3ef237da69bb64ef6 mp_jup_tower;seta #x37661484c77058395 1; #x3f63771eb667cbc20 1`
Season 5 Rift - might have to noclip to get some of the Mr. Peeks

![](https://static.wikia.nocookie.net/callofduty/images/a/a1/ContainmentLevel_Level50_Icon_Zombies_MWIII.png){32px:32px} Wonder weapons
Name|Icon|ID
-|:-:|-
Ray Gun|![](https://static.wikia.nocookie.net/callofduty/images/e/e6/RayGun_HUD_Icon_MWIII.png){50%:50%}|`jup_pi_raygun`
Ray Gun (WZ)|![](https://static.wikia.nocookie.net/callofduty/images/e/e6/RayGun_HUD_Icon_MWIII.png){50%:50%}|`jup_pi_goldengun`
Scorcher|![](https://static.wikia.nocookie.net/callofduty/images/5/56/Scorcher_HUD_Icon_MWIII.png){50%:50%}|`jup_la_plasmagun`
Wunderwaffe DG-2|![](https://static.wikia.nocookie.net/callofduty/images/3/33/WunderwaffeDG2_HUD_Icon_MWIII.png){50%:50%}|`jup_ar_dg2`
V-R11|![](https://static.wikia.nocookie.net/callofduty/images/b/bc/VR11_HUD_Icon_MWIII.png){50%:50%}|`jup_la_humangun`

![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw9/jup_ui_map_icon_mr_peeks.png){4%:4%} Equipment
Name|Icon|ID
-|:-:|-
Snowball|![](https://static.wikia.nocookie.net/callofduty/images/2/20/Snowball_icon_BO4.png){50%:50%}|`jup_snowball_ob`
Monkey bomb|![](https://static.wikia.nocookie.net/callofduty/images/c/c7/CymbalMonkey_Tactical_HUD_Icon_Zombies_MWIII.png){50%:50%}|`jup_monkey_bomb_ob`
LT53 Kazimir|![](https://static.wikia.nocookie.net/callofduty/images/3/38/LT53Kazimir_Tactical_HUD_Icon_Zombies_MWIII.png){50%:50%}|`jup_blackhole_bomb_ob`
Aether blade|![](https://static.wikia.nocookie.net/callofduty/images/b/b1/AetherBlade_Lethal_HUD_Icon_Zombies_MWIII.png){50%:50%}|`jup_aether_blade_ob`

### Camouflages
Events
Name|Icon|ID
-|:-:|-
Mark of the Survivor|![](https://static.wikia.nocookie.net/callofduty/images/c/c8/MarkOfTheSurvivor_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_n4942_1`

![](https://cdn2.steamgriddb.com/logo/50d2be98900f1d8a2fb3c3207c6d31b9.png){64px:8%} Zombies mastery
Name|Icon|ID
-|:-:|-
Golden Enigma|![](https://static.wikia.nocookie.net/callofduty/images/8/8a/GoldenEnigma_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_comp_01`
Zircon Scale|![](https://static.wikia.nocookie.net/callofduty/images/f/fc/ZirconScale_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_comp_02`
Serpentinite|![](https://static.wikia.nocookie.net/callofduty/images/3/3d/Serpentinite_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_comp_03`
Borealis|![](https://static.wikia.nocookie.net/callofduty/images/1/15/Borealis_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_comp_04`

![](https://cdn2.steamgriddb.com/logo/50d2be98900f1d8a2fb3c3207c6d31b9.png){64px:8%} Zombies mastery ![](https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt8f53b3687511367c/62abb5b3e5f7e7444f49f012/MWII_LOGO_SQUARE_SVG.svg){64px:8%}
Name|Icon|ID
-|:-:|-
Golden Ivory|![](https://static.wikia.nocookie.net/callofduty/images/e/ef/GoldenIvory_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_iw9_comp_01`
Spinel Husk|![](https://static.wikia.nocookie.net/callofduty/images/b/b8/SpinelHusk_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_iw9_comp_02`
Arachnida|![](https://static.wikia.nocookie.net/callofduty/images/1/1f/Arachnida_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_iw9_comp_03`
Bioluminescent|![](https://static.wikia.nocookie.net/callofduty/images/e/e6/Bioluminescent_Camo_Icon_MWIII.png){90px:90px}|`jup_camo_ob_iw9_comp_04`

## ![](https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt50cbf0004f8aeba3/6373bd4c5148880e83ab6d4a/codwz2.svg){10%:10%}  WARZONE 2.0

- `exec br_core.cfg;exec br_globals.cfg`
Execute Warzone 2.0.
- `live_lobby_minplayers_start`
This sets what's the minimum players requirement in order to finish the warmup.
- `set lui_show_loading_hints`
This disables/enable the next game mode hints, in the next match. (0-1)
- `seta unified_backpack_size 1;seta inventory_backpack_size 9;seta force_ranking 1`
This fixes the backpack inventory (experimental), in the next match.
- `set ui_serverframeduration 16,set ui_physicsframeduration 16`
Sets the right physics values for miscellaneous entities like drones, in the next match.
- `cl_transientcollision_memorybudgetgame 224288000;cl_transientcollision_maxtilesoverride 64`
Sets the right collisions on Resurgence maps, like Vondel's train, in the next match.
- `scr_br_third_person_toggle`
This disables/enable third person button option on the pause menu, in the next match.
- `scr_br_playtest_tool_phoenix`
This disables/enable a developer tool kit in the next match, most of the stuff won't work, visual only.
- `seta scr_br_bunker_doors_show_graffiti`
- `seta scr_br_bunker_doors_show_documents`
These defines if the next match it's going to use specific ![](https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt38fbd5bc534f9d8d/666b3646e3720f794c00428c/-Bnet_Game-Shop_Icon-EN-1080x1080.svg?){10%:10%} reveal assets or not (0-1)

### ![](https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt50cbf0004f8aeba3/6373bd4c5148880e83ab6d4a/codwz2.svg){10%:10%} Game modes
Name|Icon|Full command
-|:-:|-
Battle Royale|![](https://static.wikia.nocookie.net/callofduty/images/6/6c/BattleRoyale_Icon_MWIII_WZ2.png)|`ui_gametype br`
Mini Royale|![](https://static.wikia.nocookie.net/callofduty/images/a/ad/MiniRoyale_Icon_MWIII_WZ2.png)|`ui_gametype mini`
Resurgence|![](https://static.wikia.nocookie.net/callofduty/images/f/fd/Resurgence_Icon_MWIII_WZ2.png)|`ui_gametype resurgence`
Plunder|![](https://static.wikia.nocookie.net/callofduty/images/f/fc/Plunder_Icon_MWIII_WZ2.png)|`ui_gametype plunder`
Zombie Royale|![](https://static.wikia.nocookie.net/callofduty/images/9/97/ZombieRoyale_Icon_MWIII_WZ2.png)|`ui_gametype zxp`
Purgatory|![](https://static.wikia.nocookie.net/callofduty/images/6/69/Purgatory_Icon_WZ2.png)|`ui_gametype limbo`
Totally The Same BR|![](https://static.wikia.nocookie.net/callofduty/images/6/6c/BattleRoyale_Icon_MWIII_WZ2.png)|`ui_gametype br;bg_brIsTotallyNormal 1`

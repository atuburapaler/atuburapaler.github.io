# MODERN WARFARE
![](https://shared.steamstatic.com/store_item_assets/steam/apps/2000950/library_hero_2x.jpg?t=1677185679)
*->"We get dirty and the world stays clean. That's the mission."<-*

## Versions
Number|Season|Splash
-|:-:|:-:
`1.16`|![](../images/ui/MW-icon.png){30%:30%} Season Two|![](../images/iw8/1.16.bmp){80%:80%}
`1.19`-`20`|![](../images/ui/MW-icon.png){30%:30%} Season Three|![](../images/iw8/1.20.bmp){80%:80%}
`1.23`|![](../images/ui/MW-icon.png){30%:30%} Season Four|![](../images/iw8/1.23.bmp){80%:80%}
`1.24`-`6`|![](../images/ui/MW-icon.png){30%:30%} Season Five|![](../images/iw8/1.24.bmp){80%:80%}
`1.27`-`8`|![](../images/ui/MW-icon.png){30%:30%} Season Six|![](../images/iw8/1.28.bmp){80%:80%}
`1.30`-`1`|![](../images/ui/CW-icon.png){25%:25%} Season One|![](../images/iw8/1.30.bmp){80%:80%}
`1.34`|![](../images/ui/CW-icon.png){25%:25%} Season Two|![](../images/iw8/1.34.bmp){80%:80%}
`1.36`-`7`|![](../images/ui/CW-icon.png){25%:25%} Season Three|![](../images/iw8/1.37.bmp){80%:80%}
`1.38`-`9`|![](../images/ui/CW-icon.png){25%:25%} Season Four|![](../images/iw8/1.39.bmp){80%:80%}
`1.41`-`2`|![](../images/ui/CW-icon.png){25%:25%} Season Five|![](../images/iw8/1.41.bmp){80%:80%}
`1.44`-`5`|![](../images/ui/CW-icon.png){25%:25%} Season Six|![](../images/iw8/1.44.bmp){80%:80%}
`1.46`-`51`|![](../images/ui/VG-icon.png){20%:20%} Season One|![](../images/iw8/1.51.bmp){80%:80%}
`1.54`-`6`|![](../images/ui/VG-icon.png){20%:20%} Season Two|![](../images/iw8/1.53.bmp){80%:80%}
`1.57`-`8`|![](../images/ui/VG-icon.png){20%:20%} Season Three|![](../images/iw8/1.57.bmp){80%:80%}
`1.59`-`61`|![](../images/ui/VG-icon.png){20%:20%} Season Four|![](../images/iw8/1.60.bmp){80%:80%}
`1.62`-`64`|![](../images/ui/VG-icon.png){20%:20%} Season Five|![](../images/iw8/1.62.bmp){80%:80%}
`1.65`|![](https://cdn2.steamgriddb.com/logo/0928a2ac707995558f4b3f0aefe1bccc.png){20%:20%}|![](https://static.wikia.nocookie.net/callofduty/images/4/42/WarzoneCaldera_Artwork_WZ.jpg/revision/latest/scale-to-width-down/1000?cb=20230624220454){80%:80%}
`1.67`|Retail|![](../images/iw8/1.0.bmp){80%:80%}

## Menus
- `openmenu mainlockoutmenu`
- `openmenu mainmenuoffline`
- `openmenu systemlinklobby`
- `openmenu bundlelockermenu`
- `openmenu wzseasonalopeningscreenpc`

## Visuals
- `seta MONKPPPQR`
This defines if the game frontend will be using seasonal assets or not (0-1)
- `r_colorGradingAnalyticalEnable 0; r_whiteBalanceTweaks 1; r_whiteBalanceIlluminant 2`
This will emulate a neutral lighting for the game front end, which can be used to override VG and Cold War colored filters.
- `r_colorGradingAnalyticalEnable 1; r_whiteBalanceTweaks 0; r_whiteBalanceIlluminant 0`
This will restore previous values and return to the default front end lighting.
- `r_tessellation`
This will set the terrain tessellation details render (0-2) this setting is often set to 0 by the engine, you can use it when you want.
- `execution_hint_enabled`
This will show or hide a hint whenever you're able to perform an execution, the UI elements are unfinished in this game (0-1)

## Inventories
- `setPrivateLoadout loadouts 0 name`
Loadout name, example: *setPrivateLoadout loadouts 0 name "Fist of iron"*
- `setPrivateLoadout loadouts 0 weaponSetups 0 weapon`
Weapon setup, example: *setPrivateLoadout loadouts 0 weaponSetups 0 weapon iw8_ar_kilo433*
- `setPrivateLoadout loadouts 0 weaponSetups 0 camo`
Weapon setup camouflage, example: *setPrivateLoadout loadouts 0 weaponSetups 0 camo camo_11a*

### Camouflages
Name|Icon|ID
-|:-:|-
Gold|![](https://static.wikia.nocookie.net/callofduty/images/4/45/Gold_Camo_Icon_MW2019.png){90px:90px}|`camo_11a`
Platinum|![](https://static.wikia.nocookie.net/callofduty/images/1/11/Platinum_Camo_Icon_MW2019.png){90px:90px}|`camo_11b`
Damascus|![](https://static.wikia.nocookie.net/callofduty/images/0/09/Damascus_Camo_Icon_MW2019.png){90px:90px}|`camo_11c`
Obsidian|![](https://static.wikia.nocookie.net/callofduty/images/3/31/Obsidian_Camo_Icon_MW2019.png){90px:90px}|`camo_11d`

## ![](https://images.blz-contentstack.com/v3/assets/bltf408a0557f4e4998/blt658c764be11bbed4/60db86bbce1eb95db45df71b/call-of-duty-warzone.svg){6%:6%} WARZONE ![](https://cdn2.steamgriddb.com/hero/0f79c3f3e971e1af245a3551b53a8737.png)
- `set QTQRQPLNK 1;set MLQNQTRRTK 1;set MKQQKMRORQ 16;exec br_core.cfg`
Full Warzone trigger.
- `set LOQQOSNQKN 0;openmenu WarzonePrivateMatchLobby`
Full private match menu, needs some network dependencies.
- `set br_minplayers`
This sets what's the minimum players requirement in order to finish the warmup.
- `set scr_br_gametype`
This manages the game mode of the next match (Read the table below)
- `seta br_kiosk_sales_discount`
This sets a base discount to the buy stations using percents (0-undefined)
- `set scr_br_radar_strength`
This sets the value of minimap radar players indicators (0-4)
- `set scr_br_loadout_option standardammo;set scr_br_allowLoadout 1;set scr_br_use_set_loadouts 1;set scr_br_allowLoadoutOnlyInPreLobby 0`
This enables the possibility of using loadouts for every player/bot in the next match.
- `seta scr_br_use_ww2_announcer`
- `seta scr_br_use_ww2_killstreak_call_in_device`
- `seta scr_br_use_ww2_model_swaps`
These defines if the next match it's going to use specific Vanguard assets or not (0-1)
- `seta scr_br_atlantisNight`
This defines if the next match on escape it's going to use night assets
- `seta scr_escape4_ee_6_2_enabled 1;seta scr_escape4_ee_6_3_enabled 1`
This defines if the next match will open up the secret bunkers under escape 4 by force.

### Game modes
Name|Icon|Full command
-|:-:|-
Battle Royale|![](https://static.wikia.nocookie.net/callofduty/images/a/a3/BattleRoyale_Logo_Warzone_MW.png)![](https://static.wikia.nocookie.net/callofduty/images/9/9a/BattleRoyale_Icon_VG_WZ.png)|`scr_br_gametype br`
Mini Royale|![](https://static.wikia.nocookie.net/callofduty/images/a/af/MiniRoyale_Logo_WZ.png)|`scr_br_gametype mini`
Juggernaut Royale|![](https://static.wikia.nocookie.net/callofduty/images/4/44/JuggernautRoyale_Logo_WZ.png)|`scr_br_gametype jugg`
Armored Royale|![](https://static.wikia.nocookie.net/callofduty/images/7/7d/ArmoredRoyale_Logo_WZ.png)|`scr_br_gametype truckwar`
Resurgence|![](https://static.wikia.nocookie.net/callofduty/images/1/1d/Resurgence_Logo_WZ.png)|`scr_br_gametype rebirth`
Plunder|![](https://static.wikia.nocookie.net/callofduty/images/5/5e/Plunder_Logo_Warzone_MW.png)![](https://static.wikia.nocookie.net/callofduty/images/c/c9/Plunder_Icon_VG_WZ.png)|`scr_br_gametype dmz`
King Slayer|![](https://static.wikia.nocookie.net/callofduty/images/7/7d/KingSlayer_Logo_WZ.png)|`scr_br_gametype kingslayer`

### Special events
Name|Version|Icon|Full command
-|-|:-:|-
Zombies in Vodianoy|1.34|![](https://static.wikia.nocookie.net/callofduty/images/8/8e/Zombie_Keycard_Icon_WZ.png)|`Lorem ipsum dolor sit amet, consectetur adipiscing elit`
The Destruction of Verdansk P1|1.34|![Part 1](https://static.wikia.nocookie.net/callofduty/images/b/bc/DestructionOfVerdansk_Mode_Icon_WZ.png)|`seta scr_br_gametype "reveal";seta scr_br_alt_mode_zxp 1`
The Destruction of Verdansk P2|1.34|![Part 2](https://static.wikia.nocookie.net/callofduty/images/b/bc/DestructionOfVerdansk_Mode_Icon_WZ.png)|`set NSQLTTMRMP "mp_escape2_pm";set scr_br_gametype reveal_2`
Verdansk '84 Loot. Kill. Win.|1.34%darkgoldenrod%**¹**%%|![](https://static.wikia.nocookie.net/callofduty/images/a/a3/BattleRoyale_Logo_Warzone_MW.png)|`scr_br_gametype brdov`
The Battle of Verdansk|1.41|![](https://static.wikia.nocookie.net/callofduty/images/e/e7/BattleOfVerdansk_Logo_WZ.png)|`seta scr_br_gametype x2;seta scr_wztrain_enable 1;seta scr_wztrain_type armored;seta scr_br_x2_signal_quest_enabled 1`
Ghosts of Verdansk|1.44|![](https://static.wikia.nocookie.net/callofduty/images/a/a5/GhostsOfVerdansk_Logo_WZ.png)|`scr_br_gametype gxp;seta scr_br_alt_mode_gxp 1;seta scr_br_gxp_fear 1;seta scr_br_gxp_fear 1;seta scr_br_gxp_phones 2;seta scr_br_safe_zones_enabled 1;seta scr_br_gxp_human_powers 1;seta scr_br_gxp_zombie_drop_tags 1;scr_br_gxp_safezone_hallucinations 1;scr_br_gxp_loop_zombie_fx 1;seta scr_fear_onlootboxjumpscare 1`
Festive Fervor|1.50-2|![](https://lh3.google.com/u/0/d/1Flv4ms4vnsYOxmUUmYX5oIvLaI6rowmu=w1910-h922-iv1?auditContext=prefetch)|`exec pr_br_global.cfg;set scr_br_alt_mode_hh 1;set scr_br_ff_xmas_blueprint 1;set scr_br_alt_mode_ff 1;set scr_br_hh_num_trees 12;scr_br_ff_fountain 1;scr_br_quests_enabled 1;set scr_br_events 1;set scr_br_hh_allowRepeatCompletion 0;set scr_br_hh_morse_message 1;set scr_mapHints 1;set scr_br_eas_wait_for_prematch 1;set scr_br_eas_force_use_data_positions 0;set scr_br_ff_elves 1;set disable_elf_collision 0;set scr_br_eas_disable_countdown 1;set scr_br_eas_num_elf_regions_per_map 13;set scr_br_eas_num_elf_buildings_per_region 6;set scr_br_eas_num_lives 3;set scr_br_eas_reward_coal_chance 25;set scr_br_eas_vo_delay 7;set scr_br_eas_countdown 15;set scr_br_eas_stun_range 900;set scr_br_eas_stun_duration 6;set scr_br_eas_start_range 90;set scr_br_eas_max_num_elves -1;set scr_br_ai_encounters 1`
Operation: Monarch|1.57|![](https://static.wikia.nocookie.net/callofduty/images/1/11/OperationMonarch_Logo_WZ.png)|`scr_br_gametype mendota;seta scr_br_pr_validate_gametypes 0;set scr_br_alt_mode_mendota 1;exec pr_br_mendota.cfg;seta scr_br_alt_mode_mxp 5`
Rebirth of the Dead|1.60+|![](https://static.wikia.nocookie.net/callofduty/images/d/d0/ZombieRoyale_Logo_Warzone_MW.png)|`set scr_br_gametype "zxp";set scr_br_alt_mode_zxp 1;set scr_br_zxp_numHitsJugg 0;set scr_br_zxp_respawn_shutdown_jugg 0;set scr_br_zxp_jugg_num_players 0;set scr_br_dbd_vehicle_motorcycle 1;set scr_br_zxp_zombiesDamageZombies 1;set scr_br_zxp_health 700;set scr_br_zxp_powers_cooldown 0;set scr_br_zxp_human_powers 1;seta scr_br_pr_validate_gametypes 0;seta scr_br_atlantisNight 1`
Operation: Last Call|1.63+%darkgoldenrod%**²**%%|![](https://static.wikia.nocookie.net/callofduty/images/e/e6/OperationLastCall_Icon_WZ.png)|`scr_br_gametype olaride;seta scr_br_pr_validate_gametypes 0;set scr_br_alt_mode_olaride 1`
!!! warning
¹It requires a controller set as the primary input method as you need to unplug it and plug it back in to get any input.
!!! warning
² 1.63 is a very unstable/broken build, the event will work in post. versions but it might miss some mechanics.
    
### WZ Inventories
- `setWZPrivateLoadout loadouts 0 name`
Loadout name, example: *setWZPrivateLoadout loadouts 0 name "Fist of iron"*
- `setWZPrivateLoadout loadouts 0 weaponSetups 0 weapon`
Weapon setup, example: *setWZPrivateLoadout loadouts 0 weaponSetups 0 weapon iw8_ar_t9accurate*
- `setWZPrivateLoadout loadouts 0 weaponSetups 0 camo`
Weapon setup camouflage, example: *setWZPrivateLoadout loadouts 0 weaponSetups 0 camo camo_mp_t9mastery_gold*

### WZ Camouflages
![](https://static.wikia.nocookie.net/callofduty/images/9/97/TeamDeathmatch_Gamemode_Icon_MP_BOCW.png){25%:25%}
**Cold War, Multiplayer mastery**%darkgoldenrod%¹%%

Name|Icon|ID
-|:-:|-
Gold|![](https://static.wikia.nocookie.net/callofduty/images/0/05/Gold_Camo_Icon_BOCW.png){90px:90px}|`camo_mp_t9mastery_gold`
Diamond|![](https://static.wikia.nocookie.net/callofduty/images/7/73/Diamond_Camo_Icon_BOCW.png){90px:90px}|`camo_mp_t9mastery_diamond`
Dark Matter Ultra|![](https://static.wikia.nocookie.net/callofduty/images/a/a1/DM_Ultra_Camo_Icon_BOCW.png){90px:90px}|`camo_mp_t9mastery_darkmatter`
!!! warning
¹Only available on version 1.30 onwards (Season One)
This version has some early coverage on weapon models.

**Cold War, Zombies mastery** %darkgoldenrod%²%%

Name|Icon|ID
-|:-:|-
Golden Viper|![](https://static.wikia.nocookie.net/callofduty/images/9/95/Golden_Viper_Camouflage_BOCW.png){90px:90px}|`camo_zm_t9mastery_gold`
Plague Diamond|![](https://static.wikia.nocookie.net/callofduty/images/f/f6/Plague_Diamond_Camo_Icon_BOCW.png){90px:90px}|`camo_zm_t9mastery_diamond`
Dark Aether|![](https://static.wikia.nocookie.net/callofduty/images/0/03/Dark_Aether_Camouflage_BOCW.png){90px:90px}|`camo_zm_t9mastery_darkmatter`
!!! warning
²Only available on version 1.41 onwards (Season Five)
This version has some early coverage on weapon models.
Some assets of the Dark Aether are broken on version 1.45 onwards.

**Vanguard, Multiplayer mastery**%darkgoldenrod%¹%%

Name|Icon|ID
-|:-:|-
Gold|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_110.png){90px:90px}|`s4_camo_11a`
Diamond|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_111.png){90px:90px}|`s4_camo_11b`
Atomic|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_112.png){90px:90px}|`s4_camo_11c`
?||`s4_camo_11d`

**Vanguard, Zombies mastery**%darkgoldenrod%¹%%

Name|Icon|ID
-|:-:|-
Golden Viper|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_gold_zm_e_s.png){90px:90px}|`s4_camo_11a_zm`
Plague Diamond|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_diamond_zm_a_s.png){90px:90px}|`s4_camo_11b_zm`
Dark Aether|![](https://github.com/atuburapaler/atuburapaler.github.io/blob/main/images/iw8/v_ui_elmnt_camo_atomic_c_zm_c.png){90px:90px}|`s4_camo_11c_zm`
!!! warning
¹Only available on version 1.46 onwards (Season One)

**Events**

Name|Icon|ID
-|-|-
Titanium Chrome||`s4_camo_titanium_trials_01`
Liquid Metal|![](https://static.wikia.nocookie.net/callofduty/images/b/bc/Liquid_Metal_Camo_Vanguard.png){90px:90px}|`s4_camo_titanium_trials_02`
Skynet||`s4_camo_titanium_trials_03`
Death Prospector||`mtl_s4_camo_gold_woodland`
False Protector||`mtl_s4_camo_gold_digital`

import React, { useState } from 'react'
import { Grid, TextField, Typography, Box, Tooltip } from '@mui/material'

function App() {
  let [searchData, setSearchData] = useState([])
  const [filterList, setFilterList] = useState([])



  let [data, setData] = useState([
    {
      "emoji": "😀"
      , "description": "grinning face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "grinning"
      ]
      , "tags": [
        "smile"
        , "happy"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😃"
      , "description": "grinning face with big eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smiley"
      ]
      , "tags": [
        "happy"
        , "joy"
        , "haha"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😄"
      , "description": "grinning face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smile"
      ]
      , "tags": [
        "happy"
        , "joy"
        , "laugh"
        , "pleased"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😁"
      , "description": "beaming face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "grin"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😆"
      , "description": "grinning squinting face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "laughing"
        , "satisfied"
      ]
      , "tags": [
        "happy"
        , "haha"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😅"
      , "description": "grinning face with sweat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sweat_smile"
      ]
      , "tags": [
        "hot"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤣"
      , "description": "rolling on the floor laughing"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "rofl"
      ]
      , "tags": [
        "lol"
        , "laughing"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "😂"
      , "description": "face with tears of joy"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "joy"
      ]
      , "tags": [
        "tears"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙂"
      , "description": "slightly smiling face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "slightly_smiling_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🙃"
      , "description": "upside-down face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "upside_down_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🫠"
      , "description": "melting face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "melting_face"
      ]
      , "tags": [
        "sarcasm"
        , "dread"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "😉"
      , "description": "winking face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "wink"
      ]
      , "tags": [
        "flirt"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😊"
      , "description": "smiling face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "blush"
      ]
      , "tags": [
        "proud"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😇"
      , "description": "smiling face with halo"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "innocent"
      ]
      , "tags": [
        "angel"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥰"
      , "description": "smiling face with hearts"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smiling_face_with_three_hearts"
      ]
      , "tags": [
        "love"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😍"
      , "description": "smiling face with heart-eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heart_eyes"
      ]
      , "tags": [
        "love"
        , "crush"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤩"
      , "description": "star-struck"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "star_struck"
      ]
      , "tags": [
        "eyes"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😘"
      , "description": "face blowing a kiss"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kissing_heart"
      ]
      , "tags": [
        "flirt"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😗"
      , "description": "kissing face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kissing"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☺️"
      , "description": "smiling face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "relaxed"
      ]
      , "tags": [
        "blush"
        , "pleased"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😚"
      , "description": "kissing face with closed eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kissing_closed_eyes"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😙"
      , "description": "kissing face with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kissing_smiling_eyes"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥲"
      , "description": "smiling face with tear"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smiling_face_with_tear"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "😋"
      , "description": "face savoring food"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "yum"
      ]
      , "tags": [
        "tongue"
        , "lick"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😛"
      , "description": "face with tongue"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "stuck_out_tongue"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😜"
      , "description": "winking face with tongue"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "stuck_out_tongue_winking_eye"
      ]
      , "tags": [
        "prank"
        , "silly"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤪"
      , "description": "zany face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "zany_face"
      ]
      , "tags": [
        "goofy"
        , "wacky"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😝"
      , "description": "squinting face with tongue"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "stuck_out_tongue_closed_eyes"
      ]
      , "tags": [
        "prank"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤑"
      , "description": "money-mouth face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "money_mouth_face"
      ]
      , "tags": [
        "rich"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🤗"
      , "description": "smiling face with open hands"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hugs"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🤭"
      , "description": "face with hand over mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hand_over_mouth"
      ]
      , "tags": [
        "quiet"
        , "whoops"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🫢"
      , "description": "face with open eyes and hand over mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_open_eyes_and_hand_over_mouth"
      ]
      , "tags": [
        "gasp"
        , "shock"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🫣"
      , "description": "face with peeking eye"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_peeking_eye"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🤫"
      , "description": "shushing face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "shushing_face"
      ]
      , "tags": [
        "silence"
        , "quiet"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🤔"
      , "description": "thinking face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "thinking"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🫡"
      , "description": "saluting face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "saluting_face"
      ]
      , "tags": [
        "respect"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🤐"
      , "description": "zipper-mouth face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "zipper_mouth_face"
      ]
      , "tags": [
        "silence"
        , "hush"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🤨"
      , "description": "face with raised eyebrow"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "raised_eyebrow"
      ]
      , "tags": [
        "suspicious"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😐"
      , "description": "neutral face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "neutral_face"
      ]
      , "tags": [
        "meh"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😑"
      , "description": "expressionless face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "expressionless"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😶"
      , "description": "face without mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "no_mouth"
      ]
      , "tags": [
        "mute"
        , "silence"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫥"
      , "description": "dotted line face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "dotted_line_face"
      ]
      , "tags": [
        "invisible"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "😶‍🌫️"
      , "description": "face in clouds"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_in_clouds"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "😏"
      , "description": "smirking face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smirk"
      ]
      , "tags": [
        "smug"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😒"
      , "description": "unamused face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "unamused"
      ]
      , "tags": [
        "meh"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙄"
      , "description": "face with rolling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "roll_eyes"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "😬"
      , "description": "grimacing face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "grimacing"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😮‍💨"
      , "description": "face exhaling"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_exhaling"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🤥"
      , "description": "lying face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "lying_face"
      ]
      , "tags": [
        "liar"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "😌"
      , "description": "relieved face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "relieved"
      ]
      , "tags": [
        "whew"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😔"
      , "description": "pensive face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "pensive"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😪"
      , "description": "sleepy face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sleepy"
      ]
      , "tags": [
        "tired"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤤"
      , "description": "drooling face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "drooling_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "😴"
      , "description": "sleeping face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sleeping"
      ]
      , "tags": [
        "zzz"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😷"
      , "description": "face with medical mask"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "mask"
      ]
      , "tags": [
        "sick"
        , "ill"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤒"
      , "description": "face with thermometer"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_thermometer"
      ]
      , "tags": [
        "sick"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🤕"
      , "description": "face with head-bandage"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_head_bandage"
      ]
      , "tags": [
        "hurt"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🤢"
      , "description": "nauseated face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "nauseated_face"
      ]
      , "tags": [
        "sick"
        , "barf"
        , "disgusted"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🤮"
      , "description": "face vomiting"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "vomiting_face"
      ]
      , "tags": [
        "barf"
        , "sick"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🤧"
      , "description": "sneezing face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sneezing_face"
      ]
      , "tags": [
        "achoo"
        , "sick"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥵"
      , "description": "hot face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hot_face"
      ]
      , "tags": [
        "heat"
        , "sweating"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥶"
      , "description": "cold face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cold_face"
      ]
      , "tags": [
        "freezing"
        , "ice"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥴"
      , "description": "woozy face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "woozy_face"
      ]
      , "tags": [
        "groggy"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😵"
      , "description": "face with crossed-out eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "dizzy_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😵‍💫"
      , "description": "face with spiral eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_spiral_eyes"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🤯"
      , "description": "exploding head"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "exploding_head"
      ]
      , "tags": [
        "mind"
        , "blown"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🤠"
      , "description": "cowboy hat face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cowboy_hat_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥳"
      , "description": "partying face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "partying_face"
      ]
      , "tags": [
        "celebration"
        , "birthday"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥸"
      , "description": "disguised face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "disguised_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "😎"
      , "description": "smiling face with sunglasses"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sunglasses"
      ]
      , "tags": [
        "cool"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤓"
      , "description": "nerd face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "nerd_face"
      ]
      , "tags": [
        "geek"
        , "glasses"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🧐"
      , "description": "face with monocle"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "monocle_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😕"
      , "description": "confused face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "confused"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫤"
      , "description": "face with diagonal mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_with_diagonal_mouth"
      ]
      , "tags": [
        "confused"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "😟"
      , "description": "worried face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "worried"
      ]
      , "tags": [
        "nervous"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙁"
      , "description": "slightly frowning face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "slightly_frowning_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☹️"
      , "description": "frowning face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "frowning_face"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "😮"
      , "description": "face with open mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "open_mouth"
      ]
      , "tags": [
        "surprise"
        , "impressed"
        , "wow"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😯"
      , "description": "hushed face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hushed"
      ]
      , "tags": [
        "silence"
        , "speechless"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😲"
      , "description": "astonished face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "astonished"
      ]
      , "tags": [
        "amazed"
        , "gasp"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😳"
      , "description": "flushed face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "flushed"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥺"
      , "description": "pleading face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "pleading_face"
      ]
      , "tags": [
        "puppy"
        , "eyes"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥹"
      , "description": "face holding back tears"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "face_holding_back_tears"
      ]
      , "tags": [
        "tears"
        , "gratitude"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "😦"
      , "description": "frowning face with open mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "frowning"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😧"
      , "description": "anguished face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "anguished"
      ]
      , "tags": [
        "stunned"
      ]
      , "unicode_version": "6.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😨"
      , "description": "fearful face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "fearful"
      ]
      , "tags": [
        "scared"
        , "shocked"
        , "oops"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😰"
      , "description": "anxious face with sweat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cold_sweat"
      ]
      , "tags": [
        "nervous"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😥"
      , "description": "sad but relieved face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "disappointed_relieved"
      ]
      , "tags": [
        "phew"
        , "sweat"
        , "nervous"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😢"
      , "description": "crying face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cry"
      ]
      , "tags": [
        "sad"
        , "tear"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😭"
      , "description": "loudly crying face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sob"
      ]
      , "tags": [
        "sad"
        , "cry"
        , "bawling"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😱"
      , "description": "face screaming in fear"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "scream"
      ]
      , "tags": [
        "horror"
        , "shocked"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😖"
      , "description": "confounded face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "confounded"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😣"
      , "description": "persevering face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "persevere"
      ]
      , "tags": [
        "struggling"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😞"
      , "description": "disappointed face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "disappointed"
      ]
      , "tags": [
        "sad"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😓"
      , "description": "downcast face with sweat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sweat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😩"
      , "description": "weary face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "weary"
      ]
      , "tags": [
        "tired"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😫"
      , "description": "tired face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "tired_face"
      ]
      , "tags": [
        "upset"
        , "whine"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥱"
      , "description": "yawning face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "yawning_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "😤"
      , "description": "face with steam from nose"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "triumph"
      ]
      , "tags": [
        "smug"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😡"
      , "description": "pouting face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "rage"
        , "pout"
      ]
      , "tags": [
        "angry"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😠"
      , "description": "angry face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "angry"
      ]
      , "tags": [
        "mad"
        , "annoyed"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤬"
      , "description": "face with symbols on mouth"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cursing_face"
      ]
      , "tags": [
        "foul"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "😈"
      , "description": "smiling face with horns"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smiling_imp"
      ]
      , "tags": [
        "devil"
        , "evil"
        , "horns"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👿"
      , "description": "angry face with horns"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "imp"
      ]
      , "tags": [
        "angry"
        , "devil"
        , "evil"
        , "horns"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💀"
      , "description": "skull"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "skull"
      ]
      , "tags": [
        "dead"
        , "danger"
        , "poison"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☠️"
      , "description": "skull and crossbones"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "skull_and_crossbones"
      ]
      , "tags": [
        "danger"
        , "pirate"
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💩"
      , "description": "pile of poo"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hankey"
        , "poop"
        , "shit"
      ]
      , "tags": [
        "crap"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤡"
      , "description": "clown face"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "clown_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "👹"
      , "description": "ogre"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "japanese_ogre"
      ]
      , "tags": [
        "monster"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👺"
      , "description": "goblin"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "japanese_goblin"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👻"
      , "description": "ghost"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "ghost"
      ]
      , "tags": [
        "halloween"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👽"
      , "description": "alien"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "alien"
      ]
      , "tags": [
        "ufo"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👾"
      , "description": "alien monster"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "space_invader"
      ]
      , "tags": [
        "game"
        , "retro"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤖"
      , "description": "robot"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "robot"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "😺"
      , "description": "grinning cat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smiley_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😸"
      , "description": "grinning cat with smiling eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smile_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😹"
      , "description": "cat with tears of joy"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "joy_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😻"
      , "description": "smiling cat with heart-eyes"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heart_eyes_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😼"
      , "description": "cat with wry smile"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "smirk_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😽"
      , "description": "kissing cat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kissing_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙀"
      , "description": "weary cat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "scream_cat"
      ]
      , "tags": [
        "horror"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😿"
      , "description": "crying cat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "crying_cat_face"
      ]
      , "tags": [
        "sad"
        , "tear"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "😾"
      , "description": "pouting cat"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "pouting_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙈"
      , "description": "see-no-evil monkey"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "see_no_evil"
      ]
      , "tags": [
        "monkey"
        , "blind"
        , "ignore"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙉"
      , "description": "hear-no-evil monkey"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hear_no_evil"
      ]
      , "tags": [
        "monkey"
        , "deaf"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🙊"
      , "description": "speak-no-evil monkey"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "speak_no_evil"
      ]
      , "tags": [
        "monkey"
        , "mute"
        , "hush"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💋"
      , "description": "kiss mark"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "kiss"
      ]
      , "tags": [
        "lipstick"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💌"
      , "description": "love letter"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "love_letter"
      ]
      , "tags": [
        "email"
        , "envelope"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💘"
      , "description": "heart with arrow"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "cupid"
      ]
      , "tags": [
        "love"
        , "heart"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💝"
      , "description": "heart with ribbon"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "gift_heart"
      ]
      , "tags": [
        "chocolates"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💖"
      , "description": "sparkling heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sparkling_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💗"
      , "description": "growing heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heartpulse"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💓"
      , "description": "beating heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heartbeat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💞"
      , "description": "revolving hearts"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "revolving_hearts"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💕"
      , "description": "two hearts"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "two_hearts"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💟"
      , "description": "heart decoration"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heart_decoration"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❣️"
      , "description": "heart exclamation"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heavy_heart_exclamation"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💔"
      , "description": "broken heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "broken_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❤️‍🔥"
      , "description": "heart on fire"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heart_on_fire"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "❤️‍🩹"
      , "description": "mending heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "mending_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "❤️"
      , "description": "red heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "heart"
      ]
      , "tags": [
        "love"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧡"
      , "description": "orange heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "orange_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "💛"
      , "description": "yellow heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "yellow_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💚"
      , "description": "green heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "green_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💙"
      , "description": "blue heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "blue_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💜"
      , "description": "purple heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "purple_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤎"
      , "description": "brown heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "brown_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🖤"
      , "description": "black heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "black_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🤍"
      , "description": "white heart"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "white_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "💯"
      , "description": "hundred points"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "100"
      ]
      , "tags": [
        "score"
        , "perfect"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💢"
      , "description": "anger symbol"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "anger"
      ]
      , "tags": [
        "angry"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💥"
      , "description": "collision"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "boom"
        , "collision"
      ]
      , "tags": [
        "explode"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💫"
      , "description": "dizzy"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "dizzy"
      ]
      , "tags": [
        "star"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💦"
      , "description": "sweat droplets"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "sweat_drops"
      ]
      , "tags": [
        "water"
        , "workout"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💨"
      , "description": "dashing away"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "dash"
      ]
      , "tags": [
        "wind"
        , "blow"
        , "fast"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕳️"
      , "description": "hole"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "hole"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💣"
      , "description": "bomb"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "bomb"
      ]
      , "tags": [
        "boom"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💬"
      , "description": "speech balloon"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "speech_balloon"
      ]
      , "tags": [
        "comment"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👁️‍🗨️"
      , "description": "eye in speech bubble"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "eye_speech_bubble"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🗨️"
      , "description": "left speech bubble"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "left_speech_bubble"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🗯️"
      , "description": "right anger bubble"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "right_anger_bubble"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💭"
      , "description": "thought balloon"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "thought_balloon"
      ]
      , "tags": [
        "thinking"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💤"
      , "description": "zzz"
      , "category": "Smileys & Emotion"
      , "aliases": [
        "zzz"
      ]
      , "tags": [
        "sleeping"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👋"
      , "description": "waving hand"
      , "category": "People & Body"
      , "aliases": [
        "wave"
      ]
      , "tags": [
        "goodbye"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤚"
      , "description": "raised back of hand"
      , "category": "People & Body"
      , "aliases": [
        "raised_back_of_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🖐️"
      , "description": "hand with fingers splayed"
      , "category": "People & Body"
      , "aliases": [
        "raised_hand_with_fingers_splayed"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "✋"
      , "description": "raised hand"
      , "category": "People & Body"
      , "aliases": [
        "hand"
        , "raised_hand"
      ]
      , "tags": [
        "highfive"
        , "stop"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🖖"
      , "description": "vulcan salute"
      , "category": "People & Body"
      , "aliases": [
        "vulcan_salute"
      ]
      , "tags": [
        "prosper"
        , "spock"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "8.3"
      , "skin_tones": true
    }
    , {
      "emoji": "🫱"
      , "description": "rightwards hand"
      , "category": "People & Body"
      , "aliases": [
        "rightwards_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🫲"
      , "description": "leftwards hand"
      , "category": "People & Body"
      , "aliases": [
        "leftwards_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🫳"
      , "description": "palm down hand"
      , "category": "People & Body"
      , "aliases": [
        "palm_down_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🫴"
      , "description": "palm up hand"
      , "category": "People & Body"
      , "aliases": [
        "palm_up_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "👌"
      , "description": "OK hand"
      , "category": "People & Body"
      , "aliases": [
        "ok_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤌"
      , "description": "pinched fingers"
      , "category": "People & Body"
      , "aliases": [
        "pinched_fingers"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤏"
      , "description": "pinching hand"
      , "category": "People & Body"
      , "aliases": [
        "pinching_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "✌️"
      , "description": "victory hand"
      , "category": "People & Body"
      , "aliases": [
        "v"
      ]
      , "tags": [
        "victory"
        , "peace"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤞"
      , "description": "crossed fingers"
      , "category": "People & Body"
      , "aliases": [
        "crossed_fingers"
      ]
      , "tags": [
        "luck"
        , "hopeful"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🫰"
      , "description": "hand with index finger and thumb crossed"
      , "category": "People & Body"
      , "aliases": [
        "hand_with_index_finger_and_thumb_crossed"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🤟"
      , "description": "love-you gesture"
      , "category": "People & Body"
      , "aliases": [
        "love_you_gesture"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤘"
      , "description": "sign of the horns"
      , "category": "People & Body"
      , "aliases": [
        "metal"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤙"
      , "description": "call me hand"
      , "category": "People & Body"
      , "aliases": [
        "call_me_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👈"
      , "description": "backhand index pointing left"
      , "category": "People & Body"
      , "aliases": [
        "point_left"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👉"
      , "description": "backhand index pointing right"
      , "category": "People & Body"
      , "aliases": [
        "point_right"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👆"
      , "description": "backhand index pointing up"
      , "category": "People & Body"
      , "aliases": [
        "point_up_2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🖕"
      , "description": "middle finger"
      , "category": "People & Body"
      , "aliases": [
        "middle_finger"
        , "fu"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👇"
      , "description": "backhand index pointing down"
      , "category": "People & Body"
      , "aliases": [
        "point_down"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "☝️"
      , "description": "index pointing up"
      , "category": "People & Body"
      , "aliases": [
        "point_up"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🫵"
      , "description": "index pointing at the viewer"
      , "category": "People & Body"
      , "aliases": [
        "index_pointing_at_the_viewer"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "👍"
      , "description": "thumbs up"
      , "category": "People & Body"
      , "aliases": [
        "+1"
        , "thumbsup"
      ]
      , "tags": [
        "approve"
        , "ok"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👎"
      , "description": "thumbs down"
      , "category": "People & Body"
      , "aliases": [
        "-1"
        , "thumbsdown"
      ]
      , "tags": [
        "disapprove"
        , "bury"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "✊"
      , "description": "raised fist"
      , "category": "People & Body"
      , "aliases": [
        "fist_raised"
        , "fist"
      ]
      , "tags": [
        "power"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👊"
      , "description": "oncoming fist"
      , "category": "People & Body"
      , "aliases": [
        "fist_oncoming"
        , "facepunch"
        , "punch"
      ]
      , "tags": [
        "attack"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤛"
      , "description": "left-facing fist"
      , "category": "People & Body"
      , "aliases": [
        "fist_left"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤜"
      , "description": "right-facing fist"
      , "category": "People & Body"
      , "aliases": [
        "fist_right"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👏"
      , "description": "clapping hands"
      , "category": "People & Body"
      , "aliases": [
        "clap"
      ]
      , "tags": [
        "praise"
        , "applause"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙌"
      , "description": "raising hands"
      , "category": "People & Body"
      , "aliases": [
        "raised_hands"
      ]
      , "tags": [
        "hooray"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🫶"
      , "description": "heart hands"
      , "category": "People & Body"
      , "aliases": [
        "heart_hands"
      ]
      , "tags": [
        "love"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "👐"
      , "description": "open hands"
      , "category": "People & Body"
      , "aliases": [
        "open_hands"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤲"
      , "description": "palms up together"
      , "category": "People & Body"
      , "aliases": [
        "palms_up_together"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤝"
      , "description": "handshake"
      , "category": "People & Body"
      , "aliases": [
        "handshake"
      ]
      , "tags": [
        "deal"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🙏"
      , "description": "folded hands"
      , "category": "People & Body"
      , "aliases": [
        "pray"
      ]
      , "tags": [
        "please"
        , "hope"
        , "wish"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "✍️"
      , "description": "writing hand"
      , "category": "People & Body"
      , "aliases": [
        "writing_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "💅"
      , "description": "nail polish"
      , "category": "People & Body"
      , "aliases": [
        "nail_care"
      ]
      , "tags": [
        "beauty"
        , "manicure"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤳"
      , "description": "selfie"
      , "category": "People & Body"
      , "aliases": [
        "selfie"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "💪"
      , "description": "flexed biceps"
      , "category": "People & Body"
      , "aliases": [
        "muscle"
      ]
      , "tags": [
        "flex"
        , "bicep"
        , "strong"
        , "workout"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🦾"
      , "description": "mechanical arm"
      , "category": "People & Body"
      , "aliases": [
        "mechanical_arm"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦿"
      , "description": "mechanical leg"
      , "category": "People & Body"
      , "aliases": [
        "mechanical_leg"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦵"
      , "description": "leg"
      , "category": "People & Body"
      , "aliases": [
        "leg"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦶"
      , "description": "foot"
      , "category": "People & Body"
      , "aliases": [
        "foot"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👂"
      , "description": "ear"
      , "category": "People & Body"
      , "aliases": [
        "ear"
      ]
      , "tags": [
        "hear"
        , "sound"
        , "listen"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🦻"
      , "description": "ear with hearing aid"
      , "category": "People & Body"
      , "aliases": [
        "ear_with_hearing_aid"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👃"
      , "description": "nose"
      , "category": "People & Body"
      , "aliases": [
        "nose"
      ]
      , "tags": [
        "smell"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧠"
      , "description": "brain"
      , "category": "People & Body"
      , "aliases": [
        "brain"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🫀"
      , "description": "anatomical heart"
      , "category": "People & Body"
      , "aliases": [
        "anatomical_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🫁"
      , "description": "lungs"
      , "category": "People & Body"
      , "aliases": [
        "lungs"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦷"
      , "description": "tooth"
      , "category": "People & Body"
      , "aliases": [
        "tooth"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦴"
      , "description": "bone"
      , "category": "People & Body"
      , "aliases": [
        "bone"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "👀"
      , "description": "eyes"
      , "category": "People & Body"
      , "aliases": [
        "eyes"
      ]
      , "tags": [
        "look"
        , "see"
        , "watch"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👁️"
      , "description": "eye"
      , "category": "People & Body"
      , "aliases": [
        "eye"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "👅"
      , "description": "tongue"
      , "category": "People & Body"
      , "aliases": [
        "tongue"
      ]
      , "tags": [
        "taste"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👄"
      , "description": "mouth"
      , "category": "People & Body"
      , "aliases": [
        "lips"
      ]
      , "tags": [
        "kiss"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫦"
      , "description": "biting lip"
      , "category": "People & Body"
      , "aliases": [
        "biting_lip"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "👶"
      , "description": "baby"
      , "category": "People & Body"
      , "aliases": [
        "baby"
      ]
      , "tags": [
        "child"
        , "newborn"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧒"
      , "description": "child"
      , "category": "People & Body"
      , "aliases": [
        "child"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👦"
      , "description": "boy"
      , "category": "People & Body"
      , "aliases": [
        "boy"
      ]
      , "tags": [
        "child"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👧"
      , "description": "girl"
      , "category": "People & Body"
      , "aliases": [
        "girl"
      ]
      , "tags": [
        "child"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑"
      , "description": "person"
      , "category": "People & Body"
      , "aliases": [
        "adult"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👱"
      , "description": "person: blond hair"
      , "category": "People & Body"
      , "aliases": [
        "blond_haired_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👨"
      , "description": "man"
      , "category": "People & Body"
      , "aliases": [
        "man"
      ]
      , "tags": [
        "mustache"
        , "father"
        , "dad"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧔"
      , "description": "person: beard"
      , "category": "People & Body"
      , "aliases": [
        "bearded_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧔‍♂️"
      , "description": "man: beard"
      , "category": "People & Body"
      , "aliases": [
        "man_beard"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧔‍♀️"
      , "description": "woman: beard"
      , "category": "People & Body"
      , "aliases": [
        "woman_beard"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.1"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦰"
      , "description": "man: red hair"
      , "category": "People & Body"
      , "aliases": [
        "red_haired_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦱"
      , "description": "man: curly hair"
      , "category": "People & Body"
      , "aliases": [
        "curly_haired_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦳"
      , "description": "man: white hair"
      , "category": "People & Body"
      , "aliases": [
        "white_haired_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦲"
      , "description": "man: bald"
      , "category": "People & Body"
      , "aliases": [
        "bald_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👩"
      , "description": "woman"
      , "category": "People & Body"
      , "aliases": [
        "woman"
      ]
      , "tags": [
        "girls"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦰"
      , "description": "woman: red hair"
      , "category": "People & Body"
      , "aliases": [
        "red_haired_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦰"
      , "description": "person: red hair"
      , "category": "People & Body"
      , "aliases": [
        "person_red_hair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦱"
      , "description": "woman: curly hair"
      , "category": "People & Body"
      , "aliases": [
        "curly_haired_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦱"
      , "description": "person: curly hair"
      , "category": "People & Body"
      , "aliases": [
        "person_curly_hair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦳"
      , "description": "woman: white hair"
      , "category": "People & Body"
      , "aliases": [
        "white_haired_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦳"
      , "description": "person: white hair"
      , "category": "People & Body"
      , "aliases": [
        "person_white_hair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦲"
      , "description": "woman: bald"
      , "category": "People & Body"
      , "aliases": [
        "bald_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦲"
      , "description": "person: bald"
      , "category": "People & Body"
      , "aliases": [
        "person_bald"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👱‍♀️"
      , "description": "woman: blond hair"
      , "category": "People & Body"
      , "aliases": [
        "blond_haired_woman"
        , "blonde_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👱‍♂️"
      , "description": "man: blond hair"
      , "category": "People & Body"
      , "aliases": [
        "blond_haired_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧓"
      , "description": "older person"
      , "category": "People & Body"
      , "aliases": [
        "older_adult"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👴"
      , "description": "old man"
      , "category": "People & Body"
      , "aliases": [
        "older_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👵"
      , "description": "old woman"
      , "category": "People & Body"
      , "aliases": [
        "older_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙍"
      , "description": "person frowning"
      , "category": "People & Body"
      , "aliases": [
        "frowning_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙍‍♂️"
      , "description": "man frowning"
      , "category": "People & Body"
      , "aliases": [
        "frowning_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙍‍♀️"
      , "description": "woman frowning"
      , "category": "People & Body"
      , "aliases": [
        "frowning_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🙎"
      , "description": "person pouting"
      , "category": "People & Body"
      , "aliases": [
        "pouting_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙎‍♂️"
      , "description": "man pouting"
      , "category": "People & Body"
      , "aliases": [
        "pouting_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙎‍♀️"
      , "description": "woman pouting"
      , "category": "People & Body"
      , "aliases": [
        "pouting_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🙅"
      , "description": "person gesturing NO"
      , "category": "People & Body"
      , "aliases": [
        "no_good"
      ]
      , "tags": [
        "stop"
        , "halt"
        , "denied"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙅‍♂️"
      , "description": "man gesturing NO"
      , "category": "People & Body"
      , "aliases": [
        "no_good_man"
        , "ng_man"
      ]
      , "tags": [
        "stop"
        , "halt"
        , "denied"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙅‍♀️"
      , "description": "woman gesturing NO"
      , "category": "People & Body"
      , "aliases": [
        "no_good_woman"
        , "ng_woman"
      ]
      , "tags": [
        "stop"
        , "halt"
        , "denied"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🙆"
      , "description": "person gesturing OK"
      , "category": "People & Body"
      , "aliases": [
        "ok_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙆‍♂️"
      , "description": "man gesturing OK"
      , "category": "People & Body"
      , "aliases": [
        "ok_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙆‍♀️"
      , "description": "woman gesturing OK"
      , "category": "People & Body"
      , "aliases": [
        "ok_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "💁"
      , "description": "person tipping hand"
      , "category": "People & Body"
      , "aliases": [
        "tipping_hand_person"
        , "information_desk_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💁‍♂️"
      , "description": "man tipping hand"
      , "category": "People & Body"
      , "aliases": [
        "tipping_hand_man"
        , "sassy_man"
      ]
      , "tags": [
        "information"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💁‍♀️"
      , "description": "woman tipping hand"
      , "category": "People & Body"
      , "aliases": [
        "tipping_hand_woman"
        , "sassy_woman"
      ]
      , "tags": [
        "information"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🙋"
      , "description": "person raising hand"
      , "category": "People & Body"
      , "aliases": [
        "raising_hand"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙋‍♂️"
      , "description": "man raising hand"
      , "category": "People & Body"
      , "aliases": [
        "raising_hand_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙋‍♀️"
      , "description": "woman raising hand"
      , "category": "People & Body"
      , "aliases": [
        "raising_hand_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧏"
      , "description": "deaf person"
      , "category": "People & Body"
      , "aliases": [
        "deaf_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧏‍♂️"
      , "description": "deaf man"
      , "category": "People & Body"
      , "aliases": [
        "deaf_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧏‍♀️"
      , "description": "deaf woman"
      , "category": "People & Body"
      , "aliases": [
        "deaf_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙇"
      , "description": "person bowing"
      , "category": "People & Body"
      , "aliases": [
        "bow"
      ]
      , "tags": [
        "respect"
        , "thanks"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🙇‍♂️"
      , "description": "man bowing"
      , "category": "People & Body"
      , "aliases": [
        "bowing_man"
      ]
      , "tags": [
        "respect"
        , "thanks"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🙇‍♀️"
      , "description": "woman bowing"
      , "category": "People & Body"
      , "aliases": [
        "bowing_woman"
      ]
      , "tags": [
        "respect"
        , "thanks"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤦"
      , "description": "person facepalming"
      , "category": "People & Body"
      , "aliases": [
        "facepalm"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤦‍♂️"
      , "description": "man facepalming"
      , "category": "People & Body"
      , "aliases": [
        "man_facepalming"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤦‍♀️"
      , "description": "woman facepalming"
      , "category": "People & Body"
      , "aliases": [
        "woman_facepalming"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤷"
      , "description": "person shrugging"
      , "category": "People & Body"
      , "aliases": [
        "shrug"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤷‍♂️"
      , "description": "man shrugging"
      , "category": "People & Body"
      , "aliases": [
        "man_shrugging"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤷‍♀️"
      , "description": "woman shrugging"
      , "category": "People & Body"
      , "aliases": [
        "woman_shrugging"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍⚕️"
      , "description": "health worker"
      , "category": "People & Body"
      , "aliases": [
        "health_worker"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍⚕️"
      , "description": "man health worker"
      , "category": "People & Body"
      , "aliases": [
        "man_health_worker"
      ]
      , "tags": [
        "doctor"
        , "nurse"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍⚕️"
      , "description": "woman health worker"
      , "category": "People & Body"
      , "aliases": [
        "woman_health_worker"
      ]
      , "tags": [
        "doctor"
        , "nurse"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🎓"
      , "description": "student"
      , "category": "People & Body"
      , "aliases": [
        "student"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🎓"
      , "description": "man student"
      , "category": "People & Body"
      , "aliases": [
        "man_student"
      ]
      , "tags": [
        "graduation"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🎓"
      , "description": "woman student"
      , "category": "People & Body"
      , "aliases": [
        "woman_student"
      ]
      , "tags": [
        "graduation"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🏫"
      , "description": "teacher"
      , "category": "People & Body"
      , "aliases": [
        "teacher"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🏫"
      , "description": "man teacher"
      , "category": "People & Body"
      , "aliases": [
        "man_teacher"
      ]
      , "tags": [
        "school"
        , "professor"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🏫"
      , "description": "woman teacher"
      , "category": "People & Body"
      , "aliases": [
        "woman_teacher"
      ]
      , "tags": [
        "school"
        , "professor"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍⚖️"
      , "description": "judge"
      , "category": "People & Body"
      , "aliases": [
        "judge"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍⚖️"
      , "description": "man judge"
      , "category": "People & Body"
      , "aliases": [
        "man_judge"
      ]
      , "tags": [
        "justice"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍⚖️"
      , "description": "woman judge"
      , "category": "People & Body"
      , "aliases": [
        "woman_judge"
      ]
      , "tags": [
        "justice"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🌾"
      , "description": "farmer"
      , "category": "People & Body"
      , "aliases": [
        "farmer"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🌾"
      , "description": "man farmer"
      , "category": "People & Body"
      , "aliases": [
        "man_farmer"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🌾"
      , "description": "woman farmer"
      , "category": "People & Body"
      , "aliases": [
        "woman_farmer"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🍳"
      , "description": "cook"
      , "category": "People & Body"
      , "aliases": [
        "cook"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🍳"
      , "description": "man cook"
      , "category": "People & Body"
      , "aliases": [
        "man_cook"
      ]
      , "tags": [
        "chef"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🍳"
      , "description": "woman cook"
      , "category": "People & Body"
      , "aliases": [
        "woman_cook"
      ]
      , "tags": [
        "chef"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🔧"
      , "description": "mechanic"
      , "category": "People & Body"
      , "aliases": [
        "mechanic"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🔧"
      , "description": "man mechanic"
      , "category": "People & Body"
      , "aliases": [
        "man_mechanic"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🔧"
      , "description": "woman mechanic"
      , "category": "People & Body"
      , "aliases": [
        "woman_mechanic"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🏭"
      , "description": "factory worker"
      , "category": "People & Body"
      , "aliases": [
        "factory_worker"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🏭"
      , "description": "man factory worker"
      , "category": "People & Body"
      , "aliases": [
        "man_factory_worker"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🏭"
      , "description": "woman factory worker"
      , "category": "People & Body"
      , "aliases": [
        "woman_factory_worker"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍💼"
      , "description": "office worker"
      , "category": "People & Body"
      , "aliases": [
        "office_worker"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍💼"
      , "description": "man office worker"
      , "category": "People & Body"
      , "aliases": [
        "man_office_worker"
      ]
      , "tags": [
        "business"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍💼"
      , "description": "woman office worker"
      , "category": "People & Body"
      , "aliases": [
        "woman_office_worker"
      ]
      , "tags": [
        "business"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🔬"
      , "description": "scientist"
      , "category": "People & Body"
      , "aliases": [
        "scientist"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🔬"
      , "description": "man scientist"
      , "category": "People & Body"
      , "aliases": [
        "man_scientist"
      ]
      , "tags": [
        "research"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🔬"
      , "description": "woman scientist"
      , "category": "People & Body"
      , "aliases": [
        "woman_scientist"
      ]
      , "tags": [
        "research"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍💻"
      , "description": "technologist"
      , "category": "People & Body"
      , "aliases": [
        "technologist"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍💻"
      , "description": "man technologist"
      , "category": "People & Body"
      , "aliases": [
        "man_technologist"
      ]
      , "tags": [
        "coder"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍💻"
      , "description": "woman technologist"
      , "category": "People & Body"
      , "aliases": [
        "woman_technologist"
      ]
      , "tags": [
        "coder"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🎤"
      , "description": "singer"
      , "category": "People & Body"
      , "aliases": [
        "singer"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🎤"
      , "description": "man singer"
      , "category": "People & Body"
      , "aliases": [
        "man_singer"
      ]
      , "tags": [
        "rockstar"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🎤"
      , "description": "woman singer"
      , "category": "People & Body"
      , "aliases": [
        "woman_singer"
      ]
      , "tags": [
        "rockstar"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🎨"
      , "description": "artist"
      , "category": "People & Body"
      , "aliases": [
        "artist"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🎨"
      , "description": "man artist"
      , "category": "People & Body"
      , "aliases": [
        "man_artist"
      ]
      , "tags": [
        "painter"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🎨"
      , "description": "woman artist"
      , "category": "People & Body"
      , "aliases": [
        "woman_artist"
      ]
      , "tags": [
        "painter"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍✈️"
      , "description": "pilot"
      , "category": "People & Body"
      , "aliases": [
        "pilot"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍✈️"
      , "description": "man pilot"
      , "category": "People & Body"
      , "aliases": [
        "man_pilot"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍✈️"
      , "description": "woman pilot"
      , "category": "People & Body"
      , "aliases": [
        "woman_pilot"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🚀"
      , "description": "astronaut"
      , "category": "People & Body"
      , "aliases": [
        "astronaut"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🚀"
      , "description": "man astronaut"
      , "category": "People & Body"
      , "aliases": [
        "man_astronaut"
      ]
      , "tags": [
        "space"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🚀"
      , "description": "woman astronaut"
      , "category": "People & Body"
      , "aliases": [
        "woman_astronaut"
      ]
      , "tags": [
        "space"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🚒"
      , "description": "firefighter"
      , "category": "People & Body"
      , "aliases": [
        "firefighter"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🚒"
      , "description": "man firefighter"
      , "category": "People & Body"
      , "aliases": [
        "man_firefighter"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🚒"
      , "description": "woman firefighter"
      , "category": "People & Body"
      , "aliases": [
        "woman_firefighter"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👮"
      , "description": "police officer"
      , "category": "People & Body"
      , "aliases": [
        "police_officer"
        , "cop"
      ]
      , "tags": [
        "law"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👮‍♂️"
      , "description": "man police officer"
      , "category": "People & Body"
      , "aliases": [
        "policeman"
      ]
      , "tags": [
        "law"
        , "cop"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👮‍♀️"
      , "description": "woman police officer"
      , "category": "People & Body"
      , "aliases": [
        "policewoman"
      ]
      , "tags": [
        "law"
        , "cop"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🕵️"
      , "description": "detective"
      , "category": "People & Body"
      , "aliases": [
        "detective"
      ]
      , "tags": [
        "sleuth"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🕵️‍♂️"
      , "description": "man detective"
      , "category": "People & Body"
      , "aliases": [
        "male_detective"
      ]
      , "tags": [
        "sleuth"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🕵️‍♀️"
      , "description": "woman detective"
      , "category": "People & Body"
      , "aliases": [
        "female_detective"
      ]
      , "tags": [
        "sleuth"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💂"
      , "description": "guard"
      , "category": "People & Body"
      , "aliases": [
        "guard"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💂‍♂️"
      , "description": "man guard"
      , "category": "People & Body"
      , "aliases": [
        "guardsman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "💂‍♀️"
      , "description": "woman guard"
      , "category": "People & Body"
      , "aliases": [
        "guardswoman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🥷"
      , "description": "ninja"
      , "category": "People & Body"
      , "aliases": [
        "ninja"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👷"
      , "description": "construction worker"
      , "category": "People & Body"
      , "aliases": [
        "construction_worker"
      ]
      , "tags": [
        "helmet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👷‍♂️"
      , "description": "man construction worker"
      , "category": "People & Body"
      , "aliases": [
        "construction_worker_man"
      ]
      , "tags": [
        "helmet"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👷‍♀️"
      , "description": "woman construction worker"
      , "category": "People & Body"
      , "aliases": [
        "construction_worker_woman"
      ]
      , "tags": [
        "helmet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🫅"
      , "description": "person with crown"
      , "category": "People & Body"
      , "aliases": [
        "person_with_crown"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🤴"
      , "description": "prince"
      , "category": "People & Body"
      , "aliases": [
        "prince"
      ]
      , "tags": [
        "crown"
        , "royal"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👸"
      , "description": "princess"
      , "category": "People & Body"
      , "aliases": [
        "princess"
      ]
      , "tags": [
        "crown"
        , "royal"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👳"
      , "description": "person wearing turban"
      , "category": "People & Body"
      , "aliases": [
        "person_with_turban"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👳‍♂️"
      , "description": "man wearing turban"
      , "category": "People & Body"
      , "aliases": [
        "man_with_turban"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👳‍♀️"
      , "description": "woman wearing turban"
      , "category": "People & Body"
      , "aliases": [
        "woman_with_turban"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👲"
      , "description": "person with skullcap"
      , "category": "People & Body"
      , "aliases": [
        "man_with_gua_pi_mao"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧕"
      , "description": "woman with headscarf"
      , "category": "People & Body"
      , "aliases": [
        "woman_with_headscarf"
      ]
      , "tags": [
        "hijab"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤵"
      , "description": "person in tuxedo"
      , "category": "People & Body"
      , "aliases": [
        "person_in_tuxedo"
      ]
      , "tags": [
        "groom"
        , "marriage"
        , "wedding"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤵‍♂️"
      , "description": "man in tuxedo"
      , "category": "People & Body"
      , "aliases": [
        "man_in_tuxedo"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤵‍♀️"
      , "description": "woman in tuxedo"
      , "category": "People & Body"
      , "aliases": [
        "woman_in_tuxedo"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👰"
      , "description": "person with veil"
      , "category": "People & Body"
      , "aliases": [
        "person_with_veil"
      ]
      , "tags": [
        "marriage"
        , "wedding"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👰‍♂️"
      , "description": "man with veil"
      , "category": "People & Body"
      , "aliases": [
        "man_with_veil"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👰‍♀️"
      , "description": "woman with veil"
      , "category": "People & Body"
      , "aliases": [
        "woman_with_veil"
        , "bride_with_veil"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤰"
      , "description": "pregnant woman"
      , "category": "People & Body"
      , "aliases": [
        "pregnant_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🫃"
      , "description": "pregnant man"
      , "category": "People & Body"
      , "aliases": [
        "pregnant_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🫄"
      , "description": "pregnant person"
      , "category": "People & Body"
      , "aliases": [
        "pregnant_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
      , "skin_tones": true
    }
    , {
      "emoji": "🤱"
      , "description": "breast-feeding"
      , "category": "People & Body"
      , "aliases": [
        "breast_feeding"
      ]
      , "tags": [
        "nursing"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🍼"
      , "description": "woman feeding baby"
      , "category": "People & Body"
      , "aliases": [
        "woman_feeding_baby"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🍼"
      , "description": "man feeding baby"
      , "category": "People & Body"
      , "aliases": [
        "man_feeding_baby"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🍼"
      , "description": "person feeding baby"
      , "category": "People & Body"
      , "aliases": [
        "person_feeding_baby"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👼"
      , "description": "baby angel"
      , "category": "People & Body"
      , "aliases": [
        "angel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🎅"
      , "description": "Santa Claus"
      , "category": "People & Body"
      , "aliases": [
        "santa"
      ]
      , "tags": [
        "christmas"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤶"
      , "description": "Mrs. Claus"
      , "category": "People & Body"
      , "aliases": [
        "mrs_claus"
      ]
      , "tags": [
        "santa"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🎄"
      , "description": "mx claus"
      , "category": "People & Body"
      , "aliases": [
        "mx_claus"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🦸"
      , "description": "superhero"
      , "category": "People & Body"
      , "aliases": [
        "superhero"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦸‍♂️"
      , "description": "man superhero"
      , "category": "People & Body"
      , "aliases": [
        "superhero_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦸‍♀️"
      , "description": "woman superhero"
      , "category": "People & Body"
      , "aliases": [
        "superhero_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦹"
      , "description": "supervillain"
      , "category": "People & Body"
      , "aliases": [
        "supervillain"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦹‍♂️"
      , "description": "man supervillain"
      , "category": "People & Body"
      , "aliases": [
        "supervillain_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🦹‍♀️"
      , "description": "woman supervillain"
      , "category": "People & Body"
      , "aliases": [
        "supervillain_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧙"
      , "description": "mage"
      , "category": "People & Body"
      , "aliases": [
        "mage"
      ]
      , "tags": [
        "wizard"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧙‍♂️"
      , "description": "man mage"
      , "category": "People & Body"
      , "aliases": [
        "mage_man"
      ]
      , "tags": [
        "wizard"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧙‍♀️"
      , "description": "woman mage"
      , "category": "People & Body"
      , "aliases": [
        "mage_woman"
      ]
      , "tags": [
        "wizard"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧚"
      , "description": "fairy"
      , "category": "People & Body"
      , "aliases": [
        "fairy"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧚‍♂️"
      , "description": "man fairy"
      , "category": "People & Body"
      , "aliases": [
        "fairy_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧚‍♀️"
      , "description": "woman fairy"
      , "category": "People & Body"
      , "aliases": [
        "fairy_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧛"
      , "description": "vampire"
      , "category": "People & Body"
      , "aliases": [
        "vampire"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧛‍♂️"
      , "description": "man vampire"
      , "category": "People & Body"
      , "aliases": [
        "vampire_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧛‍♀️"
      , "description": "woman vampire"
      , "category": "People & Body"
      , "aliases": [
        "vampire_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧜"
      , "description": "merperson"
      , "category": "People & Body"
      , "aliases": [
        "merperson"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧜‍♂️"
      , "description": "merman"
      , "category": "People & Body"
      , "aliases": [
        "merman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧜‍♀️"
      , "description": "mermaid"
      , "category": "People & Body"
      , "aliases": [
        "mermaid"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧝"
      , "description": "elf"
      , "category": "People & Body"
      , "aliases": [
        "elf"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧝‍♂️"
      , "description": "man elf"
      , "category": "People & Body"
      , "aliases": [
        "elf_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧝‍♀️"
      , "description": "woman elf"
      , "category": "People & Body"
      , "aliases": [
        "elf_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧞"
      , "description": "genie"
      , "category": "People & Body"
      , "aliases": [
        "genie"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧞‍♂️"
      , "description": "man genie"
      , "category": "People & Body"
      , "aliases": [
        "genie_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧞‍♀️"
      , "description": "woman genie"
      , "category": "People & Body"
      , "aliases": [
        "genie_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧟"
      , "description": "zombie"
      , "category": "People & Body"
      , "aliases": [
        "zombie"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧟‍♂️"
      , "description": "man zombie"
      , "category": "People & Body"
      , "aliases": [
        "zombie_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧟‍♀️"
      , "description": "woman zombie"
      , "category": "People & Body"
      , "aliases": [
        "zombie_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧌"
      , "description": "troll"
      , "category": "People & Body"
      , "aliases": [
        "troll"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "💆"
      , "description": "person getting massage"
      , "category": "People & Body"
      , "aliases": [
        "massage"
      ]
      , "tags": [
        "spa"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💆‍♂️"
      , "description": "man getting massage"
      , "category": "People & Body"
      , "aliases": [
        "massage_man"
      ]
      , "tags": [
        "spa"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💆‍♀️"
      , "description": "woman getting massage"
      , "category": "People & Body"
      , "aliases": [
        "massage_woman"
      ]
      , "tags": [
        "spa"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "💇"
      , "description": "person getting haircut"
      , "category": "People & Body"
      , "aliases": [
        "haircut"
      ]
      , "tags": [
        "beauty"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💇‍♂️"
      , "description": "man getting haircut"
      , "category": "People & Body"
      , "aliases": [
        "haircut_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💇‍♀️"
      , "description": "woman getting haircut"
      , "category": "People & Body"
      , "aliases": [
        "haircut_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🚶"
      , "description": "person walking"
      , "category": "People & Body"
      , "aliases": [
        "walking"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚶‍♂️"
      , "description": "man walking"
      , "category": "People & Body"
      , "aliases": [
        "walking_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🚶‍♀️"
      , "description": "woman walking"
      , "category": "People & Body"
      , "aliases": [
        "walking_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧍"
      , "description": "person standing"
      , "category": "People & Body"
      , "aliases": [
        "standing_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧍‍♂️"
      , "description": "man standing"
      , "category": "People & Body"
      , "aliases": [
        "standing_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧍‍♀️"
      , "description": "woman standing"
      , "category": "People & Body"
      , "aliases": [
        "standing_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧎"
      , "description": "person kneeling"
      , "category": "People & Body"
      , "aliases": [
        "kneeling_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧎‍♂️"
      , "description": "man kneeling"
      , "category": "People & Body"
      , "aliases": [
        "kneeling_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧎‍♀️"
      , "description": "woman kneeling"
      , "category": "People & Body"
      , "aliases": [
        "kneeling_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦯"
      , "description": "person with white cane"
      , "category": "People & Body"
      , "aliases": [
        "person_with_probing_cane"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦯"
      , "description": "man with white cane"
      , "category": "People & Body"
      , "aliases": [
        "man_with_probing_cane"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦯"
      , "description": "woman with white cane"
      , "category": "People & Body"
      , "aliases": [
        "woman_with_probing_cane"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦼"
      , "description": "person in motorized wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "person_in_motorized_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦼"
      , "description": "man in motorized wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "man_in_motorized_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦼"
      , "description": "woman in motorized wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "woman_in_motorized_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🦽"
      , "description": "person in manual wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "person_in_manual_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.1"
      , "ios_version": "13.2"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍🦽"
      , "description": "man in manual wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "man_in_manual_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍🦽"
      , "description": "woman in manual wheelchair"
      , "category": "People & Body"
      , "aliases": [
        "woman_in_manual_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏃"
      , "description": "person running"
      , "category": "People & Body"
      , "aliases": [
        "runner"
        , "running"
      ]
      , "tags": [
        "exercise"
        , "workout"
        , "marathon"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏃‍♂️"
      , "description": "man running"
      , "category": "People & Body"
      , "aliases": [
        "running_man"
      ]
      , "tags": [
        "exercise"
        , "workout"
        , "marathon"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏃‍♀️"
      , "description": "woman running"
      , "category": "People & Body"
      , "aliases": [
        "running_woman"
      ]
      , "tags": [
        "exercise"
        , "workout"
        , "marathon"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💃"
      , "description": "woman dancing"
      , "category": "People & Body"
      , "aliases": [
        "woman_dancing"
        , "dancer"
      ]
      , "tags": [
        "dress"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🕺"
      , "description": "man dancing"
      , "category": "People & Body"
      , "aliases": [
        "man_dancing"
      ]
      , "tags": [
        "dancer"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🕴️"
      , "description": "person in suit levitating"
      , "category": "People & Body"
      , "aliases": [
        "business_suit_levitating"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👯"
      , "description": "people with bunny ears"
      , "category": "People & Body"
      , "aliases": [
        "dancers"
      ]
      , "tags": [
        "bunny"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👯‍♂️"
      , "description": "men with bunny ears"
      , "category": "People & Body"
      , "aliases": [
        "dancing_men"
      ]
      , "tags": [
        "bunny"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👯‍♀️"
      , "description": "women with bunny ears"
      , "category": "People & Body"
      , "aliases": [
        "dancing_women"
      ]
      , "tags": [
        "bunny"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧖"
      , "description": "person in steamy room"
      , "category": "People & Body"
      , "aliases": [
        "sauna_person"
      ]
      , "tags": [
        "steamy"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧖‍♂️"
      , "description": "man in steamy room"
      , "category": "People & Body"
      , "aliases": [
        "sauna_man"
      ]
      , "tags": [
        "steamy"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧖‍♀️"
      , "description": "woman in steamy room"
      , "category": "People & Body"
      , "aliases": [
        "sauna_woman"
      ]
      , "tags": [
        "steamy"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧗"
      , "description": "person climbing"
      , "category": "People & Body"
      , "aliases": [
        "climbing"
      ]
      , "tags": [
        "bouldering"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧗‍♂️"
      , "description": "man climbing"
      , "category": "People & Body"
      , "aliases": [
        "climbing_man"
      ]
      , "tags": [
        "bouldering"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧗‍♀️"
      , "description": "woman climbing"
      , "category": "People & Body"
      , "aliases": [
        "climbing_woman"
      ]
      , "tags": [
        "bouldering"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤺"
      , "description": "person fencing"
      , "category": "People & Body"
      , "aliases": [
        "person_fencing"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🏇"
      , "description": "horse racing"
      , "category": "People & Body"
      , "aliases": [
        "horse_racing"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "⛷️"
      , "description": "skier"
      , "category": "People & Body"
      , "aliases": [
        "skier"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏂"
      , "description": "snowboarder"
      , "category": "People & Body"
      , "aliases": [
        "snowboarder"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏌️"
      , "description": "person golfing"
      , "category": "People & Body"
      , "aliases": [
        "golfing"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏌️‍♂️"
      , "description": "man golfing"
      , "category": "People & Body"
      , "aliases": [
        "golfing_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏌️‍♀️"
      , "description": "woman golfing"
      , "category": "People & Body"
      , "aliases": [
        "golfing_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏄"
      , "description": "person surfing"
      , "category": "People & Body"
      , "aliases": [
        "surfer"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏄‍♂️"
      , "description": "man surfing"
      , "category": "People & Body"
      , "aliases": [
        "surfing_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏄‍♀️"
      , "description": "woman surfing"
      , "category": "People & Body"
      , "aliases": [
        "surfing_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚣"
      , "description": "person rowing boat"
      , "category": "People & Body"
      , "aliases": [
        "rowboat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚣‍♂️"
      , "description": "man rowing boat"
      , "category": "People & Body"
      , "aliases": [
        "rowing_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🚣‍♀️"
      , "description": "woman rowing boat"
      , "category": "People & Body"
      , "aliases": [
        "rowing_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏊"
      , "description": "person swimming"
      , "category": "People & Body"
      , "aliases": [
        "swimmer"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏊‍♂️"
      , "description": "man swimming"
      , "category": "People & Body"
      , "aliases": [
        "swimming_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏊‍♀️"
      , "description": "woman swimming"
      , "category": "People & Body"
      , "aliases": [
        "swimming_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "⛹️"
      , "description": "person bouncing ball"
      , "category": "People & Body"
      , "aliases": [
        "bouncing_ball_person"
      ]
      , "tags": [
        "basketball"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "⛹️‍♂️"
      , "description": "man bouncing ball"
      , "category": "People & Body"
      , "aliases": [
        "bouncing_ball_man"
        , "basketball_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "⛹️‍♀️"
      , "description": "woman bouncing ball"
      , "category": "People & Body"
      , "aliases": [
        "bouncing_ball_woman"
        , "basketball_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🏋️"
      , "description": "person lifting weights"
      , "category": "People & Body"
      , "aliases": [
        "weight_lifting"
      ]
      , "tags": [
        "gym"
        , "workout"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏋️‍♂️"
      , "description": "man lifting weights"
      , "category": "People & Body"
      , "aliases": [
        "weight_lifting_man"
      ]
      , "tags": [
        "gym"
        , "workout"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🏋️‍♀️"
      , "description": "woman lifting weights"
      , "category": "People & Body"
      , "aliases": [
        "weight_lifting_woman"
      ]
      , "tags": [
        "gym"
        , "workout"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚴"
      , "description": "person biking"
      , "category": "People & Body"
      , "aliases": [
        "bicyclist"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚴‍♂️"
      , "description": "man biking"
      , "category": "People & Body"
      , "aliases": [
        "biking_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🚴‍♀️"
      , "description": "woman biking"
      , "category": "People & Body"
      , "aliases": [
        "biking_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚵"
      , "description": "person mountain biking"
      , "category": "People & Body"
      , "aliases": [
        "mountain_bicyclist"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🚵‍♂️"
      , "description": "man mountain biking"
      , "category": "People & Body"
      , "aliases": [
        "mountain_biking_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🚵‍♀️"
      , "description": "woman mountain biking"
      , "category": "People & Body"
      , "aliases": [
        "mountain_biking_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🤸"
      , "description": "person cartwheeling"
      , "category": "People & Body"
      , "aliases": [
        "cartwheeling"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤸‍♂️"
      , "description": "man cartwheeling"
      , "category": "People & Body"
      , "aliases": [
        "man_cartwheeling"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤸‍♀️"
      , "description": "woman cartwheeling"
      , "category": "People & Body"
      , "aliases": [
        "woman_cartwheeling"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤼"
      , "description": "people wrestling"
      , "category": "People & Body"
      , "aliases": [
        "wrestling"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🤼‍♂️"
      , "description": "men wrestling"
      , "category": "People & Body"
      , "aliases": [
        "men_wrestling"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🤼‍♀️"
      , "description": "women wrestling"
      , "category": "People & Body"
      , "aliases": [
        "women_wrestling"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🤽"
      , "description": "person playing water polo"
      , "category": "People & Body"
      , "aliases": [
        "water_polo"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤽‍♂️"
      , "description": "man playing water polo"
      , "category": "People & Body"
      , "aliases": [
        "man_playing_water_polo"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤽‍♀️"
      , "description": "woman playing water polo"
      , "category": "People & Body"
      , "aliases": [
        "woman_playing_water_polo"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤾"
      , "description": "person playing handball"
      , "category": "People & Body"
      , "aliases": [
        "handball_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤾‍♂️"
      , "description": "man playing handball"
      , "category": "People & Body"
      , "aliases": [
        "man_playing_handball"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤾‍♀️"
      , "description": "woman playing handball"
      , "category": "People & Body"
      , "aliases": [
        "woman_playing_handball"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤹"
      , "description": "person juggling"
      , "category": "People & Body"
      , "aliases": [
        "juggling_person"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🤹‍♂️"
      , "description": "man juggling"
      , "category": "People & Body"
      , "aliases": [
        "man_juggling"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🤹‍♀️"
      , "description": "woman juggling"
      , "category": "People & Body"
      , "aliases": [
        "woman_juggling"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
      , "skin_tones": true
    }
    , {
      "emoji": "🧘"
      , "description": "person in lotus position"
      , "category": "People & Body"
      , "aliases": [
        "lotus_position"
      ]
      , "tags": [
        "meditation"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧘‍♂️"
      , "description": "man in lotus position"
      , "category": "People & Body"
      , "aliases": [
        "lotus_position_man"
      ]
      , "tags": [
        "meditation"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧘‍♀️"
      , "description": "woman in lotus position"
      , "category": "People & Body"
      , "aliases": [
        "lotus_position_woman"
      ]
      , "tags": [
        "meditation"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🛀"
      , "description": "person taking bath"
      , "category": "People & Body"
      , "aliases": [
        "bath"
      ]
      , "tags": [
        "shower"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "🛌"
      , "description": "person in bed"
      , "category": "People & Body"
      , "aliases": [
        "sleeping_bed"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
      , "skin_tones": true
    }
    , {
      "emoji": "🧑‍🤝‍🧑"
      , "description": "people holding hands"
      , "category": "People & Body"
      , "aliases": [
        "people_holding_hands"
      ]
      , "tags": [
        "couple"
        , "date"
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
      , "skin_tones": false
    }
    , {
      "emoji": "👭"
      , "description": "women holding hands"
      , "category": "People & Body"
      , "aliases": [
        "two_women_holding_hands"
      ]
      , "tags": [
        "couple"
        , "date"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👫"
      , "description": "woman and man holding hands"
      , "category": "People & Body"
      , "aliases": [
        "couple"
      ]
      , "tags": [
        "date"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👬"
      , "description": "men holding hands"
      , "category": "People & Body"
      , "aliases": [
        "two_men_holding_hands"
      ]
      , "tags": [
        "couple"
        , "date"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "💏"
      , "description": "kiss"
      , "category": "People & Body"
      , "aliases": [
        "couplekiss"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍❤️‍💋‍👨"
      , "description": "kiss: woman, man"
      , "category": "People & Body"
      , "aliases": [
        "couplekiss_man_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍❤️‍💋‍👨"
      , "description": "kiss: man, man"
      , "category": "People & Body"
      , "aliases": [
        "couplekiss_man_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍❤️‍💋‍👩"
      , "description": "kiss: woman, woman"
      , "category": "People & Body"
      , "aliases": [
        "couplekiss_woman_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
      , "skin_tones": true
    }
    , {
      "emoji": "💑"
      , "description": "couple with heart"
      , "category": "People & Body"
      , "aliases": [
        "couple_with_heart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍❤️‍👨"
      , "description": "couple with heart: woman, man"
      , "category": "People & Body"
      , "aliases": [
        "couple_with_heart_woman_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
      , "skin_tones": true
    }
    , {
      "emoji": "👨‍❤️‍👨"
      , "description": "couple with heart: man, man"
      , "category": "People & Body"
      , "aliases": [
        "couple_with_heart_man_man"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
      , "skin_tones": true
    }
    , {
      "emoji": "👩‍❤️‍👩"
      , "description": "couple with heart: woman, woman"
      , "category": "People & Body"
      , "aliases": [
        "couple_with_heart_woman_woman"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
      , "skin_tones": true
    }
    , {
      "emoji": "👪"
      , "description": "family"
      , "category": "People & Body"
      , "aliases": [
        "family"
      ]
      , "tags": [
        "home"
        , "parents"
        , "child"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👨‍👩‍👦"
      , "description": "family: man, woman, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_woman_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "👨‍👩‍👧"
      , "description": "family: man, woman, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_woman_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👩‍👧‍👦"
      , "description": "family: man, woman, girl, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_woman_girl_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👩‍👦‍👦"
      , "description": "family: man, woman, boy, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_woman_boy_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👩‍👧‍👧"
      , "description": "family: man, woman, girl, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_woman_girl_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👨‍👦"
      , "description": "family: man, man, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_man_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👨‍👧"
      , "description": "family: man, man, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_man_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👨‍👧‍👦"
      , "description": "family: man, man, girl, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_man_girl_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👨‍👦‍👦"
      , "description": "family: man, man, boy, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_man_boy_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👨‍👧‍👧"
      , "description": "family: man, man, girl, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_man_girl_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👩‍👩‍👦"
      , "description": "family: woman, woman, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_woman_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👩‍👩‍👧"
      , "description": "family: woman, woman, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_woman_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👩‍👩‍👧‍👦"
      , "description": "family: woman, woman, girl, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_woman_girl_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👩‍👩‍👦‍👦"
      , "description": "family: woman, woman, boy, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_woman_boy_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👩‍👩‍👧‍👧"
      , "description": "family: woman, woman, girl, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_woman_girl_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "8.3"
    }
    , {
      "emoji": "👨‍👦"
      , "description": "family: man, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👨‍👦‍👦"
      , "description": "family: man, boy, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_boy_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👨‍👧"
      , "description": "family: man, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👨‍👧‍👦"
      , "description": "family: man, girl, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_man_girl_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👨‍👧‍👧"
      , "description": "family: man, girl, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_man_girl_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👩‍👦"
      , "description": "family: woman, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👩‍👦‍👦"
      , "description": "family: woman, boy, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_boy_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👩‍👧"
      , "description": "family: woman, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👩‍👧‍👦"
      , "description": "family: woman, girl, boy"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_girl_boy"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "👩‍👧‍👧"
      , "description": "family: woman, girl, girl"
      , "category": "People & Body"
      , "aliases": [
        "family_woman_girl_girl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "🗣️"
      , "description": "speaking head"
      , "category": "People & Body"
      , "aliases": [
        "speaking_head"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "👤"
      , "description": "bust in silhouette"
      , "category": "People & Body"
      , "aliases": [
        "bust_in_silhouette"
      ]
      , "tags": [
        "user"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👥"
      , "description": "busts in silhouette"
      , "category": "People & Body"
      , "aliases": [
        "busts_in_silhouette"
      ]
      , "tags": [
        "users"
        , "group"
        , "team"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫂"
      , "description": "people hugging"
      , "category": "People & Body"
      , "aliases": [
        "people_hugging"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "👣"
      , "description": "footprints"
      , "category": "People & Body"
      , "aliases": [
        "footprints"
      ]
      , "tags": [
        "feet"
        , "tracks"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐵"
      , "description": "monkey face"
      , "category": "Animals & Nature"
      , "aliases": [
        "monkey_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐒"
      , "description": "monkey"
      , "category": "Animals & Nature"
      , "aliases": [
        "monkey"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦍"
      , "description": "gorilla"
      , "category": "Animals & Nature"
      , "aliases": [
        "gorilla"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦧"
      , "description": "orangutan"
      , "category": "Animals & Nature"
      , "aliases": [
        "orangutan"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🐶"
      , "description": "dog face"
      , "category": "Animals & Nature"
      , "aliases": [
        "dog"
      ]
      , "tags": [
        "pet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐕"
      , "description": "dog"
      , "category": "Animals & Nature"
      , "aliases": [
        "dog2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦮"
      , "description": "guide dog"
      , "category": "Animals & Nature"
      , "aliases": [
        "guide_dog"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🐕‍🦺"
      , "description": "service dog"
      , "category": "Animals & Nature"
      , "aliases": [
        "service_dog"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🐩"
      , "description": "poodle"
      , "category": "Animals & Nature"
      , "aliases": [
        "poodle"
      ]
      , "tags": [
        "dog"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐺"
      , "description": "wolf"
      , "category": "Animals & Nature"
      , "aliases": [
        "wolf"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦊"
      , "description": "fox"
      , "category": "Animals & Nature"
      , "aliases": [
        "fox_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦝"
      , "description": "raccoon"
      , "category": "Animals & Nature"
      , "aliases": [
        "raccoon"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐱"
      , "description": "cat face"
      , "category": "Animals & Nature"
      , "aliases": [
        "cat"
      ]
      , "tags": [
        "pet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐈"
      , "description": "cat"
      , "category": "Animals & Nature"
      , "aliases": [
        "cat2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐈‍⬛"
      , "description": "black cat"
      , "category": "Animals & Nature"
      , "aliases": [
        "black_cat"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦁"
      , "description": "lion"
      , "category": "Animals & Nature"
      , "aliases": [
        "lion"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🐯"
      , "description": "tiger face"
      , "category": "Animals & Nature"
      , "aliases": [
        "tiger"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐅"
      , "description": "tiger"
      , "category": "Animals & Nature"
      , "aliases": [
        "tiger2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐆"
      , "description": "leopard"
      , "category": "Animals & Nature"
      , "aliases": [
        "leopard"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐴"
      , "description": "horse face"
      , "category": "Animals & Nature"
      , "aliases": [
        "horse"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐎"
      , "description": "horse"
      , "category": "Animals & Nature"
      , "aliases": [
        "racehorse"
      ]
      , "tags": [
        "speed"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦄"
      , "description": "unicorn"
      , "category": "Animals & Nature"
      , "aliases": [
        "unicorn"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦓"
      , "description": "zebra"
      , "category": "Animals & Nature"
      , "aliases": [
        "zebra"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦌"
      , "description": "deer"
      , "category": "Animals & Nature"
      , "aliases": [
        "deer"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦬"
      , "description": "bison"
      , "category": "Animals & Nature"
      , "aliases": [
        "bison"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🐮"
      , "description": "cow face"
      , "category": "Animals & Nature"
      , "aliases": [
        "cow"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐂"
      , "description": "ox"
      , "category": "Animals & Nature"
      , "aliases": [
        "ox"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐃"
      , "description": "water buffalo"
      , "category": "Animals & Nature"
      , "aliases": [
        "water_buffalo"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐄"
      , "description": "cow"
      , "category": "Animals & Nature"
      , "aliases": [
        "cow2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐷"
      , "description": "pig face"
      , "category": "Animals & Nature"
      , "aliases": [
        "pig"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐖"
      , "description": "pig"
      , "category": "Animals & Nature"
      , "aliases": [
        "pig2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐗"
      , "description": "boar"
      , "category": "Animals & Nature"
      , "aliases": [
        "boar"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐽"
      , "description": "pig nose"
      , "category": "Animals & Nature"
      , "aliases": [
        "pig_nose"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐏"
      , "description": "ram"
      , "category": "Animals & Nature"
      , "aliases": [
        "ram"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐑"
      , "description": "ewe"
      , "category": "Animals & Nature"
      , "aliases": [
        "sheep"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐐"
      , "description": "goat"
      , "category": "Animals & Nature"
      , "aliases": [
        "goat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐪"
      , "description": "camel"
      , "category": "Animals & Nature"
      , "aliases": [
        "dromedary_camel"
      ]
      , "tags": [
        "desert"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐫"
      , "description": "two-hump camel"
      , "category": "Animals & Nature"
      , "aliases": [
        "camel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦙"
      , "description": "llama"
      , "category": "Animals & Nature"
      , "aliases": [
        "llama"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦒"
      , "description": "giraffe"
      , "category": "Animals & Nature"
      , "aliases": [
        "giraffe"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐘"
      , "description": "elephant"
      , "category": "Animals & Nature"
      , "aliases": [
        "elephant"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦣"
      , "description": "mammoth"
      , "category": "Animals & Nature"
      , "aliases": [
        "mammoth"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦏"
      , "description": "rhinoceros"
      , "category": "Animals & Nature"
      , "aliases": [
        "rhinoceros"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦛"
      , "description": "hippopotamus"
      , "category": "Animals & Nature"
      , "aliases": [
        "hippopotamus"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐭"
      , "description": "mouse face"
      , "category": "Animals & Nature"
      , "aliases": [
        "mouse"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐁"
      , "description": "mouse"
      , "category": "Animals & Nature"
      , "aliases": [
        "mouse2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐀"
      , "description": "rat"
      , "category": "Animals & Nature"
      , "aliases": [
        "rat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐹"
      , "description": "hamster"
      , "category": "Animals & Nature"
      , "aliases": [
        "hamster"
      ]
      , "tags": [
        "pet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐰"
      , "description": "rabbit face"
      , "category": "Animals & Nature"
      , "aliases": [
        "rabbit"
      ]
      , "tags": [
        "bunny"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐇"
      , "description": "rabbit"
      , "category": "Animals & Nature"
      , "aliases": [
        "rabbit2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐿️"
      , "description": "chipmunk"
      , "category": "Animals & Nature"
      , "aliases": [
        "chipmunk"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦫"
      , "description": "beaver"
      , "category": "Animals & Nature"
      , "aliases": [
        "beaver"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦔"
      , "description": "hedgehog"
      , "category": "Animals & Nature"
      , "aliases": [
        "hedgehog"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦇"
      , "description": "bat"
      , "category": "Animals & Nature"
      , "aliases": [
        "bat"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🐻"
      , "description": "bear"
      , "category": "Animals & Nature"
      , "aliases": [
        "bear"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐻‍❄️"
      , "description": "polar bear"
      , "category": "Animals & Nature"
      , "aliases": [
        "polar_bear"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🐨"
      , "description": "koala"
      , "category": "Animals & Nature"
      , "aliases": [
        "koala"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐼"
      , "description": "panda"
      , "category": "Animals & Nature"
      , "aliases": [
        "panda_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦥"
      , "description": "sloth"
      , "category": "Animals & Nature"
      , "aliases": [
        "sloth"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦦"
      , "description": "otter"
      , "category": "Animals & Nature"
      , "aliases": [
        "otter"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦨"
      , "description": "skunk"
      , "category": "Animals & Nature"
      , "aliases": [
        "skunk"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦘"
      , "description": "kangaroo"
      , "category": "Animals & Nature"
      , "aliases": [
        "kangaroo"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦡"
      , "description": "badger"
      , "category": "Animals & Nature"
      , "aliases": [
        "badger"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐾"
      , "description": "paw prints"
      , "category": "Animals & Nature"
      , "aliases": [
        "feet"
        , "paw_prints"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦃"
      , "description": "turkey"
      , "category": "Animals & Nature"
      , "aliases": [
        "turkey"
      ]
      , "tags": [
        "thanksgiving"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🐔"
      , "description": "chicken"
      , "category": "Animals & Nature"
      , "aliases": [
        "chicken"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐓"
      , "description": "rooster"
      , "category": "Animals & Nature"
      , "aliases": [
        "rooster"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐣"
      , "description": "hatching chick"
      , "category": "Animals & Nature"
      , "aliases": [
        "hatching_chick"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐤"
      , "description": "baby chick"
      , "category": "Animals & Nature"
      , "aliases": [
        "baby_chick"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐥"
      , "description": "front-facing baby chick"
      , "category": "Animals & Nature"
      , "aliases": [
        "hatched_chick"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐦"
      , "description": "bird"
      , "category": "Animals & Nature"
      , "aliases": [
        "bird"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐧"
      , "description": "penguin"
      , "category": "Animals & Nature"
      , "aliases": [
        "penguin"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕊️"
      , "description": "dove"
      , "category": "Animals & Nature"
      , "aliases": [
        "dove"
      ]
      , "tags": [
        "peace"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦅"
      , "description": "eagle"
      , "category": "Animals & Nature"
      , "aliases": [
        "eagle"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦆"
      , "description": "duck"
      , "category": "Animals & Nature"
      , "aliases": [
        "duck"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦢"
      , "description": "swan"
      , "category": "Animals & Nature"
      , "aliases": [
        "swan"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦉"
      , "description": "owl"
      , "category": "Animals & Nature"
      , "aliases": [
        "owl"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦤"
      , "description": "dodo"
      , "category": "Animals & Nature"
      , "aliases": [
        "dodo"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪶"
      , "description": "feather"
      , "category": "Animals & Nature"
      , "aliases": [
        "feather"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦩"
      , "description": "flamingo"
      , "category": "Animals & Nature"
      , "aliases": [
        "flamingo"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦚"
      , "description": "peacock"
      , "category": "Animals & Nature"
      , "aliases": [
        "peacock"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦜"
      , "description": "parrot"
      , "category": "Animals & Nature"
      , "aliases": [
        "parrot"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐸"
      , "description": "frog"
      , "category": "Animals & Nature"
      , "aliases": [
        "frog"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐊"
      , "description": "crocodile"
      , "category": "Animals & Nature"
      , "aliases": [
        "crocodile"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐢"
      , "description": "turtle"
      , "category": "Animals & Nature"
      , "aliases": [
        "turtle"
      ]
      , "tags": [
        "slow"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦎"
      , "description": "lizard"
      , "category": "Animals & Nature"
      , "aliases": [
        "lizard"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🐍"
      , "description": "snake"
      , "category": "Animals & Nature"
      , "aliases": [
        "snake"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐲"
      , "description": "dragon face"
      , "category": "Animals & Nature"
      , "aliases": [
        "dragon_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐉"
      , "description": "dragon"
      , "category": "Animals & Nature"
      , "aliases": [
        "dragon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦕"
      , "description": "sauropod"
      , "category": "Animals & Nature"
      , "aliases": [
        "sauropod"
      ]
      , "tags": [
        "dinosaur"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦖"
      , "description": "T-Rex"
      , "category": "Animals & Nature"
      , "aliases": [
        "t-rex"
      ]
      , "tags": [
        "dinosaur"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🐳"
      , "description": "spouting whale"
      , "category": "Animals & Nature"
      , "aliases": [
        "whale"
      ]
      , "tags": [
        "sea"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐋"
      , "description": "whale"
      , "category": "Animals & Nature"
      , "aliases": [
        "whale2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐬"
      , "description": "dolphin"
      , "category": "Animals & Nature"
      , "aliases": [
        "dolphin"
        , "flipper"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦭"
      , "description": "seal"
      , "category": "Animals & Nature"
      , "aliases": [
        "seal"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🐟"
      , "description": "fish"
      , "category": "Animals & Nature"
      , "aliases": [
        "fish"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐠"
      , "description": "tropical fish"
      , "category": "Animals & Nature"
      , "aliases": [
        "tropical_fish"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐡"
      , "description": "blowfish"
      , "category": "Animals & Nature"
      , "aliases": [
        "blowfish"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦈"
      , "description": "shark"
      , "category": "Animals & Nature"
      , "aliases": [
        "shark"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🐙"
      , "description": "octopus"
      , "category": "Animals & Nature"
      , "aliases": [
        "octopus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐚"
      , "description": "spiral shell"
      , "category": "Animals & Nature"
      , "aliases": [
        "shell"
      ]
      , "tags": [
        "sea"
        , "beach"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪸"
      , "description": "coral"
      , "category": "Animals & Nature"
      , "aliases": [
        "coral"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🐌"
      , "description": "snail"
      , "category": "Animals & Nature"
      , "aliases": [
        "snail"
      ]
      , "tags": [
        "slow"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦋"
      , "description": "butterfly"
      , "category": "Animals & Nature"
      , "aliases": [
        "butterfly"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🐛"
      , "description": "bug"
      , "category": "Animals & Nature"
      , "aliases": [
        "bug"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐜"
      , "description": "ant"
      , "category": "Animals & Nature"
      , "aliases": [
        "ant"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🐝"
      , "description": "honeybee"
      , "category": "Animals & Nature"
      , "aliases": [
        "bee"
        , "honeybee"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪲"
      , "description": "beetle"
      , "category": "Animals & Nature"
      , "aliases": [
        "beetle"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🐞"
      , "description": "lady beetle"
      , "category": "Animals & Nature"
      , "aliases": [
        "lady_beetle"
      ]
      , "tags": [
        "bug"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🦗"
      , "description": "cricket"
      , "category": "Animals & Nature"
      , "aliases": [
        "cricket"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪳"
      , "description": "cockroach"
      , "category": "Animals & Nature"
      , "aliases": [
        "cockroach"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🕷️"
      , "description": "spider"
      , "category": "Animals & Nature"
      , "aliases": [
        "spider"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕸️"
      , "description": "spider web"
      , "category": "Animals & Nature"
      , "aliases": [
        "spider_web"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦂"
      , "description": "scorpion"
      , "category": "Animals & Nature"
      , "aliases": [
        "scorpion"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦟"
      , "description": "mosquito"
      , "category": "Animals & Nature"
      , "aliases": [
        "mosquito"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪰"
      , "description": "fly"
      , "category": "Animals & Nature"
      , "aliases": [
        "fly"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪱"
      , "description": "worm"
      , "category": "Animals & Nature"
      , "aliases": [
        "worm"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🦠"
      , "description": "microbe"
      , "category": "Animals & Nature"
      , "aliases": [
        "microbe"
      ]
      , "tags": [
        "germ"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "💐"
      , "description": "bouquet"
      , "category": "Animals & Nature"
      , "aliases": [
        "bouquet"
      ]
      , "tags": [
        "flowers"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌸"
      , "description": "cherry blossom"
      , "category": "Animals & Nature"
      , "aliases": [
        "cherry_blossom"
      ]
      , "tags": [
        "flower"
        , "spring"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💮"
      , "description": "white flower"
      , "category": "Animals & Nature"
      , "aliases": [
        "white_flower"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪷"
      , "description": "lotus"
      , "category": "Animals & Nature"
      , "aliases": [
        "lotus"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🏵️"
      , "description": "rosette"
      , "category": "Animals & Nature"
      , "aliases": [
        "rosette"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌹"
      , "description": "rose"
      , "category": "Animals & Nature"
      , "aliases": [
        "rose"
      ]
      , "tags": [
        "flower"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥀"
      , "description": "wilted flower"
      , "category": "Animals & Nature"
      , "aliases": [
        "wilted_flower"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🌺"
      , "description": "hibiscus"
      , "category": "Animals & Nature"
      , "aliases": [
        "hibiscus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌻"
      , "description": "sunflower"
      , "category": "Animals & Nature"
      , "aliases": [
        "sunflower"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌼"
      , "description": "blossom"
      , "category": "Animals & Nature"
      , "aliases": [
        "blossom"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌷"
      , "description": "tulip"
      , "category": "Animals & Nature"
      , "aliases": [
        "tulip"
      ]
      , "tags": [
        "flower"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌱"
      , "description": "seedling"
      , "category": "Animals & Nature"
      , "aliases": [
        "seedling"
      ]
      , "tags": [
        "plant"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪴"
      , "description": "potted plant"
      , "category": "Animals & Nature"
      , "aliases": [
        "potted_plant"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🌲"
      , "description": "evergreen tree"
      , "category": "Animals & Nature"
      , "aliases": [
        "evergreen_tree"
      ]
      , "tags": [
        "wood"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌳"
      , "description": "deciduous tree"
      , "category": "Animals & Nature"
      , "aliases": [
        "deciduous_tree"
      ]
      , "tags": [
        "wood"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌴"
      , "description": "palm tree"
      , "category": "Animals & Nature"
      , "aliases": [
        "palm_tree"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌵"
      , "description": "cactus"
      , "category": "Animals & Nature"
      , "aliases": [
        "cactus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌾"
      , "description": "sheaf of rice"
      , "category": "Animals & Nature"
      , "aliases": [
        "ear_of_rice"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌿"
      , "description": "herb"
      , "category": "Animals & Nature"
      , "aliases": [
        "herb"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☘️"
      , "description": "shamrock"
      , "category": "Animals & Nature"
      , "aliases": [
        "shamrock"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🍀"
      , "description": "four leaf clover"
      , "category": "Animals & Nature"
      , "aliases": [
        "four_leaf_clover"
      ]
      , "tags": [
        "luck"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍁"
      , "description": "maple leaf"
      , "category": "Animals & Nature"
      , "aliases": [
        "maple_leaf"
      ]
      , "tags": [
        "canada"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍂"
      , "description": "fallen leaf"
      , "category": "Animals & Nature"
      , "aliases": [
        "fallen_leaf"
      ]
      , "tags": [
        "autumn"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍃"
      , "description": "leaf fluttering in wind"
      , "category": "Animals & Nature"
      , "aliases": [
        "leaves"
      ]
      , "tags": [
        "leaf"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪹"
      , "description": "empty nest"
      , "category": "Animals & Nature"
      , "aliases": [
        "empty_nest"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🪺"
      , "description": "nest with eggs"
      , "category": "Animals & Nature"
      , "aliases": [
        "nest_with_eggs"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🍇"
      , "description": "grapes"
      , "category": "Food & Drink"
      , "aliases": [
        "grapes"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍈"
      , "description": "melon"
      , "category": "Food & Drink"
      , "aliases": [
        "melon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍉"
      , "description": "watermelon"
      , "category": "Food & Drink"
      , "aliases": [
        "watermelon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍊"
      , "description": "tangerine"
      , "category": "Food & Drink"
      , "aliases": [
        "tangerine"
        , "orange"
        , "mandarin"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍋"
      , "description": "lemon"
      , "category": "Food & Drink"
      , "aliases": [
        "lemon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍌"
      , "description": "banana"
      , "category": "Food & Drink"
      , "aliases": [
        "banana"
      ]
      , "tags": [
        "fruit"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍍"
      , "description": "pineapple"
      , "category": "Food & Drink"
      , "aliases": [
        "pineapple"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥭"
      , "description": "mango"
      , "category": "Food & Drink"
      , "aliases": [
        "mango"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🍎"
      , "description": "red apple"
      , "category": "Food & Drink"
      , "aliases": [
        "apple"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍏"
      , "description": "green apple"
      , "category": "Food & Drink"
      , "aliases": [
        "green_apple"
      ]
      , "tags": [
        "fruit"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍐"
      , "description": "pear"
      , "category": "Food & Drink"
      , "aliases": [
        "pear"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍑"
      , "description": "peach"
      , "category": "Food & Drink"
      , "aliases": [
        "peach"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍒"
      , "description": "cherries"
      , "category": "Food & Drink"
      , "aliases": [
        "cherries"
      ]
      , "tags": [
        "fruit"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍓"
      , "description": "strawberry"
      , "category": "Food & Drink"
      , "aliases": [
        "strawberry"
      ]
      , "tags": [
        "fruit"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫐"
      , "description": "blueberries"
      , "category": "Food & Drink"
      , "aliases": [
        "blueberries"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥝"
      , "description": "kiwi fruit"
      , "category": "Food & Drink"
      , "aliases": [
        "kiwi_fruit"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍅"
      , "description": "tomato"
      , "category": "Food & Drink"
      , "aliases": [
        "tomato"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫒"
      , "description": "olive"
      , "category": "Food & Drink"
      , "aliases": [
        "olive"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥥"
      , "description": "coconut"
      , "category": "Food & Drink"
      , "aliases": [
        "coconut"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥑"
      , "description": "avocado"
      , "category": "Food & Drink"
      , "aliases": [
        "avocado"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍆"
      , "description": "eggplant"
      , "category": "Food & Drink"
      , "aliases": [
        "eggplant"
      ]
      , "tags": [
        "aubergine"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥔"
      , "description": "potato"
      , "category": "Food & Drink"
      , "aliases": [
        "potato"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥕"
      , "description": "carrot"
      , "category": "Food & Drink"
      , "aliases": [
        "carrot"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🌽"
      , "description": "ear of corn"
      , "category": "Food & Drink"
      , "aliases": [
        "corn"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌶️"
      , "description": "hot pepper"
      , "category": "Food & Drink"
      , "aliases": [
        "hot_pepper"
      ]
      , "tags": [
        "spicy"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🫑"
      , "description": "bell pepper"
      , "category": "Food & Drink"
      , "aliases": [
        "bell_pepper"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥒"
      , "description": "cucumber"
      , "category": "Food & Drink"
      , "aliases": [
        "cucumber"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥬"
      , "description": "leafy green"
      , "category": "Food & Drink"
      , "aliases": [
        "leafy_green"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥦"
      , "description": "broccoli"
      , "category": "Food & Drink"
      , "aliases": [
        "broccoli"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧄"
      , "description": "garlic"
      , "category": "Food & Drink"
      , "aliases": [
        "garlic"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧅"
      , "description": "onion"
      , "category": "Food & Drink"
      , "aliases": [
        "onion"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🍄"
      , "description": "mushroom"
      , "category": "Food & Drink"
      , "aliases": [
        "mushroom"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥜"
      , "description": "peanuts"
      , "category": "Food & Drink"
      , "aliases": [
        "peanuts"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🫘"
      , "description": "beans"
      , "category": "Food & Drink"
      , "aliases": [
        "beans"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🌰"
      , "description": "chestnut"
      , "category": "Food & Drink"
      , "aliases": [
        "chestnut"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍞"
      , "description": "bread"
      , "category": "Food & Drink"
      , "aliases": [
        "bread"
      ]
      , "tags": [
        "toast"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥐"
      , "description": "croissant"
      , "category": "Food & Drink"
      , "aliases": [
        "croissant"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥖"
      , "description": "baguette bread"
      , "category": "Food & Drink"
      , "aliases": [
        "baguette_bread"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🫓"
      , "description": "flatbread"
      , "category": "Food & Drink"
      , "aliases": [
        "flatbread"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥨"
      , "description": "pretzel"
      , "category": "Food & Drink"
      , "aliases": [
        "pretzel"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥯"
      , "description": "bagel"
      , "category": "Food & Drink"
      , "aliases": [
        "bagel"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥞"
      , "description": "pancakes"
      , "category": "Food & Drink"
      , "aliases": [
        "pancakes"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🧇"
      , "description": "waffle"
      , "category": "Food & Drink"
      , "aliases": [
        "waffle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧀"
      , "description": "cheese wedge"
      , "category": "Food & Drink"
      , "aliases": [
        "cheese"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🍖"
      , "description": "meat on bone"
      , "category": "Food & Drink"
      , "aliases": [
        "meat_on_bone"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍗"
      , "description": "poultry leg"
      , "category": "Food & Drink"
      , "aliases": [
        "poultry_leg"
      ]
      , "tags": [
        "meat"
        , "chicken"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥩"
      , "description": "cut of meat"
      , "category": "Food & Drink"
      , "aliases": [
        "cut_of_meat"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥓"
      , "description": "bacon"
      , "category": "Food & Drink"
      , "aliases": [
        "bacon"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍔"
      , "description": "hamburger"
      , "category": "Food & Drink"
      , "aliases": [
        "hamburger"
      ]
      , "tags": [
        "burger"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍟"
      , "description": "french fries"
      , "category": "Food & Drink"
      , "aliases": [
        "fries"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍕"
      , "description": "pizza"
      , "category": "Food & Drink"
      , "aliases": [
        "pizza"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌭"
      , "description": "hot dog"
      , "category": "Food & Drink"
      , "aliases": [
        "hotdog"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🥪"
      , "description": "sandwich"
      , "category": "Food & Drink"
      , "aliases": [
        "sandwich"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🌮"
      , "description": "taco"
      , "category": "Food & Drink"
      , "aliases": [
        "taco"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌯"
      , "description": "burrito"
      , "category": "Food & Drink"
      , "aliases": [
        "burrito"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🫔"
      , "description": "tamale"
      , "category": "Food & Drink"
      , "aliases": [
        "tamale"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥙"
      , "description": "stuffed flatbread"
      , "category": "Food & Drink"
      , "aliases": [
        "stuffed_flatbread"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🧆"
      , "description": "falafel"
      , "category": "Food & Drink"
      , "aliases": [
        "falafel"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🥚"
      , "description": "egg"
      , "category": "Food & Drink"
      , "aliases": [
        "egg"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍳"
      , "description": "cooking"
      , "category": "Food & Drink"
      , "aliases": [
        "fried_egg"
      ]
      , "tags": [
        "breakfast"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥘"
      , "description": "shallow pan of food"
      , "category": "Food & Drink"
      , "aliases": [
        "shallow_pan_of_food"
      ]
      , "tags": [
        "paella"
        , "curry"
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍲"
      , "description": "pot of food"
      , "category": "Food & Drink"
      , "aliases": [
        "stew"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫕"
      , "description": "fondue"
      , "category": "Food & Drink"
      , "aliases": [
        "fondue"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🥣"
      , "description": "bowl with spoon"
      , "category": "Food & Drink"
      , "aliases": [
        "bowl_with_spoon"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥗"
      , "description": "green salad"
      , "category": "Food & Drink"
      , "aliases": [
        "green_salad"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🍿"
      , "description": "popcorn"
      , "category": "Food & Drink"
      , "aliases": [
        "popcorn"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🧈"
      , "description": "butter"
      , "category": "Food & Drink"
      , "aliases": [
        "butter"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧂"
      , "description": "salt"
      , "category": "Food & Drink"
      , "aliases": [
        "salt"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥫"
      , "description": "canned food"
      , "category": "Food & Drink"
      , "aliases": [
        "canned_food"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🍱"
      , "description": "bento box"
      , "category": "Food & Drink"
      , "aliases": [
        "bento"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍘"
      , "description": "rice cracker"
      , "category": "Food & Drink"
      , "aliases": [
        "rice_cracker"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍙"
      , "description": "rice ball"
      , "category": "Food & Drink"
      , "aliases": [
        "rice_ball"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍚"
      , "description": "cooked rice"
      , "category": "Food & Drink"
      , "aliases": [
        "rice"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍛"
      , "description": "curry rice"
      , "category": "Food & Drink"
      , "aliases": [
        "curry"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍜"
      , "description": "steaming bowl"
      , "category": "Food & Drink"
      , "aliases": [
        "ramen"
      ]
      , "tags": [
        "noodle"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍝"
      , "description": "spaghetti"
      , "category": "Food & Drink"
      , "aliases": [
        "spaghetti"
      ]
      , "tags": [
        "pasta"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍠"
      , "description": "roasted sweet potato"
      , "category": "Food & Drink"
      , "aliases": [
        "sweet_potato"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍢"
      , "description": "oden"
      , "category": "Food & Drink"
      , "aliases": [
        "oden"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍣"
      , "description": "sushi"
      , "category": "Food & Drink"
      , "aliases": [
        "sushi"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍤"
      , "description": "fried shrimp"
      , "category": "Food & Drink"
      , "aliases": [
        "fried_shrimp"
      ]
      , "tags": [
        "tempura"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍥"
      , "description": "fish cake with swirl"
      , "category": "Food & Drink"
      , "aliases": [
        "fish_cake"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥮"
      , "description": "moon cake"
      , "category": "Food & Drink"
      , "aliases": [
        "moon_cake"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🍡"
      , "description": "dango"
      , "category": "Food & Drink"
      , "aliases": [
        "dango"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥟"
      , "description": "dumpling"
      , "category": "Food & Drink"
      , "aliases": [
        "dumpling"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥠"
      , "description": "fortune cookie"
      , "category": "Food & Drink"
      , "aliases": [
        "fortune_cookie"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥡"
      , "description": "takeout box"
      , "category": "Food & Drink"
      , "aliases": [
        "takeout_box"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦀"
      , "description": "crab"
      , "category": "Food & Drink"
      , "aliases": [
        "crab"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦞"
      , "description": "lobster"
      , "category": "Food & Drink"
      , "aliases": [
        "lobster"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦐"
      , "description": "shrimp"
      , "category": "Food & Drink"
      , "aliases": [
        "shrimp"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦑"
      , "description": "squid"
      , "category": "Food & Drink"
      , "aliases": [
        "squid"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦪"
      , "description": "oyster"
      , "category": "Food & Drink"
      , "aliases": [
        "oyster"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🍦"
      , "description": "soft ice cream"
      , "category": "Food & Drink"
      , "aliases": [
        "icecream"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍧"
      , "description": "shaved ice"
      , "category": "Food & Drink"
      , "aliases": [
        "shaved_ice"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍨"
      , "description": "ice cream"
      , "category": "Food & Drink"
      , "aliases": [
        "ice_cream"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍩"
      , "description": "doughnut"
      , "category": "Food & Drink"
      , "aliases": [
        "doughnut"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍪"
      , "description": "cookie"
      , "category": "Food & Drink"
      , "aliases": [
        "cookie"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎂"
      , "description": "birthday cake"
      , "category": "Food & Drink"
      , "aliases": [
        "birthday"
      ]
      , "tags": [
        "party"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍰"
      , "description": "shortcake"
      , "category": "Food & Drink"
      , "aliases": [
        "cake"
      ]
      , "tags": [
        "dessert"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧁"
      , "description": "cupcake"
      , "category": "Food & Drink"
      , "aliases": [
        "cupcake"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥧"
      , "description": "pie"
      , "category": "Food & Drink"
      , "aliases": [
        "pie"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🍫"
      , "description": "chocolate bar"
      , "category": "Food & Drink"
      , "aliases": [
        "chocolate_bar"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍬"
      , "description": "candy"
      , "category": "Food & Drink"
      , "aliases": [
        "candy"
      ]
      , "tags": [
        "sweet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍭"
      , "description": "lollipop"
      , "category": "Food & Drink"
      , "aliases": [
        "lollipop"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍮"
      , "description": "custard"
      , "category": "Food & Drink"
      , "aliases": [
        "custard"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍯"
      , "description": "honey pot"
      , "category": "Food & Drink"
      , "aliases": [
        "honey_pot"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍼"
      , "description": "baby bottle"
      , "category": "Food & Drink"
      , "aliases": [
        "baby_bottle"
      ]
      , "tags": [
        "milk"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥛"
      , "description": "glass of milk"
      , "category": "Food & Drink"
      , "aliases": [
        "milk_glass"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "☕"
      , "description": "hot beverage"
      , "category": "Food & Drink"
      , "aliases": [
        "coffee"
      ]
      , "tags": [
        "cafe"
        , "espresso"
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫖"
      , "description": "teapot"
      , "category": "Food & Drink"
      , "aliases": [
        "teapot"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🍵"
      , "description": "teacup without handle"
      , "category": "Food & Drink"
      , "aliases": [
        "tea"
      ]
      , "tags": [
        "green"
        , "breakfast"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍶"
      , "description": "sake"
      , "category": "Food & Drink"
      , "aliases": [
        "sake"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍾"
      , "description": "bottle with popping cork"
      , "category": "Food & Drink"
      , "aliases": [
        "champagne"
      ]
      , "tags": [
        "bottle"
        , "bubbly"
        , "celebration"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🍷"
      , "description": "wine glass"
      , "category": "Food & Drink"
      , "aliases": [
        "wine_glass"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍸"
      , "description": "cocktail glass"
      , "category": "Food & Drink"
      , "aliases": [
        "cocktail"
      ]
      , "tags": [
        "drink"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍹"
      , "description": "tropical drink"
      , "category": "Food & Drink"
      , "aliases": [
        "tropical_drink"
      ]
      , "tags": [
        "summer"
        , "vacation"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍺"
      , "description": "beer mug"
      , "category": "Food & Drink"
      , "aliases": [
        "beer"
      ]
      , "tags": [
        "drink"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🍻"
      , "description": "clinking beer mugs"
      , "category": "Food & Drink"
      , "aliases": [
        "beers"
      ]
      , "tags": [
        "drinks"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥂"
      , "description": "clinking glasses"
      , "category": "Food & Drink"
      , "aliases": [
        "clinking_glasses"
      ]
      , "tags": [
        "cheers"
        , "toast"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥃"
      , "description": "tumbler glass"
      , "category": "Food & Drink"
      , "aliases": [
        "tumbler_glass"
      ]
      , "tags": [
        "whisky"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🫗"
      , "description": "pouring liquid"
      , "category": "Food & Drink"
      , "aliases": [
        "pouring_liquid"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🥤"
      , "description": "cup with straw"
      , "category": "Food & Drink"
      , "aliases": [
        "cup_with_straw"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧋"
      , "description": "bubble tea"
      , "category": "Food & Drink"
      , "aliases": [
        "bubble_tea"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧃"
      , "description": "beverage box"
      , "category": "Food & Drink"
      , "aliases": [
        "beverage_box"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧉"
      , "description": "mate"
      , "category": "Food & Drink"
      , "aliases": [
        "mate"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧊"
      , "description": "ice"
      , "category": "Food & Drink"
      , "aliases": [
        "ice_cube"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🥢"
      , "description": "chopsticks"
      , "category": "Food & Drink"
      , "aliases": [
        "chopsticks"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🍽️"
      , "description": "fork and knife with plate"
      , "category": "Food & Drink"
      , "aliases": [
        "plate_with_cutlery"
      ]
      , "tags": [
        "dining"
        , "dinner"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🍴"
      , "description": "fork and knife"
      , "category": "Food & Drink"
      , "aliases": [
        "fork_and_knife"
      ]
      , "tags": [
        "cutlery"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥄"
      , "description": "spoon"
      , "category": "Food & Drink"
      , "aliases": [
        "spoon"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🔪"
      , "description": "kitchen knife"
      , "category": "Food & Drink"
      , "aliases": [
        "hocho"
        , "knife"
      ]
      , "tags": [
        "cut"
        , "chop"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🫙"
      , "description": "jar"
      , "category": "Food & Drink"
      , "aliases": [
        "jar"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🏺"
      , "description": "amphora"
      , "category": "Food & Drink"
      , "aliases": [
        "amphora"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌍"
      , "description": "globe showing Europe-Africa"
      , "category": "Travel & Places"
      , "aliases": [
        "earth_africa"
      ]
      , "tags": [
        "globe"
        , "world"
        , "international"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌎"
      , "description": "globe showing Americas"
      , "category": "Travel & Places"
      , "aliases": [
        "earth_americas"
      ]
      , "tags": [
        "globe"
        , "world"
        , "international"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌏"
      , "description": "globe showing Asia-Australia"
      , "category": "Travel & Places"
      , "aliases": [
        "earth_asia"
      ]
      , "tags": [
        "globe"
        , "world"
        , "international"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌐"
      , "description": "globe with meridians"
      , "category": "Travel & Places"
      , "aliases": [
        "globe_with_meridians"
      ]
      , "tags": [
        "world"
        , "global"
        , "international"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗺️"
      , "description": "world map"
      , "category": "Travel & Places"
      , "aliases": [
        "world_map"
      ]
      , "tags": [
        "travel"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗾"
      , "description": "map of Japan"
      , "category": "Travel & Places"
      , "aliases": [
        "japan"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧭"
      , "description": "compass"
      , "category": "Travel & Places"
      , "aliases": [
        "compass"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏔️"
      , "description": "snow-capped mountain"
      , "category": "Travel & Places"
      , "aliases": [
        "mountain_snow"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛰️"
      , "description": "mountain"
      , "category": "Travel & Places"
      , "aliases": [
        "mountain"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌋"
      , "description": "volcano"
      , "category": "Travel & Places"
      , "aliases": [
        "volcano"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗻"
      , "description": "mount fuji"
      , "category": "Travel & Places"
      , "aliases": [
        "mount_fuji"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏕️"
      , "description": "camping"
      , "category": "Travel & Places"
      , "aliases": [
        "camping"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏖️"
      , "description": "beach with umbrella"
      , "category": "Travel & Places"
      , "aliases": [
        "beach_umbrella"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏜️"
      , "description": "desert"
      , "category": "Travel & Places"
      , "aliases": [
        "desert"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏝️"
      , "description": "desert island"
      , "category": "Travel & Places"
      , "aliases": [
        "desert_island"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏞️"
      , "description": "national park"
      , "category": "Travel & Places"
      , "aliases": [
        "national_park"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏟️"
      , "description": "stadium"
      , "category": "Travel & Places"
      , "aliases": [
        "stadium"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏛️"
      , "description": "classical building"
      , "category": "Travel & Places"
      , "aliases": [
        "classical_building"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏗️"
      , "description": "building construction"
      , "category": "Travel & Places"
      , "aliases": [
        "building_construction"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🧱"
      , "description": "brick"
      , "category": "Travel & Places"
      , "aliases": [
        "bricks"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪨"
      , "description": "rock"
      , "category": "Travel & Places"
      , "aliases": [
        "rock"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪵"
      , "description": "wood"
      , "category": "Travel & Places"
      , "aliases": [
        "wood"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🛖"
      , "description": "hut"
      , "category": "Travel & Places"
      , "aliases": [
        "hut"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🏘️"
      , "description": "houses"
      , "category": "Travel & Places"
      , "aliases": [
        "houses"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏚️"
      , "description": "derelict house"
      , "category": "Travel & Places"
      , "aliases": [
        "derelict_house"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏠"
      , "description": "house"
      , "category": "Travel & Places"
      , "aliases": [
        "house"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏡"
      , "description": "house with garden"
      , "category": "Travel & Places"
      , "aliases": [
        "house_with_garden"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏢"
      , "description": "office building"
      , "category": "Travel & Places"
      , "aliases": [
        "office"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏣"
      , "description": "Japanese post office"
      , "category": "Travel & Places"
      , "aliases": [
        "post_office"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏤"
      , "description": "post office"
      , "category": "Travel & Places"
      , "aliases": [
        "european_post_office"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏥"
      , "description": "hospital"
      , "category": "Travel & Places"
      , "aliases": [
        "hospital"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏦"
      , "description": "bank"
      , "category": "Travel & Places"
      , "aliases": [
        "bank"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏨"
      , "description": "hotel"
      , "category": "Travel & Places"
      , "aliases": [
        "hotel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏩"
      , "description": "love hotel"
      , "category": "Travel & Places"
      , "aliases": [
        "love_hotel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏪"
      , "description": "convenience store"
      , "category": "Travel & Places"
      , "aliases": [
        "convenience_store"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏫"
      , "description": "school"
      , "category": "Travel & Places"
      , "aliases": [
        "school"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏬"
      , "description": "department store"
      , "category": "Travel & Places"
      , "aliases": [
        "department_store"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏭"
      , "description": "factory"
      , "category": "Travel & Places"
      , "aliases": [
        "factory"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏯"
      , "description": "Japanese castle"
      , "category": "Travel & Places"
      , "aliases": [
        "japanese_castle"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏰"
      , "description": "castle"
      , "category": "Travel & Places"
      , "aliases": [
        "european_castle"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💒"
      , "description": "wedding"
      , "category": "Travel & Places"
      , "aliases": [
        "wedding"
      ]
      , "tags": [
        "marriage"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗼"
      , "description": "Tokyo tower"
      , "category": "Travel & Places"
      , "aliases": [
        "tokyo_tower"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗽"
      , "description": "Statue of Liberty"
      , "category": "Travel & Places"
      , "aliases": [
        "statue_of_liberty"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛪"
      , "description": "church"
      , "category": "Travel & Places"
      , "aliases": [
        "church"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕌"
      , "description": "mosque"
      , "category": "Travel & Places"
      , "aliases": [
        "mosque"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛕"
      , "description": "hindu temple"
      , "category": "Travel & Places"
      , "aliases": [
        "hindu_temple"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🕍"
      , "description": "synagogue"
      , "category": "Travel & Places"
      , "aliases": [
        "synagogue"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛩️"
      , "description": "shinto shrine"
      , "category": "Travel & Places"
      , "aliases": [
        "shinto_shrine"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕋"
      , "description": "kaaba"
      , "category": "Travel & Places"
      , "aliases": [
        "kaaba"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛲"
      , "description": "fountain"
      , "category": "Travel & Places"
      , "aliases": [
        "fountain"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛺"
      , "description": "tent"
      , "category": "Travel & Places"
      , "aliases": [
        "tent"
      ]
      , "tags": [
        "camping"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌁"
      , "description": "foggy"
      , "category": "Travel & Places"
      , "aliases": [
        "foggy"
      ]
      , "tags": [
        "karl"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌃"
      , "description": "night with stars"
      , "category": "Travel & Places"
      , "aliases": [
        "night_with_stars"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏙️"
      , "description": "cityscape"
      , "category": "Travel & Places"
      , "aliases": [
        "cityscape"
      ]
      , "tags": [
        "skyline"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌄"
      , "description": "sunrise over mountains"
      , "category": "Travel & Places"
      , "aliases": [
        "sunrise_over_mountains"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌅"
      , "description": "sunrise"
      , "category": "Travel & Places"
      , "aliases": [
        "sunrise"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌆"
      , "description": "cityscape at dusk"
      , "category": "Travel & Places"
      , "aliases": [
        "city_sunset"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌇"
      , "description": "sunset"
      , "category": "Travel & Places"
      , "aliases": [
        "city_sunrise"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌉"
      , "description": "bridge at night"
      , "category": "Travel & Places"
      , "aliases": [
        "bridge_at_night"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♨️"
      , "description": "hot springs"
      , "category": "Travel & Places"
      , "aliases": [
        "hotsprings"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎠"
      , "description": "carousel horse"
      , "category": "Travel & Places"
      , "aliases": [
        "carousel_horse"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛝"
      , "description": "playground slide"
      , "category": "Travel & Places"
      , "aliases": [
        "playground_slide"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🎡"
      , "description": "ferris wheel"
      , "category": "Travel & Places"
      , "aliases": [
        "ferris_wheel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎢"
      , "description": "roller coaster"
      , "category": "Travel & Places"
      , "aliases": [
        "roller_coaster"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💈"
      , "description": "barber pole"
      , "category": "Travel & Places"
      , "aliases": [
        "barber"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎪"
      , "description": "circus tent"
      , "category": "Travel & Places"
      , "aliases": [
        "circus_tent"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚂"
      , "description": "locomotive"
      , "category": "Travel & Places"
      , "aliases": [
        "steam_locomotive"
      ]
      , "tags": [
        "train"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚃"
      , "description": "railway car"
      , "category": "Travel & Places"
      , "aliases": [
        "railway_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚄"
      , "description": "high-speed train"
      , "category": "Travel & Places"
      , "aliases": [
        "bullettrain_side"
      ]
      , "tags": [
        "train"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚅"
      , "description": "bullet train"
      , "category": "Travel & Places"
      , "aliases": [
        "bullettrain_front"
      ]
      , "tags": [
        "train"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚆"
      , "description": "train"
      , "category": "Travel & Places"
      , "aliases": [
        "train2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚇"
      , "description": "metro"
      , "category": "Travel & Places"
      , "aliases": [
        "metro"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚈"
      , "description": "light rail"
      , "category": "Travel & Places"
      , "aliases": [
        "light_rail"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚉"
      , "description": "station"
      , "category": "Travel & Places"
      , "aliases": [
        "station"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚊"
      , "description": "tram"
      , "category": "Travel & Places"
      , "aliases": [
        "tram"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚝"
      , "description": "monorail"
      , "category": "Travel & Places"
      , "aliases": [
        "monorail"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚞"
      , "description": "mountain railway"
      , "category": "Travel & Places"
      , "aliases": [
        "mountain_railway"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚋"
      , "description": "tram car"
      , "category": "Travel & Places"
      , "aliases": [
        "train"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚌"
      , "description": "bus"
      , "category": "Travel & Places"
      , "aliases": [
        "bus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚍"
      , "description": "oncoming bus"
      , "category": "Travel & Places"
      , "aliases": [
        "oncoming_bus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚎"
      , "description": "trolleybus"
      , "category": "Travel & Places"
      , "aliases": [
        "trolleybus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚐"
      , "description": "minibus"
      , "category": "Travel & Places"
      , "aliases": [
        "minibus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚑"
      , "description": "ambulance"
      , "category": "Travel & Places"
      , "aliases": [
        "ambulance"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚒"
      , "description": "fire engine"
      , "category": "Travel & Places"
      , "aliases": [
        "fire_engine"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚓"
      , "description": "police car"
      , "category": "Travel & Places"
      , "aliases": [
        "police_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚔"
      , "description": "oncoming police car"
      , "category": "Travel & Places"
      , "aliases": [
        "oncoming_police_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚕"
      , "description": "taxi"
      , "category": "Travel & Places"
      , "aliases": [
        "taxi"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚖"
      , "description": "oncoming taxi"
      , "category": "Travel & Places"
      , "aliases": [
        "oncoming_taxi"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚗"
      , "description": "automobile"
      , "category": "Travel & Places"
      , "aliases": [
        "car"
        , "red_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚘"
      , "description": "oncoming automobile"
      , "category": "Travel & Places"
      , "aliases": [
        "oncoming_automobile"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚙"
      , "description": "sport utility vehicle"
      , "category": "Travel & Places"
      , "aliases": [
        "blue_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛻"
      , "description": "pickup truck"
      , "category": "Travel & Places"
      , "aliases": [
        "pickup_truck"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🚚"
      , "description": "delivery truck"
      , "category": "Travel & Places"
      , "aliases": [
        "truck"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚛"
      , "description": "articulated lorry"
      , "category": "Travel & Places"
      , "aliases": [
        "articulated_lorry"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚜"
      , "description": "tractor"
      , "category": "Travel & Places"
      , "aliases": [
        "tractor"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏎️"
      , "description": "racing car"
      , "category": "Travel & Places"
      , "aliases": [
        "racing_car"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏍️"
      , "description": "motorcycle"
      , "category": "Travel & Places"
      , "aliases": [
        "motorcycle"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛵"
      , "description": "motor scooter"
      , "category": "Travel & Places"
      , "aliases": [
        "motor_scooter"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🦽"
      , "description": "manual wheelchair"
      , "category": "Travel & Places"
      , "aliases": [
        "manual_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🦼"
      , "description": "motorized wheelchair"
      , "category": "Travel & Places"
      , "aliases": [
        "motorized_wheelchair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🛺"
      , "description": "auto rickshaw"
      , "category": "Travel & Places"
      , "aliases": [
        "auto_rickshaw"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🚲"
      , "description": "bicycle"
      , "category": "Travel & Places"
      , "aliases": [
        "bike"
      ]
      , "tags": [
        "bicycle"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛴"
      , "description": "kick scooter"
      , "category": "Travel & Places"
      , "aliases": [
        "kick_scooter"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🛹"
      , "description": "skateboard"
      , "category": "Travel & Places"
      , "aliases": [
        "skateboard"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🛼"
      , "description": "roller skate"
      , "category": "Travel & Places"
      , "aliases": [
        "roller_skate"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🚏"
      , "description": "bus stop"
      , "category": "Travel & Places"
      , "aliases": [
        "busstop"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛣️"
      , "description": "motorway"
      , "category": "Travel & Places"
      , "aliases": [
        "motorway"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛤️"
      , "description": "railway track"
      , "category": "Travel & Places"
      , "aliases": [
        "railway_track"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛢️"
      , "description": "oil drum"
      , "category": "Travel & Places"
      , "aliases": [
        "oil_drum"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛽"
      , "description": "fuel pump"
      , "category": "Travel & Places"
      , "aliases": [
        "fuelpump"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛞"
      , "description": "wheel"
      , "category": "Travel & Places"
      , "aliases": [
        "wheel"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🚨"
      , "description": "police car light"
      , "category": "Travel & Places"
      , "aliases": [
        "rotating_light"
      ]
      , "tags": [
        "911"
        , "emergency"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚥"
      , "description": "horizontal traffic light"
      , "category": "Travel & Places"
      , "aliases": [
        "traffic_light"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚦"
      , "description": "vertical traffic light"
      , "category": "Travel & Places"
      , "aliases": [
        "vertical_traffic_light"
      ]
      , "tags": [
        "semaphore"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛑"
      , "description": "stop sign"
      , "category": "Travel & Places"
      , "aliases": [
        "stop_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🚧"
      , "description": "construction"
      , "category": "Travel & Places"
      , "aliases": [
        "construction"
      ]
      , "tags": [
        "wip"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚓"
      , "description": "anchor"
      , "category": "Travel & Places"
      , "aliases": [
        "anchor"
      ]
      , "tags": [
        "ship"
      ]
      , "unicode_version": "4.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛟"
      , "description": "ring buoy"
      , "category": "Travel & Places"
      , "aliases": [
        "ring_buoy"
      ]
      , "tags": [
        "life preserver"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "⛵"
      , "description": "sailboat"
      , "category": "Travel & Places"
      , "aliases": [
        "boat"
        , "sailboat"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛶"
      , "description": "canoe"
      , "category": "Travel & Places"
      , "aliases": [
        "canoe"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🚤"
      , "description": "speedboat"
      , "category": "Travel & Places"
      , "aliases": [
        "speedboat"
      ]
      , "tags": [
        "ship"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛳️"
      , "description": "passenger ship"
      , "category": "Travel & Places"
      , "aliases": [
        "passenger_ship"
      ]
      , "tags": [
        "cruise"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛴️"
      , "description": "ferry"
      , "category": "Travel & Places"
      , "aliases": [
        "ferry"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛥️"
      , "description": "motor boat"
      , "category": "Travel & Places"
      , "aliases": [
        "motor_boat"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🚢"
      , "description": "ship"
      , "category": "Travel & Places"
      , "aliases": [
        "ship"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✈️"
      , "description": "airplane"
      , "category": "Travel & Places"
      , "aliases": [
        "airplane"
      ]
      , "tags": [
        "flight"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛩️"
      , "description": "small airplane"
      , "category": "Travel & Places"
      , "aliases": [
        "small_airplane"
      ]
      , "tags": [
        "flight"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛫"
      , "description": "airplane departure"
      , "category": "Travel & Places"
      , "aliases": [
        "flight_departure"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛬"
      , "description": "airplane arrival"
      , "category": "Travel & Places"
      , "aliases": [
        "flight_arrival"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🪂"
      , "description": "parachute"
      , "category": "Travel & Places"
      , "aliases": [
        "parachute"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "💺"
      , "description": "seat"
      , "category": "Travel & Places"
      , "aliases": [
        "seat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚁"
      , "description": "helicopter"
      , "category": "Travel & Places"
      , "aliases": [
        "helicopter"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚟"
      , "description": "suspension railway"
      , "category": "Travel & Places"
      , "aliases": [
        "suspension_railway"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚠"
      , "description": "mountain cableway"
      , "category": "Travel & Places"
      , "aliases": [
        "mountain_cableway"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚡"
      , "description": "aerial tramway"
      , "category": "Travel & Places"
      , "aliases": [
        "aerial_tramway"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛰️"
      , "description": "satellite"
      , "category": "Travel & Places"
      , "aliases": [
        "artificial_satellite"
      ]
      , "tags": [
        "orbit"
        , "space"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🚀"
      , "description": "rocket"
      , "category": "Travel & Places"
      , "aliases": [
        "rocket"
      ]
      , "tags": [
        "ship"
        , "launch"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛸"
      , "description": "flying saucer"
      , "category": "Travel & Places"
      , "aliases": [
        "flying_saucer"
      ]
      , "tags": [
        "ufo"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🛎️"
      , "description": "bellhop bell"
      , "category": "Travel & Places"
      , "aliases": [
        "bellhop_bell"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🧳"
      , "description": "luggage"
      , "category": "Travel & Places"
      , "aliases": [
        "luggage"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "⌛"
      , "description": "hourglass done"
      , "category": "Travel & Places"
      , "aliases": [
        "hourglass"
      ]
      , "tags": [
        "time"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏳"
      , "description": "hourglass not done"
      , "category": "Travel & Places"
      , "aliases": [
        "hourglass_flowing_sand"
      ]
      , "tags": [
        "time"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⌚"
      , "description": "watch"
      , "category": "Travel & Places"
      , "aliases": [
        "watch"
      ]
      , "tags": [
        "time"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏰"
      , "description": "alarm clock"
      , "category": "Travel & Places"
      , "aliases": [
        "alarm_clock"
      ]
      , "tags": [
        "morning"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏱️"
      , "description": "stopwatch"
      , "category": "Travel & Places"
      , "aliases": [
        "stopwatch"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⏲️"
      , "description": "timer clock"
      , "category": "Travel & Places"
      , "aliases": [
        "timer_clock"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕰️"
      , "description": "mantelpiece clock"
      , "category": "Travel & Places"
      , "aliases": [
        "mantelpiece_clock"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕛"
      , "description": "twelve o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock12"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕧"
      , "description": "twelve-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock1230"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕐"
      , "description": "one o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock1"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕜"
      , "description": "one-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock130"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕑"
      , "description": "two o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕝"
      , "description": "two-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock230"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕒"
      , "description": "three o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock3"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕞"
      , "description": "three-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock330"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕓"
      , "description": "four o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock4"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕟"
      , "description": "four-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock430"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕔"
      , "description": "five o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock5"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕠"
      , "description": "five-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock530"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕕"
      , "description": "six o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock6"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕡"
      , "description": "six-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock630"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕖"
      , "description": "seven o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock7"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕢"
      , "description": "seven-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock730"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕗"
      , "description": "eight o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock8"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕣"
      , "description": "eight-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock830"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕘"
      , "description": "nine o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock9"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕤"
      , "description": "nine-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock930"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕙"
      , "description": "ten o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock10"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕥"
      , "description": "ten-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock1030"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕚"
      , "description": "eleven o’clock"
      , "category": "Travel & Places"
      , "aliases": [
        "clock11"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕦"
      , "description": "eleven-thirty"
      , "category": "Travel & Places"
      , "aliases": [
        "clock1130"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌑"
      , "description": "new moon"
      , "category": "Travel & Places"
      , "aliases": [
        "new_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌒"
      , "description": "waxing crescent moon"
      , "category": "Travel & Places"
      , "aliases": [
        "waxing_crescent_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌓"
      , "description": "first quarter moon"
      , "category": "Travel & Places"
      , "aliases": [
        "first_quarter_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌔"
      , "description": "waxing gibbous moon"
      , "category": "Travel & Places"
      , "aliases": [
        "moon"
        , "waxing_gibbous_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌕"
      , "description": "full moon"
      , "category": "Travel & Places"
      , "aliases": [
        "full_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌖"
      , "description": "waning gibbous moon"
      , "category": "Travel & Places"
      , "aliases": [
        "waning_gibbous_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌗"
      , "description": "last quarter moon"
      , "category": "Travel & Places"
      , "aliases": [
        "last_quarter_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌘"
      , "description": "waning crescent moon"
      , "category": "Travel & Places"
      , "aliases": [
        "waning_crescent_moon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌙"
      , "description": "crescent moon"
      , "category": "Travel & Places"
      , "aliases": [
        "crescent_moon"
      ]
      , "tags": [
        "night"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌚"
      , "description": "new moon face"
      , "category": "Travel & Places"
      , "aliases": [
        "new_moon_with_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌛"
      , "description": "first quarter moon face"
      , "category": "Travel & Places"
      , "aliases": [
        "first_quarter_moon_with_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌜"
      , "description": "last quarter moon face"
      , "category": "Travel & Places"
      , "aliases": [
        "last_quarter_moon_with_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌡️"
      , "description": "thermometer"
      , "category": "Travel & Places"
      , "aliases": [
        "thermometer"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☀️"
      , "description": "sun"
      , "category": "Travel & Places"
      , "aliases": [
        "sunny"
      ]
      , "tags": [
        "weather"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌝"
      , "description": "full moon face"
      , "category": "Travel & Places"
      , "aliases": [
        "full_moon_with_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌞"
      , "description": "sun with face"
      , "category": "Travel & Places"
      , "aliases": [
        "sun_with_face"
      ]
      , "tags": [
        "summer"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪐"
      , "description": "ringed planet"
      , "category": "Travel & Places"
      , "aliases": [
        "ringed_planet"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "⭐"
      , "description": "star"
      , "category": "Travel & Places"
      , "aliases": [
        "star"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌟"
      , "description": "glowing star"
      , "category": "Travel & Places"
      , "aliases": [
        "star2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌠"
      , "description": "shooting star"
      , "category": "Travel & Places"
      , "aliases": [
        "stars"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌌"
      , "description": "milky way"
      , "category": "Travel & Places"
      , "aliases": [
        "milky_way"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☁️"
      , "description": "cloud"
      , "category": "Travel & Places"
      , "aliases": [
        "cloud"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛅"
      , "description": "sun behind cloud"
      , "category": "Travel & Places"
      , "aliases": [
        "partly_sunny"
      ]
      , "tags": [
        "weather"
        , "cloud"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛈️"
      , "description": "cloud with lightning and rain"
      , "category": "Travel & Places"
      , "aliases": [
        "cloud_with_lightning_and_rain"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌤️"
      , "description": "sun behind small cloud"
      , "category": "Travel & Places"
      , "aliases": [
        "sun_behind_small_cloud"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌥️"
      , "description": "sun behind large cloud"
      , "category": "Travel & Places"
      , "aliases": [
        "sun_behind_large_cloud"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌦️"
      , "description": "sun behind rain cloud"
      , "category": "Travel & Places"
      , "aliases": [
        "sun_behind_rain_cloud"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌧️"
      , "description": "cloud with rain"
      , "category": "Travel & Places"
      , "aliases": [
        "cloud_with_rain"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌨️"
      , "description": "cloud with snow"
      , "category": "Travel & Places"
      , "aliases": [
        "cloud_with_snow"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌩️"
      , "description": "cloud with lightning"
      , "category": "Travel & Places"
      , "aliases": [
        "cloud_with_lightning"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌪️"
      , "description": "tornado"
      , "category": "Travel & Places"
      , "aliases": [
        "tornado"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌫️"
      , "description": "fog"
      , "category": "Travel & Places"
      , "aliases": [
        "fog"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌬️"
      , "description": "wind face"
      , "category": "Travel & Places"
      , "aliases": [
        "wind_face"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🌀"
      , "description": "cyclone"
      , "category": "Travel & Places"
      , "aliases": [
        "cyclone"
      ]
      , "tags": [
        "swirl"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌈"
      , "description": "rainbow"
      , "category": "Travel & Places"
      , "aliases": [
        "rainbow"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌂"
      , "description": "closed umbrella"
      , "category": "Travel & Places"
      , "aliases": [
        "closed_umbrella"
      ]
      , "tags": [
        "weather"
        , "rain"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☂️"
      , "description": "umbrella"
      , "category": "Travel & Places"
      , "aliases": [
        "open_umbrella"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☔"
      , "description": "umbrella with rain drops"
      , "category": "Travel & Places"
      , "aliases": [
        "umbrella"
      ]
      , "tags": [
        "rain"
        , "weather"
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛱️"
      , "description": "umbrella on ground"
      , "category": "Travel & Places"
      , "aliases": [
        "parasol_on_ground"
      ]
      , "tags": [
        "beach_umbrella"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⚡"
      , "description": "high voltage"
      , "category": "Travel & Places"
      , "aliases": [
        "zap"
      ]
      , "tags": [
        "lightning"
        , "thunder"
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❄️"
      , "description": "snowflake"
      , "category": "Travel & Places"
      , "aliases": [
        "snowflake"
      ]
      , "tags": [
        "winter"
        , "cold"
        , "weather"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☃️"
      , "description": "snowman"
      , "category": "Travel & Places"
      , "aliases": [
        "snowman_with_snow"
      ]
      , "tags": [
        "winter"
        , "christmas"
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⛄"
      , "description": "snowman without snow"
      , "category": "Travel & Places"
      , "aliases": [
        "snowman"
      ]
      , "tags": [
        "winter"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☄️"
      , "description": "comet"
      , "category": "Travel & Places"
      , "aliases": [
        "comet"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔥"
      , "description": "fire"
      , "category": "Travel & Places"
      , "aliases": [
        "fire"
      ]
      , "tags": [
        "burn"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💧"
      , "description": "droplet"
      , "category": "Travel & Places"
      , "aliases": [
        "droplet"
      ]
      , "tags": [
        "water"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🌊"
      , "description": "water wave"
      , "category": "Travel & Places"
      , "aliases": [
        "ocean"
      ]
      , "tags": [
        "sea"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎃"
      , "description": "jack-o-lantern"
      , "category": "Activities"
      , "aliases": [
        "jack_o_lantern"
      ]
      , "tags": [
        "halloween"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎄"
      , "description": "Christmas tree"
      , "category": "Activities"
      , "aliases": [
        "christmas_tree"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎆"
      , "description": "fireworks"
      , "category": "Activities"
      , "aliases": [
        "fireworks"
      ]
      , "tags": [
        "festival"
        , "celebration"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎇"
      , "description": "sparkler"
      , "category": "Activities"
      , "aliases": [
        "sparkler"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧨"
      , "description": "firecracker"
      , "category": "Activities"
      , "aliases": [
        "firecracker"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "✨"
      , "description": "sparkles"
      , "category": "Activities"
      , "aliases": [
        "sparkles"
      ]
      , "tags": [
        "shiny"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎈"
      , "description": "balloon"
      , "category": "Activities"
      , "aliases": [
        "balloon"
      ]
      , "tags": [
        "party"
        , "birthday"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎉"
      , "description": "party popper"
      , "category": "Activities"
      , "aliases": [
        "tada"
      ]
      , "tags": [
        "hooray"
        , "party"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎊"
      , "description": "confetti ball"
      , "category": "Activities"
      , "aliases": [
        "confetti_ball"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎋"
      , "description": "tanabata tree"
      , "category": "Activities"
      , "aliases": [
        "tanabata_tree"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎍"
      , "description": "pine decoration"
      , "category": "Activities"
      , "aliases": [
        "bamboo"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎎"
      , "description": "Japanese dolls"
      , "category": "Activities"
      , "aliases": [
        "dolls"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎏"
      , "description": "carp streamer"
      , "category": "Activities"
      , "aliases": [
        "flags"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎐"
      , "description": "wind chime"
      , "category": "Activities"
      , "aliases": [
        "wind_chime"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎑"
      , "description": "moon viewing ceremony"
      , "category": "Activities"
      , "aliases": [
        "rice_scene"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧧"
      , "description": "red envelope"
      , "category": "Activities"
      , "aliases": [
        "red_envelope"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🎀"
      , "description": "ribbon"
      , "category": "Activities"
      , "aliases": [
        "ribbon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎁"
      , "description": "wrapped gift"
      , "category": "Activities"
      , "aliases": [
        "gift"
      ]
      , "tags": [
        "present"
        , "birthday"
        , "christmas"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎗️"
      , "description": "reminder ribbon"
      , "category": "Activities"
      , "aliases": [
        "reminder_ribbon"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎟️"
      , "description": "admission tickets"
      , "category": "Activities"
      , "aliases": [
        "tickets"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎫"
      , "description": "ticket"
      , "category": "Activities"
      , "aliases": [
        "ticket"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎖️"
      , "description": "military medal"
      , "category": "Activities"
      , "aliases": [
        "medal_military"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏆"
      , "description": "trophy"
      , "category": "Activities"
      , "aliases": [
        "trophy"
      ]
      , "tags": [
        "award"
        , "contest"
        , "winner"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏅"
      , "description": "sports medal"
      , "category": "Activities"
      , "aliases": [
        "medal_sports"
      ]
      , "tags": [
        "gold"
        , "winner"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🥇"
      , "description": "1st place medal"
      , "category": "Activities"
      , "aliases": [
        "1st_place_medal"
      ]
      , "tags": [
        "gold"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥈"
      , "description": "2nd place medal"
      , "category": "Activities"
      , "aliases": [
        "2nd_place_medal"
      ]
      , "tags": [
        "silver"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥉"
      , "description": "3rd place medal"
      , "category": "Activities"
      , "aliases": [
        "3rd_place_medal"
      ]
      , "tags": [
        "bronze"
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "⚽"
      , "description": "soccer ball"
      , "category": "Activities"
      , "aliases": [
        "soccer"
      ]
      , "tags": [
        "sports"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚾"
      , "description": "baseball"
      , "category": "Activities"
      , "aliases": [
        "baseball"
      ]
      , "tags": [
        "sports"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥎"
      , "description": "softball"
      , "category": "Activities"
      , "aliases": [
        "softball"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏀"
      , "description": "basketball"
      , "category": "Activities"
      , "aliases": [
        "basketball"
      ]
      , "tags": [
        "sports"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏐"
      , "description": "volleyball"
      , "category": "Activities"
      , "aliases": [
        "volleyball"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏈"
      , "description": "american football"
      , "category": "Activities"
      , "aliases": [
        "football"
      ]
      , "tags": [
        "sports"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏉"
      , "description": "rugby football"
      , "category": "Activities"
      , "aliases": [
        "rugby_football"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎾"
      , "description": "tennis"
      , "category": "Activities"
      , "aliases": [
        "tennis"
      ]
      , "tags": [
        "sports"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥏"
      , "description": "flying disc"
      , "category": "Activities"
      , "aliases": [
        "flying_disc"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🎳"
      , "description": "bowling"
      , "category": "Activities"
      , "aliases": [
        "bowling"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏏"
      , "description": "cricket game"
      , "category": "Activities"
      , "aliases": [
        "cricket_game"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏑"
      , "description": "field hockey"
      , "category": "Activities"
      , "aliases": [
        "field_hockey"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏒"
      , "description": "ice hockey"
      , "category": "Activities"
      , "aliases": [
        "ice_hockey"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🥍"
      , "description": "lacrosse"
      , "category": "Activities"
      , "aliases": [
        "lacrosse"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏓"
      , "description": "ping pong"
      , "category": "Activities"
      , "aliases": [
        "ping_pong"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏸"
      , "description": "badminton"
      , "category": "Activities"
      , "aliases": [
        "badminton"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🥊"
      , "description": "boxing glove"
      , "category": "Activities"
      , "aliases": [
        "boxing_glove"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥋"
      , "description": "martial arts uniform"
      , "category": "Activities"
      , "aliases": [
        "martial_arts_uniform"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🥅"
      , "description": "goal net"
      , "category": "Activities"
      , "aliases": [
        "goal_net"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "⛳"
      , "description": "flag in hole"
      , "category": "Activities"
      , "aliases": [
        "golf"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛸️"
      , "description": "ice skate"
      , "category": "Activities"
      , "aliases": [
        "ice_skate"
      ]
      , "tags": [
        "skating"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎣"
      , "description": "fishing pole"
      , "category": "Activities"
      , "aliases": [
        "fishing_pole_and_fish"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🤿"
      , "description": "diving mask"
      , "category": "Activities"
      , "aliases": [
        "diving_mask"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🎽"
      , "description": "running shirt"
      , "category": "Activities"
      , "aliases": [
        "running_shirt_with_sash"
      ]
      , "tags": [
        "marathon"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎿"
      , "description": "skis"
      , "category": "Activities"
      , "aliases": [
        "ski"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛷"
      , "description": "sled"
      , "category": "Activities"
      , "aliases": [
        "sled"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥌"
      , "description": "curling stone"
      , "category": "Activities"
      , "aliases": [
        "curling_stone"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🎯"
      , "description": "bullseye"
      , "category": "Activities"
      , "aliases": [
        "dart"
      ]
      , "tags": [
        "target"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪀"
      , "description": "yo-yo"
      , "category": "Activities"
      , "aliases": [
        "yo_yo"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🪁"
      , "description": "kite"
      , "category": "Activities"
      , "aliases": [
        "kite"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🎱"
      , "description": "pool 8 ball"
      , "category": "Activities"
      , "aliases": [
        "8ball"
      ]
      , "tags": [
        "pool"
        , "billiards"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔮"
      , "description": "crystal ball"
      , "category": "Activities"
      , "aliases": [
        "crystal_ball"
      ]
      , "tags": [
        "fortune"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪄"
      , "description": "magic wand"
      , "category": "Activities"
      , "aliases": [
        "magic_wand"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧿"
      , "description": "nazar amulet"
      , "category": "Activities"
      , "aliases": [
        "nazar_amulet"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪬"
      , "description": "hamsa"
      , "category": "Activities"
      , "aliases": [
        "hamsa"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🎮"
      , "description": "video game"
      , "category": "Activities"
      , "aliases": [
        "video_game"
      ]
      , "tags": [
        "play"
        , "controller"
        , "console"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕹️"
      , "description": "joystick"
      , "category": "Activities"
      , "aliases": [
        "joystick"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎰"
      , "description": "slot machine"
      , "category": "Activities"
      , "aliases": [
        "slot_machine"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎲"
      , "description": "game die"
      , "category": "Activities"
      , "aliases": [
        "game_die"
      ]
      , "tags": [
        "dice"
        , "gambling"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧩"
      , "description": "puzzle piece"
      , "category": "Activities"
      , "aliases": [
        "jigsaw"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧸"
      , "description": "teddy bear"
      , "category": "Activities"
      , "aliases": [
        "teddy_bear"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪅"
      , "description": "piñata"
      , "category": "Activities"
      , "aliases": [
        "pinata"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪩"
      , "description": "mirror ball"
      , "category": "Activities"
      , "aliases": [
        "mirror_ball"
      ]
      , "tags": [
        "disco"
        , "party"
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🪆"
      , "description": "nesting dolls"
      , "category": "Activities"
      , "aliases": [
        "nesting_dolls"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "♠️"
      , "description": "spade suit"
      , "category": "Activities"
      , "aliases": [
        "spades"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♥️"
      , "description": "heart suit"
      , "category": "Activities"
      , "aliases": [
        "hearts"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♦️"
      , "description": "diamond suit"
      , "category": "Activities"
      , "aliases": [
        "diamonds"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♣️"
      , "description": "club suit"
      , "category": "Activities"
      , "aliases": [
        "clubs"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♟️"
      , "description": "chess pawn"
      , "category": "Activities"
      , "aliases": [
        "chess_pawn"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🃏"
      , "description": "joker"
      , "category": "Activities"
      , "aliases": [
        "black_joker"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🀄"
      , "description": "mahjong red dragon"
      , "category": "Activities"
      , "aliases": [
        "mahjong"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎴"
      , "description": "flower playing cards"
      , "category": "Activities"
      , "aliases": [
        "flower_playing_cards"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎭"
      , "description": "performing arts"
      , "category": "Activities"
      , "aliases": [
        "performing_arts"
      ]
      , "tags": [
        "theater"
        , "drama"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🖼️"
      , "description": "framed picture"
      , "category": "Activities"
      , "aliases": [
        "framed_picture"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎨"
      , "description": "artist palette"
      , "category": "Activities"
      , "aliases": [
        "art"
      ]
      , "tags": [
        "design"
        , "paint"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧵"
      , "description": "thread"
      , "category": "Activities"
      , "aliases": [
        "thread"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪡"
      , "description": "sewing needle"
      , "category": "Activities"
      , "aliases": [
        "sewing_needle"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧶"
      , "description": "yarn"
      , "category": "Activities"
      , "aliases": [
        "yarn"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪢"
      , "description": "knot"
      , "category": "Activities"
      , "aliases": [
        "knot"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "👓"
      , "description": "glasses"
      , "category": "Objects"
      , "aliases": [
        "eyeglasses"
      ]
      , "tags": [
        "glasses"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕶️"
      , "description": "sunglasses"
      , "category": "Objects"
      , "aliases": [
        "dark_sunglasses"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🥽"
      , "description": "goggles"
      , "category": "Objects"
      , "aliases": [
        "goggles"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥼"
      , "description": "lab coat"
      , "category": "Objects"
      , "aliases": [
        "lab_coat"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🦺"
      , "description": "safety vest"
      , "category": "Objects"
      , "aliases": [
        "safety_vest"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "👔"
      , "description": "necktie"
      , "category": "Objects"
      , "aliases": [
        "necktie"
      ]
      , "tags": [
        "shirt"
        , "formal"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👕"
      , "description": "t-shirt"
      , "category": "Objects"
      , "aliases": [
        "shirt"
        , "tshirt"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👖"
      , "description": "jeans"
      , "category": "Objects"
      , "aliases": [
        "jeans"
      ]
      , "tags": [
        "pants"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧣"
      , "description": "scarf"
      , "category": "Objects"
      , "aliases": [
        "scarf"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧤"
      , "description": "gloves"
      , "category": "Objects"
      , "aliases": [
        "gloves"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧥"
      , "description": "coat"
      , "category": "Objects"
      , "aliases": [
        "coat"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧦"
      , "description": "socks"
      , "category": "Objects"
      , "aliases": [
        "socks"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "👗"
      , "description": "dress"
      , "category": "Objects"
      , "aliases": [
        "dress"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👘"
      , "description": "kimono"
      , "category": "Objects"
      , "aliases": [
        "kimono"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥻"
      , "description": "sari"
      , "category": "Objects"
      , "aliases": [
        "sari"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🩱"
      , "description": "one-piece swimsuit"
      , "category": "Objects"
      , "aliases": [
        "one_piece_swimsuit"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🩲"
      , "description": "briefs"
      , "category": "Objects"
      , "aliases": [
        "swim_brief"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🩳"
      , "description": "shorts"
      , "category": "Objects"
      , "aliases": [
        "shorts"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "👙"
      , "description": "bikini"
      , "category": "Objects"
      , "aliases": [
        "bikini"
      ]
      , "tags": [
        "beach"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👚"
      , "description": "woman’s clothes"
      , "category": "Objects"
      , "aliases": [
        "womans_clothes"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👛"
      , "description": "purse"
      , "category": "Objects"
      , "aliases": [
        "purse"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👜"
      , "description": "handbag"
      , "category": "Objects"
      , "aliases": [
        "handbag"
      ]
      , "tags": [
        "bag"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👝"
      , "description": "clutch bag"
      , "category": "Objects"
      , "aliases": [
        "pouch"
      ]
      , "tags": [
        "bag"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛍️"
      , "description": "shopping bags"
      , "category": "Objects"
      , "aliases": [
        "shopping"
      ]
      , "tags": [
        "bags"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎒"
      , "description": "backpack"
      , "category": "Objects"
      , "aliases": [
        "school_satchel"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🩴"
      , "description": "thong sandal"
      , "category": "Objects"
      , "aliases": [
        "thong_sandal"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "👞"
      , "description": "man’s shoe"
      , "category": "Objects"
      , "aliases": [
        "mans_shoe"
        , "shoe"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👟"
      , "description": "running shoe"
      , "category": "Objects"
      , "aliases": [
        "athletic_shoe"
      ]
      , "tags": [
        "sneaker"
        , "sport"
        , "running"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🥾"
      , "description": "hiking boot"
      , "category": "Objects"
      , "aliases": [
        "hiking_boot"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🥿"
      , "description": "flat shoe"
      , "category": "Objects"
      , "aliases": [
        "flat_shoe"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "👠"
      , "description": "high-heeled shoe"
      , "category": "Objects"
      , "aliases": [
        "high_heel"
      ]
      , "tags": [
        "shoe"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👡"
      , "description": "woman’s sandal"
      , "category": "Objects"
      , "aliases": [
        "sandal"
      ]
      , "tags": [
        "shoe"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🩰"
      , "description": "ballet shoes"
      , "category": "Objects"
      , "aliases": [
        "ballet_shoes"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "👢"
      , "description": "woman’s boot"
      , "category": "Objects"
      , "aliases": [
        "boot"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👑"
      , "description": "crown"
      , "category": "Objects"
      , "aliases": [
        "crown"
      ]
      , "tags": [
        "king"
        , "queen"
        , "royal"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "👒"
      , "description": "woman’s hat"
      , "category": "Objects"
      , "aliases": [
        "womans_hat"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎩"
      , "description": "top hat"
      , "category": "Objects"
      , "aliases": [
        "tophat"
      ]
      , "tags": [
        "hat"
        , "classy"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎓"
      , "description": "graduation cap"
      , "category": "Objects"
      , "aliases": [
        "mortar_board"
      ]
      , "tags": [
        "education"
        , "college"
        , "university"
        , "graduation"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧢"
      , "description": "billed cap"
      , "category": "Objects"
      , "aliases": [
        "billed_cap"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪖"
      , "description": "military helmet"
      , "category": "Objects"
      , "aliases": [
        "military_helmet"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "⛑️"
      , "description": "rescue worker’s helmet"
      , "category": "Objects"
      , "aliases": [
        "rescue_worker_helmet"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📿"
      , "description": "prayer beads"
      , "category": "Objects"
      , "aliases": [
        "prayer_beads"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💄"
      , "description": "lipstick"
      , "category": "Objects"
      , "aliases": [
        "lipstick"
      ]
      , "tags": [
        "makeup"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💍"
      , "description": "ring"
      , "category": "Objects"
      , "aliases": [
        "ring"
      ]
      , "tags": [
        "wedding"
        , "marriage"
        , "engaged"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💎"
      , "description": "gem stone"
      , "category": "Objects"
      , "aliases": [
        "gem"
      ]
      , "tags": [
        "diamond"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔇"
      , "description": "muted speaker"
      , "category": "Objects"
      , "aliases": [
        "mute"
      ]
      , "tags": [
        "sound"
        , "volume"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔈"
      , "description": "speaker low volume"
      , "category": "Objects"
      , "aliases": [
        "speaker"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔉"
      , "description": "speaker medium volume"
      , "category": "Objects"
      , "aliases": [
        "sound"
      ]
      , "tags": [
        "volume"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔊"
      , "description": "speaker high volume"
      , "category": "Objects"
      , "aliases": [
        "loud_sound"
      ]
      , "tags": [
        "volume"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📢"
      , "description": "loudspeaker"
      , "category": "Objects"
      , "aliases": [
        "loudspeaker"
      ]
      , "tags": [
        "announcement"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📣"
      , "description": "megaphone"
      , "category": "Objects"
      , "aliases": [
        "mega"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📯"
      , "description": "postal horn"
      , "category": "Objects"
      , "aliases": [
        "postal_horn"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔔"
      , "description": "bell"
      , "category": "Objects"
      , "aliases": [
        "bell"
      ]
      , "tags": [
        "sound"
        , "notification"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔕"
      , "description": "bell with slash"
      , "category": "Objects"
      , "aliases": [
        "no_bell"
      ]
      , "tags": [
        "volume"
        , "off"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎼"
      , "description": "musical score"
      , "category": "Objects"
      , "aliases": [
        "musical_score"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎵"
      , "description": "musical note"
      , "category": "Objects"
      , "aliases": [
        "musical_note"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎶"
      , "description": "musical notes"
      , "category": "Objects"
      , "aliases": [
        "notes"
      ]
      , "tags": [
        "music"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎙️"
      , "description": "studio microphone"
      , "category": "Objects"
      , "aliases": [
        "studio_microphone"
      ]
      , "tags": [
        "podcast"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎚️"
      , "description": "level slider"
      , "category": "Objects"
      , "aliases": [
        "level_slider"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎛️"
      , "description": "control knobs"
      , "category": "Objects"
      , "aliases": [
        "control_knobs"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎤"
      , "description": "microphone"
      , "category": "Objects"
      , "aliases": [
        "microphone"
      ]
      , "tags": [
        "sing"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎧"
      , "description": "headphone"
      , "category": "Objects"
      , "aliases": [
        "headphones"
      ]
      , "tags": [
        "music"
        , "earphones"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📻"
      , "description": "radio"
      , "category": "Objects"
      , "aliases": [
        "radio"
      ]
      , "tags": [
        "podcast"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎷"
      , "description": "saxophone"
      , "category": "Objects"
      , "aliases": [
        "saxophone"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪗"
      , "description": "accordion"
      , "category": "Objects"
      , "aliases": [
        "accordion"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🎸"
      , "description": "guitar"
      , "category": "Objects"
      , "aliases": [
        "guitar"
      ]
      , "tags": [
        "rock"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎹"
      , "description": "musical keyboard"
      , "category": "Objects"
      , "aliases": [
        "musical_keyboard"
      ]
      , "tags": [
        "piano"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎺"
      , "description": "trumpet"
      , "category": "Objects"
      , "aliases": [
        "trumpet"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎻"
      , "description": "violin"
      , "category": "Objects"
      , "aliases": [
        "violin"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪕"
      , "description": "banjo"
      , "category": "Objects"
      , "aliases": [
        "banjo"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🥁"
      , "description": "drum"
      , "category": "Objects"
      , "aliases": [
        "drum"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🪘"
      , "description": "long drum"
      , "category": "Objects"
      , "aliases": [
        "long_drum"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "📱"
      , "description": "mobile phone"
      , "category": "Objects"
      , "aliases": [
        "iphone"
      ]
      , "tags": [
        "smartphone"
        , "mobile"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📲"
      , "description": "mobile phone with arrow"
      , "category": "Objects"
      , "aliases": [
        "calling"
      ]
      , "tags": [
        "call"
        , "incoming"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☎️"
      , "description": "telephone"
      , "category": "Objects"
      , "aliases": [
        "phone"
        , "telephone"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📞"
      , "description": "telephone receiver"
      , "category": "Objects"
      , "aliases": [
        "telephone_receiver"
      ]
      , "tags": [
        "phone"
        , "call"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📟"
      , "description": "pager"
      , "category": "Objects"
      , "aliases": [
        "pager"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📠"
      , "description": "fax machine"
      , "category": "Objects"
      , "aliases": [
        "fax"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔋"
      , "description": "battery"
      , "category": "Objects"
      , "aliases": [
        "battery"
      ]
      , "tags": [
        "power"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪫"
      , "description": "low battery"
      , "category": "Objects"
      , "aliases": [
        "low_battery"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🔌"
      , "description": "electric plug"
      , "category": "Objects"
      , "aliases": [
        "electric_plug"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💻"
      , "description": "laptop"
      , "category": "Objects"
      , "aliases": [
        "computer"
      ]
      , "tags": [
        "desktop"
        , "screen"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🖥️"
      , "description": "desktop computer"
      , "category": "Objects"
      , "aliases": [
        "desktop_computer"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖨️"
      , "description": "printer"
      , "category": "Objects"
      , "aliases": [
        "printer"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⌨️"
      , "description": "keyboard"
      , "category": "Objects"
      , "aliases": [
        "keyboard"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖱️"
      , "description": "computer mouse"
      , "category": "Objects"
      , "aliases": [
        "computer_mouse"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖲️"
      , "description": "trackball"
      , "category": "Objects"
      , "aliases": [
        "trackball"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💽"
      , "description": "computer disk"
      , "category": "Objects"
      , "aliases": [
        "minidisc"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💾"
      , "description": "floppy disk"
      , "category": "Objects"
      , "aliases": [
        "floppy_disk"
      ]
      , "tags": [
        "save"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💿"
      , "description": "optical disk"
      , "category": "Objects"
      , "aliases": [
        "cd"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📀"
      , "description": "dvd"
      , "category": "Objects"
      , "aliases": [
        "dvd"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧮"
      , "description": "abacus"
      , "category": "Objects"
      , "aliases": [
        "abacus"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🎥"
      , "description": "movie camera"
      , "category": "Objects"
      , "aliases": [
        "movie_camera"
      ]
      , "tags": [
        "film"
        , "video"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎞️"
      , "description": "film frames"
      , "category": "Objects"
      , "aliases": [
        "film_strip"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📽️"
      , "description": "film projector"
      , "category": "Objects"
      , "aliases": [
        "film_projector"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🎬"
      , "description": "clapper board"
      , "category": "Objects"
      , "aliases": [
        "clapper"
      ]
      , "tags": [
        "film"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📺"
      , "description": "television"
      , "category": "Objects"
      , "aliases": [
        "tv"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📷"
      , "description": "camera"
      , "category": "Objects"
      , "aliases": [
        "camera"
      ]
      , "tags": [
        "photo"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📸"
      , "description": "camera with flash"
      , "category": "Objects"
      , "aliases": [
        "camera_flash"
      ]
      , "tags": [
        "photo"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📹"
      , "description": "video camera"
      , "category": "Objects"
      , "aliases": [
        "video_camera"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📼"
      , "description": "videocassette"
      , "category": "Objects"
      , "aliases": [
        "vhs"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔍"
      , "description": "magnifying glass tilted left"
      , "category": "Objects"
      , "aliases": [
        "mag"
      ]
      , "tags": [
        "search"
        , "zoom"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔎"
      , "description": "magnifying glass tilted right"
      , "category": "Objects"
      , "aliases": [
        "mag_right"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🕯️"
      , "description": "candle"
      , "category": "Objects"
      , "aliases": [
        "candle"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💡"
      , "description": "light bulb"
      , "category": "Objects"
      , "aliases": [
        "bulb"
      ]
      , "tags": [
        "idea"
        , "light"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔦"
      , "description": "flashlight"
      , "category": "Objects"
      , "aliases": [
        "flashlight"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏮"
      , "description": "red paper lantern"
      , "category": "Objects"
      , "aliases": [
        "izakaya_lantern"
        , "lantern"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪔"
      , "description": "diya lamp"
      , "category": "Objects"
      , "aliases": [
        "diya_lamp"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "📔"
      , "description": "notebook with decorative cover"
      , "category": "Objects"
      , "aliases": [
        "notebook_with_decorative_cover"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📕"
      , "description": "closed book"
      , "category": "Objects"
      , "aliases": [
        "closed_book"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📖"
      , "description": "open book"
      , "category": "Objects"
      , "aliases": [
        "book"
        , "open_book"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📗"
      , "description": "green book"
      , "category": "Objects"
      , "aliases": [
        "green_book"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📘"
      , "description": "blue book"
      , "category": "Objects"
      , "aliases": [
        "blue_book"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📙"
      , "description": "orange book"
      , "category": "Objects"
      , "aliases": [
        "orange_book"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📚"
      , "description": "books"
      , "category": "Objects"
      , "aliases": [
        "books"
      ]
      , "tags": [
        "library"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📓"
      , "description": "notebook"
      , "category": "Objects"
      , "aliases": [
        "notebook"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📒"
      , "description": "ledger"
      , "category": "Objects"
      , "aliases": [
        "ledger"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📃"
      , "description": "page with curl"
      , "category": "Objects"
      , "aliases": [
        "page_with_curl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📜"
      , "description": "scroll"
      , "category": "Objects"
      , "aliases": [
        "scroll"
      ]
      , "tags": [
        "document"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📄"
      , "description": "page facing up"
      , "category": "Objects"
      , "aliases": [
        "page_facing_up"
      ]
      , "tags": [
        "document"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📰"
      , "description": "newspaper"
      , "category": "Objects"
      , "aliases": [
        "newspaper"
      ]
      , "tags": [
        "press"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗞️"
      , "description": "rolled-up newspaper"
      , "category": "Objects"
      , "aliases": [
        "newspaper_roll"
      ]
      , "tags": [
        "press"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📑"
      , "description": "bookmark tabs"
      , "category": "Objects"
      , "aliases": [
        "bookmark_tabs"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔖"
      , "description": "bookmark"
      , "category": "Objects"
      , "aliases": [
        "bookmark"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏷️"
      , "description": "label"
      , "category": "Objects"
      , "aliases": [
        "label"
      ]
      , "tags": [
        "tag"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "💰"
      , "description": "money bag"
      , "category": "Objects"
      , "aliases": [
        "moneybag"
      ]
      , "tags": [
        "dollar"
        , "cream"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪙"
      , "description": "coin"
      , "category": "Objects"
      , "aliases": [
        "coin"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "💴"
      , "description": "yen banknote"
      , "category": "Objects"
      , "aliases": [
        "yen"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💵"
      , "description": "dollar banknote"
      , "category": "Objects"
      , "aliases": [
        "dollar"
      ]
      , "tags": [
        "money"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💶"
      , "description": "euro banknote"
      , "category": "Objects"
      , "aliases": [
        "euro"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💷"
      , "description": "pound banknote"
      , "category": "Objects"
      , "aliases": [
        "pound"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💸"
      , "description": "money with wings"
      , "category": "Objects"
      , "aliases": [
        "money_with_wings"
      ]
      , "tags": [
        "dollar"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💳"
      , "description": "credit card"
      , "category": "Objects"
      , "aliases": [
        "credit_card"
      ]
      , "tags": [
        "subscription"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🧾"
      , "description": "receipt"
      , "category": "Objects"
      , "aliases": [
        "receipt"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "💹"
      , "description": "chart increasing with yen"
      , "category": "Objects"
      , "aliases": [
        "chart"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✉️"
      , "description": "envelope"
      , "category": "Objects"
      , "aliases": [
        "envelope"
      ]
      , "tags": [
        "letter"
        , "email"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📧"
      , "description": "e-mail"
      , "category": "Objects"
      , "aliases": [
        "email"
        , "e-mail"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📨"
      , "description": "incoming envelope"
      , "category": "Objects"
      , "aliases": [
        "incoming_envelope"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📩"
      , "description": "envelope with arrow"
      , "category": "Objects"
      , "aliases": [
        "envelope_with_arrow"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📤"
      , "description": "outbox tray"
      , "category": "Objects"
      , "aliases": [
        "outbox_tray"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📥"
      , "description": "inbox tray"
      , "category": "Objects"
      , "aliases": [
        "inbox_tray"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📦"
      , "description": "package"
      , "category": "Objects"
      , "aliases": [
        "package"
      ]
      , "tags": [
        "shipping"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📫"
      , "description": "closed mailbox with raised flag"
      , "category": "Objects"
      , "aliases": [
        "mailbox"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📪"
      , "description": "closed mailbox with lowered flag"
      , "category": "Objects"
      , "aliases": [
        "mailbox_closed"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📬"
      , "description": "open mailbox with raised flag"
      , "category": "Objects"
      , "aliases": [
        "mailbox_with_mail"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📭"
      , "description": "open mailbox with lowered flag"
      , "category": "Objects"
      , "aliases": [
        "mailbox_with_no_mail"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📮"
      , "description": "postbox"
      , "category": "Objects"
      , "aliases": [
        "postbox"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗳️"
      , "description": "ballot box with ballot"
      , "category": "Objects"
      , "aliases": [
        "ballot_box"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "✏️"
      , "description": "pencil"
      , "category": "Objects"
      , "aliases": [
        "pencil2"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✒️"
      , "description": "black nib"
      , "category": "Objects"
      , "aliases": [
        "black_nib"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🖋️"
      , "description": "fountain pen"
      , "category": "Objects"
      , "aliases": [
        "fountain_pen"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖊️"
      , "description": "pen"
      , "category": "Objects"
      , "aliases": [
        "pen"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖌️"
      , "description": "paintbrush"
      , "category": "Objects"
      , "aliases": [
        "paintbrush"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🖍️"
      , "description": "crayon"
      , "category": "Objects"
      , "aliases": [
        "crayon"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📝"
      , "description": "memo"
      , "category": "Objects"
      , "aliases": [
        "memo"
        , "pencil"
      ]
      , "tags": [
        "document"
        , "note"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💼"
      , "description": "briefcase"
      , "category": "Objects"
      , "aliases": [
        "briefcase"
      ]
      , "tags": [
        "business"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📁"
      , "description": "file folder"
      , "category": "Objects"
      , "aliases": [
        "file_folder"
      ]
      , "tags": [
        "directory"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📂"
      , "description": "open file folder"
      , "category": "Objects"
      , "aliases": [
        "open_file_folder"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗂️"
      , "description": "card index dividers"
      , "category": "Objects"
      , "aliases": [
        "card_index_dividers"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📅"
      , "description": "calendar"
      , "category": "Objects"
      , "aliases": [
        "date"
      ]
      , "tags": [
        "calendar"
        , "schedule"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📆"
      , "description": "tear-off calendar"
      , "category": "Objects"
      , "aliases": [
        "calendar"
      ]
      , "tags": [
        "schedule"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗒️"
      , "description": "spiral notepad"
      , "category": "Objects"
      , "aliases": [
        "spiral_notepad"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗓️"
      , "description": "spiral calendar"
      , "category": "Objects"
      , "aliases": [
        "spiral_calendar"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📇"
      , "description": "card index"
      , "category": "Objects"
      , "aliases": [
        "card_index"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📈"
      , "description": "chart increasing"
      , "category": "Objects"
      , "aliases": [
        "chart_with_upwards_trend"
      ]
      , "tags": [
        "graph"
        , "metrics"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📉"
      , "description": "chart decreasing"
      , "category": "Objects"
      , "aliases": [
        "chart_with_downwards_trend"
      ]
      , "tags": [
        "graph"
        , "metrics"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📊"
      , "description": "bar chart"
      , "category": "Objects"
      , "aliases": [
        "bar_chart"
      ]
      , "tags": [
        "stats"
        , "metrics"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📋"
      , "description": "clipboard"
      , "category": "Objects"
      , "aliases": [
        "clipboard"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📌"
      , "description": "pushpin"
      , "category": "Objects"
      , "aliases": [
        "pushpin"
      ]
      , "tags": [
        "location"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📍"
      , "description": "round pushpin"
      , "category": "Objects"
      , "aliases": [
        "round_pushpin"
      ]
      , "tags": [
        "location"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📎"
      , "description": "paperclip"
      , "category": "Objects"
      , "aliases": [
        "paperclip"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🖇️"
      , "description": "linked paperclips"
      , "category": "Objects"
      , "aliases": [
        "paperclips"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "📏"
      , "description": "straight ruler"
      , "category": "Objects"
      , "aliases": [
        "straight_ruler"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📐"
      , "description": "triangular ruler"
      , "category": "Objects"
      , "aliases": [
        "triangular_ruler"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✂️"
      , "description": "scissors"
      , "category": "Objects"
      , "aliases": [
        "scissors"
      ]
      , "tags": [
        "cut"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗃️"
      , "description": "card file box"
      , "category": "Objects"
      , "aliases": [
        "card_file_box"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗄️"
      , "description": "file cabinet"
      , "category": "Objects"
      , "aliases": [
        "file_cabinet"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗑️"
      , "description": "wastebasket"
      , "category": "Objects"
      , "aliases": [
        "wastebasket"
      ]
      , "tags": [
        "trash"
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔒"
      , "description": "locked"
      , "category": "Objects"
      , "aliases": [
        "lock"
      ]
      , "tags": [
        "security"
        , "private"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔓"
      , "description": "unlocked"
      , "category": "Objects"
      , "aliases": [
        "unlock"
      ]
      , "tags": [
        "security"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔏"
      , "description": "locked with pen"
      , "category": "Objects"
      , "aliases": [
        "lock_with_ink_pen"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔐"
      , "description": "locked with key"
      , "category": "Objects"
      , "aliases": [
        "closed_lock_with_key"
      ]
      , "tags": [
        "security"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔑"
      , "description": "key"
      , "category": "Objects"
      , "aliases": [
        "key"
      ]
      , "tags": [
        "lock"
        , "password"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🗝️"
      , "description": "old key"
      , "category": "Objects"
      , "aliases": [
        "old_key"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔨"
      , "description": "hammer"
      , "category": "Objects"
      , "aliases": [
        "hammer"
      ]
      , "tags": [
        "tool"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪓"
      , "description": "axe"
      , "category": "Objects"
      , "aliases": [
        "axe"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "⛏️"
      , "description": "pick"
      , "category": "Objects"
      , "aliases": [
        "pick"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⚒️"
      , "description": "hammer and pick"
      , "category": "Objects"
      , "aliases": [
        "hammer_and_pick"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛠️"
      , "description": "hammer and wrench"
      , "category": "Objects"
      , "aliases": [
        "hammer_and_wrench"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗡️"
      , "description": "dagger"
      , "category": "Objects"
      , "aliases": [
        "dagger"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⚔️"
      , "description": "crossed swords"
      , "category": "Objects"
      , "aliases": [
        "crossed_swords"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔫"
      , "description": "water pistol"
      , "category": "Objects"
      , "aliases": [
        "gun"
      ]
      , "tags": [
        "shoot"
        , "weapon"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪃"
      , "description": "boomerang"
      , "category": "Objects"
      , "aliases": [
        "boomerang"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🏹"
      , "description": "bow and arrow"
      , "category": "Objects"
      , "aliases": [
        "bow_and_arrow"
      ]
      , "tags": [
        "archery"
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛡️"
      , "description": "shield"
      , "category": "Objects"
      , "aliases": [
        "shield"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🪚"
      , "description": "carpentry saw"
      , "category": "Objects"
      , "aliases": [
        "carpentry_saw"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🔧"
      , "description": "wrench"
      , "category": "Objects"
      , "aliases": [
        "wrench"
      ]
      , "tags": [
        "tool"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪛"
      , "description": "screwdriver"
      , "category": "Objects"
      , "aliases": [
        "screwdriver"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🔩"
      , "description": "nut and bolt"
      , "category": "Objects"
      , "aliases": [
        "nut_and_bolt"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚙️"
      , "description": "gear"
      , "category": "Objects"
      , "aliases": [
        "gear"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗜️"
      , "description": "clamp"
      , "category": "Objects"
      , "aliases": [
        "clamp"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⚖️"
      , "description": "balance scale"
      , "category": "Objects"
      , "aliases": [
        "balance_scale"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🦯"
      , "description": "white cane"
      , "category": "Objects"
      , "aliases": [
        "probing_cane"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🔗"
      , "description": "link"
      , "category": "Objects"
      , "aliases": [
        "link"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛓️"
      , "description": "chains"
      , "category": "Objects"
      , "aliases": [
        "chains"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🪝"
      , "description": "hook"
      , "category": "Objects"
      , "aliases": [
        "hook"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧰"
      , "description": "toolbox"
      , "category": "Objects"
      , "aliases": [
        "toolbox"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧲"
      , "description": "magnet"
      , "category": "Objects"
      , "aliases": [
        "magnet"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪜"
      , "description": "ladder"
      , "category": "Objects"
      , "aliases": [
        "ladder"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "⚗️"
      , "description": "alembic"
      , "category": "Objects"
      , "aliases": [
        "alembic"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🧪"
      , "description": "test tube"
      , "category": "Objects"
      , "aliases": [
        "test_tube"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧫"
      , "description": "petri dish"
      , "category": "Objects"
      , "aliases": [
        "petri_dish"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧬"
      , "description": "dna"
      , "category": "Objects"
      , "aliases": [
        "dna"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🔬"
      , "description": "microscope"
      , "category": "Objects"
      , "aliases": [
        "microscope"
      ]
      , "tags": [
        "science"
        , "laboratory"
        , "investigate"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔭"
      , "description": "telescope"
      , "category": "Objects"
      , "aliases": [
        "telescope"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📡"
      , "description": "satellite antenna"
      , "category": "Objects"
      , "aliases": [
        "satellite"
      ]
      , "tags": [
        "signal"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💉"
      , "description": "syringe"
      , "category": "Objects"
      , "aliases": [
        "syringe"
      ]
      , "tags": [
        "health"
        , "hospital"
        , "needle"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🩸"
      , "description": "drop of blood"
      , "category": "Objects"
      , "aliases": [
        "drop_of_blood"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "💊"
      , "description": "pill"
      , "category": "Objects"
      , "aliases": [
        "pill"
      ]
      , "tags": [
        "health"
        , "medicine"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🩹"
      , "description": "adhesive bandage"
      , "category": "Objects"
      , "aliases": [
        "adhesive_bandage"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🩼"
      , "description": "crutch"
      , "category": "Objects"
      , "aliases": [
        "crutch"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🩺"
      , "description": "stethoscope"
      , "category": "Objects"
      , "aliases": [
        "stethoscope"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🩻"
      , "description": "x-ray"
      , "category": "Objects"
      , "aliases": [
        "x_ray"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🚪"
      , "description": "door"
      , "category": "Objects"
      , "aliases": [
        "door"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛗"
      , "description": "elevator"
      , "category": "Objects"
      , "aliases": [
        "elevator"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪞"
      , "description": "mirror"
      , "category": "Objects"
      , "aliases": [
        "mirror"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪟"
      , "description": "window"
      , "category": "Objects"
      , "aliases": [
        "window"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🛏️"
      , "description": "bed"
      , "category": "Objects"
      , "aliases": [
        "bed"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🛋️"
      , "description": "couch and lamp"
      , "category": "Objects"
      , "aliases": [
        "couch_and_lamp"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🪑"
      , "description": "chair"
      , "category": "Objects"
      , "aliases": [
        "chair"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🚽"
      , "description": "toilet"
      , "category": "Objects"
      , "aliases": [
        "toilet"
      ]
      , "tags": [
        "wc"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪠"
      , "description": "plunger"
      , "category": "Objects"
      , "aliases": [
        "plunger"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🚿"
      , "description": "shower"
      , "category": "Objects"
      , "aliases": [
        "shower"
      ]
      , "tags": [
        "bath"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛁"
      , "description": "bathtub"
      , "category": "Objects"
      , "aliases": [
        "bathtub"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪤"
      , "description": "mouse trap"
      , "category": "Objects"
      , "aliases": [
        "mouse_trap"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪒"
      , "description": "razor"
      , "category": "Objects"
      , "aliases": [
        "razor"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🧴"
      , "description": "lotion bottle"
      , "category": "Objects"
      , "aliases": [
        "lotion_bottle"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧷"
      , "description": "safety pin"
      , "category": "Objects"
      , "aliases": [
        "safety_pin"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧹"
      , "description": "broom"
      , "category": "Objects"
      , "aliases": [
        "broom"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧺"
      , "description": "basket"
      , "category": "Objects"
      , "aliases": [
        "basket"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧻"
      , "description": "roll of paper"
      , "category": "Objects"
      , "aliases": [
        "roll_of_paper"
      ]
      , "tags": [
        "toilet"
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🪣"
      , "description": "bucket"
      , "category": "Objects"
      , "aliases": [
        "bucket"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧼"
      , "description": "soap"
      , "category": "Objects"
      , "aliases": [
        "soap"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🫧"
      , "description": "bubbles"
      , "category": "Objects"
      , "aliases": [
        "bubbles"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🪥"
      , "description": "toothbrush"
      , "category": "Objects"
      , "aliases": [
        "toothbrush"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🧽"
      , "description": "sponge"
      , "category": "Objects"
      , "aliases": [
        "sponge"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🧯"
      , "description": "fire extinguisher"
      , "category": "Objects"
      , "aliases": [
        "fire_extinguisher"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🛒"
      , "description": "shopping cart"
      , "category": "Objects"
      , "aliases": [
        "shopping_cart"
      ]
      , "tags": [
      ]
      , "unicode_version": "9.0"
      , "ios_version": "10.2"
    }
    , {
      "emoji": "🚬"
      , "description": "cigarette"
      , "category": "Objects"
      , "aliases": [
        "smoking"
      ]
      , "tags": [
        "cigarette"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚰️"
      , "description": "coffin"
      , "category": "Objects"
      , "aliases": [
        "coffin"
      ]
      , "tags": [
        "funeral"
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🪦"
      , "description": "headstone"
      , "category": "Objects"
      , "aliases": [
        "headstone"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "⚱️"
      , "description": "funeral urn"
      , "category": "Objects"
      , "aliases": [
        "funeral_urn"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🗿"
      , "description": "moai"
      , "category": "Objects"
      , "aliases": [
        "moyai"
      ]
      , "tags": [
        "stone"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🪧"
      , "description": "placard"
      , "category": "Objects"
      , "aliases": [
        "placard"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🪪"
      , "description": "identification card"
      , "category": "Objects"
      , "aliases": [
        "identification_card"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "🏧"
      , "description": "ATM sign"
      , "category": "Symbols"
      , "aliases": [
        "atm"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚮"
      , "description": "litter in bin sign"
      , "category": "Symbols"
      , "aliases": [
        "put_litter_in_its_place"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚰"
      , "description": "potable water"
      , "category": "Symbols"
      , "aliases": [
        "potable_water"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♿"
      , "description": "wheelchair symbol"
      , "category": "Symbols"
      , "aliases": [
        "wheelchair"
      ]
      , "tags": [
        "accessibility"
      ]
      , "unicode_version": "4.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚹"
      , "description": "men’s room"
      , "category": "Symbols"
      , "aliases": [
        "mens"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚺"
      , "description": "women’s room"
      , "category": "Symbols"
      , "aliases": [
        "womens"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚻"
      , "description": "restroom"
      , "category": "Symbols"
      , "aliases": [
        "restroom"
      ]
      , "tags": [
        "toilet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚼"
      , "description": "baby symbol"
      , "category": "Symbols"
      , "aliases": [
        "baby_symbol"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚾"
      , "description": "water closet"
      , "category": "Symbols"
      , "aliases": [
        "wc"
      ]
      , "tags": [
        "toilet"
        , "restroom"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛂"
      , "description": "passport control"
      , "category": "Symbols"
      , "aliases": [
        "passport_control"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛃"
      , "description": "customs"
      , "category": "Symbols"
      , "aliases": [
        "customs"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛄"
      , "description": "baggage claim"
      , "category": "Symbols"
      , "aliases": [
        "baggage_claim"
      ]
      , "tags": [
        "airport"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛅"
      , "description": "left luggage"
      , "category": "Symbols"
      , "aliases": [
        "left_luggage"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚠️"
      , "description": "warning"
      , "category": "Symbols"
      , "aliases": [
        "warning"
      ]
      , "tags": [
        "wip"
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚸"
      , "description": "children crossing"
      , "category": "Symbols"
      , "aliases": [
        "children_crossing"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛔"
      , "description": "no entry"
      , "category": "Symbols"
      , "aliases": [
        "no_entry"
      ]
      , "tags": [
        "limit"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚫"
      , "description": "prohibited"
      , "category": "Symbols"
      , "aliases": [
        "no_entry_sign"
      ]
      , "tags": [
        "block"
        , "forbidden"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚳"
      , "description": "no bicycles"
      , "category": "Symbols"
      , "aliases": [
        "no_bicycles"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚭"
      , "description": "no smoking"
      , "category": "Symbols"
      , "aliases": [
        "no_smoking"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚯"
      , "description": "no littering"
      , "category": "Symbols"
      , "aliases": [
        "do_not_litter"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚱"
      , "description": "non-potable water"
      , "category": "Symbols"
      , "aliases": [
        "non-potable_water"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚷"
      , "description": "no pedestrians"
      , "category": "Symbols"
      , "aliases": [
        "no_pedestrians"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📵"
      , "description": "no mobile phones"
      , "category": "Symbols"
      , "aliases": [
        "no_mobile_phones"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔞"
      , "description": "no one under eighteen"
      , "category": "Symbols"
      , "aliases": [
        "underage"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☢️"
      , "description": "radioactive"
      , "category": "Symbols"
      , "aliases": [
        "radioactive"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☣️"
      , "description": "biohazard"
      , "category": "Symbols"
      , "aliases": [
        "biohazard"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⬆️"
      , "description": "up arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_up"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↗️"
      , "description": "up-right arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_upper_right"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➡️"
      , "description": "right arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_right"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↘️"
      , "description": "down-right arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_lower_right"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⬇️"
      , "description": "down arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_down"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↙️"
      , "description": "down-left arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_lower_left"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⬅️"
      , "description": "left arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_left"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↖️"
      , "description": "up-left arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_upper_left"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↕️"
      , "description": "up-down arrow"
      , "category": "Symbols"
      , "aliases": [
        "arrow_up_down"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↔️"
      , "description": "left-right arrow"
      , "category": "Symbols"
      , "aliases": [
        "left_right_arrow"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↩️"
      , "description": "right arrow curving left"
      , "category": "Symbols"
      , "aliases": [
        "leftwards_arrow_with_hook"
      ]
      , "tags": [
        "return"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "↪️"
      , "description": "left arrow curving right"
      , "category": "Symbols"
      , "aliases": [
        "arrow_right_hook"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⤴️"
      , "description": "right arrow curving up"
      , "category": "Symbols"
      , "aliases": [
        "arrow_heading_up"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⤵️"
      , "description": "right arrow curving down"
      , "category": "Symbols"
      , "aliases": [
        "arrow_heading_down"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔃"
      , "description": "clockwise vertical arrows"
      , "category": "Symbols"
      , "aliases": [
        "arrows_clockwise"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔄"
      , "description": "counterclockwise arrows button"
      , "category": "Symbols"
      , "aliases": [
        "arrows_counterclockwise"
      ]
      , "tags": [
        "sync"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔙"
      , "description": "BACK arrow"
      , "category": "Symbols"
      , "aliases": [
        "back"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔚"
      , "description": "END arrow"
      , "category": "Symbols"
      , "aliases": [
        "end"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔛"
      , "description": "ON! arrow"
      , "category": "Symbols"
      , "aliases": [
        "on"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔜"
      , "description": "SOON arrow"
      , "category": "Symbols"
      , "aliases": [
        "soon"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔝"
      , "description": "TOP arrow"
      , "category": "Symbols"
      , "aliases": [
        "top"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🛐"
      , "description": "place of worship"
      , "category": "Symbols"
      , "aliases": [
        "place_of_worship"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⚛️"
      , "description": "atom symbol"
      , "category": "Symbols"
      , "aliases": [
        "atom_symbol"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕉️"
      , "description": "om"
      , "category": "Symbols"
      , "aliases": [
        "om"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "✡️"
      , "description": "star of David"
      , "category": "Symbols"
      , "aliases": [
        "star_of_david"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☸️"
      , "description": "wheel of dharma"
      , "category": "Symbols"
      , "aliases": [
        "wheel_of_dharma"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☯️"
      , "description": "yin yang"
      , "category": "Symbols"
      , "aliases": [
        "yin_yang"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "✝️"
      , "description": "latin cross"
      , "category": "Symbols"
      , "aliases": [
        "latin_cross"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☦️"
      , "description": "orthodox cross"
      , "category": "Symbols"
      , "aliases": [
        "orthodox_cross"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☪️"
      , "description": "star and crescent"
      , "category": "Symbols"
      , "aliases": [
        "star_and_crescent"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "☮️"
      , "description": "peace symbol"
      , "category": "Symbols"
      , "aliases": [
        "peace_symbol"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🕎"
      , "description": "menorah"
      , "category": "Symbols"
      , "aliases": [
        "menorah"
      ]
      , "tags": [
      ]
      , "unicode_version": "8.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔯"
      , "description": "dotted six-pointed star"
      , "category": "Symbols"
      , "aliases": [
        "six_pointed_star"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♈"
      , "description": "Aries"
      , "category": "Symbols"
      , "aliases": [
        "aries"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♉"
      , "description": "Taurus"
      , "category": "Symbols"
      , "aliases": [
        "taurus"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♊"
      , "description": "Gemini"
      , "category": "Symbols"
      , "aliases": [
        "gemini"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♋"
      , "description": "Cancer"
      , "category": "Symbols"
      , "aliases": [
        "cancer"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♌"
      , "description": "Leo"
      , "category": "Symbols"
      , "aliases": [
        "leo"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♍"
      , "description": "Virgo"
      , "category": "Symbols"
      , "aliases": [
        "virgo"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♎"
      , "description": "Libra"
      , "category": "Symbols"
      , "aliases": [
        "libra"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♏"
      , "description": "Scorpio"
      , "category": "Symbols"
      , "aliases": [
        "scorpius"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♐"
      , "description": "Sagittarius"
      , "category": "Symbols"
      , "aliases": [
        "sagittarius"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♑"
      , "description": "Capricorn"
      , "category": "Symbols"
      , "aliases": [
        "capricorn"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♒"
      , "description": "Aquarius"
      , "category": "Symbols"
      , "aliases": [
        "aquarius"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♓"
      , "description": "Pisces"
      , "category": "Symbols"
      , "aliases": [
        "pisces"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⛎"
      , "description": "Ophiuchus"
      , "category": "Symbols"
      , "aliases": [
        "ophiuchus"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔀"
      , "description": "shuffle tracks button"
      , "category": "Symbols"
      , "aliases": [
        "twisted_rightwards_arrows"
      ]
      , "tags": [
        "shuffle"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔁"
      , "description": "repeat button"
      , "category": "Symbols"
      , "aliases": [
        "repeat"
      ]
      , "tags": [
        "loop"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔂"
      , "description": "repeat single button"
      , "category": "Symbols"
      , "aliases": [
        "repeat_one"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "▶️"
      , "description": "play button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_forward"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏩"
      , "description": "fast-forward button"
      , "category": "Symbols"
      , "aliases": [
        "fast_forward"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏭️"
      , "description": "next track button"
      , "category": "Symbols"
      , "aliases": [
        "next_track_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⏯️"
      , "description": "play or pause button"
      , "category": "Symbols"
      , "aliases": [
        "play_or_pause_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "◀️"
      , "description": "reverse button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_backward"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏪"
      , "description": "fast reverse button"
      , "category": "Symbols"
      , "aliases": [
        "rewind"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏮️"
      , "description": "last track button"
      , "category": "Symbols"
      , "aliases": [
        "previous_track_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔼"
      , "description": "upwards button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_up_small"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏫"
      , "description": "fast up button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_double_up"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔽"
      , "description": "downwards button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_down_small"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏬"
      , "description": "fast down button"
      , "category": "Symbols"
      , "aliases": [
        "arrow_double_down"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⏸️"
      , "description": "pause button"
      , "category": "Symbols"
      , "aliases": [
        "pause_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⏹️"
      , "description": "stop button"
      , "category": "Symbols"
      , "aliases": [
        "stop_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⏺️"
      , "description": "record button"
      , "category": "Symbols"
      , "aliases": [
        "record_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "⏏️"
      , "description": "eject button"
      , "category": "Symbols"
      , "aliases": [
        "eject_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🎦"
      , "description": "cinema"
      , "category": "Symbols"
      , "aliases": [
        "cinema"
      ]
      , "tags": [
        "film"
        , "movie"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔅"
      , "description": "dim button"
      , "category": "Symbols"
      , "aliases": [
        "low_brightness"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔆"
      , "description": "bright button"
      , "category": "Symbols"
      , "aliases": [
        "high_brightness"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📶"
      , "description": "antenna bars"
      , "category": "Symbols"
      , "aliases": [
        "signal_strength"
      ]
      , "tags": [
        "wifi"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📳"
      , "description": "vibration mode"
      , "category": "Symbols"
      , "aliases": [
        "vibration_mode"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📴"
      , "description": "mobile phone off"
      , "category": "Symbols"
      , "aliases": [
        "mobile_phone_off"
      ]
      , "tags": [
        "mute"
        , "off"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "♀️"
      , "description": "female sign"
      , "category": "Symbols"
      , "aliases": [
        "female_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "♂️"
      , "description": "male sign"
      , "category": "Symbols"
      , "aliases": [
        "male_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "⚧️"
      , "description": "transgender symbol"
      , "category": "Symbols"
      , "aliases": [
        "transgender_symbol"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "✖️"
      , "description": "multiply"
      , "category": "Symbols"
      , "aliases": [
        "heavy_multiplication_x"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➕"
      , "description": "plus"
      , "category": "Symbols"
      , "aliases": [
        "heavy_plus_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➖"
      , "description": "minus"
      , "category": "Symbols"
      , "aliases": [
        "heavy_minus_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➗"
      , "description": "divide"
      , "category": "Symbols"
      , "aliases": [
        "heavy_division_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🟰"
      , "description": "heavy equals sign"
      , "category": "Symbols"
      , "aliases": [
        "heavy_equals_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "14.0"
      , "ios_version": "15.4"
    }
    , {
      "emoji": "♾️"
      , "description": "infinity"
      , "category": "Symbols"
      , "aliases": [
        "infinity"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "‼️"
      , "description": "double exclamation mark"
      , "category": "Symbols"
      , "aliases": [
        "bangbang"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⁉️"
      , "description": "exclamation question mark"
      , "category": "Symbols"
      , "aliases": [
        "interrobang"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❓"
      , "description": "red question mark"
      , "category": "Symbols"
      , "aliases": [
        "question"
      ]
      , "tags": [
        "confused"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❔"
      , "description": "white question mark"
      , "category": "Symbols"
      , "aliases": [
        "grey_question"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❕"
      , "description": "white exclamation mark"
      , "category": "Symbols"
      , "aliases": [
        "grey_exclamation"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❗"
      , "description": "red exclamation mark"
      , "category": "Symbols"
      , "aliases": [
        "exclamation"
        , "heavy_exclamation_mark"
      ]
      , "tags": [
        "bang"
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "〰️"
      , "description": "wavy dash"
      , "category": "Symbols"
      , "aliases": [
        "wavy_dash"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💱"
      , "description": "currency exchange"
      , "category": "Symbols"
      , "aliases": [
        "currency_exchange"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💲"
      , "description": "heavy dollar sign"
      , "category": "Symbols"
      , "aliases": [
        "heavy_dollar_sign"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚕️"
      , "description": "medical symbol"
      , "category": "Symbols"
      , "aliases": [
        "medical_symbol"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "♻️"
      , "description": "recycling symbol"
      , "category": "Symbols"
      , "aliases": [
        "recycle"
      ]
      , "tags": [
        "environment"
        , "green"
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚜️"
      , "description": "fleur-de-lis"
      , "category": "Symbols"
      , "aliases": [
        "fleur_de_lis"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🔱"
      , "description": "trident emblem"
      , "category": "Symbols"
      , "aliases": [
        "trident"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "📛"
      , "description": "name badge"
      , "category": "Symbols"
      , "aliases": [
        "name_badge"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔰"
      , "description": "Japanese symbol for beginner"
      , "category": "Symbols"
      , "aliases": [
        "beginner"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⭕"
      , "description": "hollow red circle"
      , "category": "Symbols"
      , "aliases": [
        "o"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✅"
      , "description": "check mark button"
      , "category": "Symbols"
      , "aliases": [
        "white_check_mark"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "☑️"
      , "description": "check box with check"
      , "category": "Symbols"
      , "aliases": [
        "ballot_box_with_check"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✔️"
      , "description": "check mark"
      , "category": "Symbols"
      , "aliases": [
        "heavy_check_mark"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❌"
      , "description": "cross mark"
      , "category": "Symbols"
      , "aliases": [
        "x"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❎"
      , "description": "cross mark button"
      , "category": "Symbols"
      , "aliases": [
        "negative_squared_cross_mark"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➰"
      , "description": "curly loop"
      , "category": "Symbols"
      , "aliases": [
        "curly_loop"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "➿"
      , "description": "double curly loop"
      , "category": "Symbols"
      , "aliases": [
        "loop"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "〽️"
      , "description": "part alternation mark"
      , "category": "Symbols"
      , "aliases": [
        "part_alternation_mark"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✳️"
      , "description": "eight-spoked asterisk"
      , "category": "Symbols"
      , "aliases": [
        "eight_spoked_asterisk"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "✴️"
      , "description": "eight-pointed star"
      , "category": "Symbols"
      , "aliases": [
        "eight_pointed_black_star"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "❇️"
      , "description": "sparkle"
      , "category": "Symbols"
      , "aliases": [
        "sparkle"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "©️"
      , "description": "copyright"
      , "category": "Symbols"
      , "aliases": [
        "copyright"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "®️"
      , "description": "registered"
      , "category": "Symbols"
      , "aliases": [
        "registered"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "™️"
      , "description": "trade mark"
      , "category": "Symbols"
      , "aliases": [
        "tm"
      ]
      , "tags": [
        "trademark"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "#️⃣"
      , "description": "keycap: #"
      , "category": "Symbols"
      , "aliases": [
        "hash"
      ]
      , "tags": [
        "number"
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "*️⃣"
      , "description": "keycap: *"
      , "category": "Symbols"
      , "aliases": [
        "asterisk"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "9.1"
    }
    , {
      "emoji": "0️⃣"
      , "description": "keycap: 0"
      , "category": "Symbols"
      , "aliases": [
        "zero"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "1️⃣"
      , "description": "keycap: 1"
      , "category": "Symbols"
      , "aliases": [
        "one"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "2️⃣"
      , "description": "keycap: 2"
      , "category": "Symbols"
      , "aliases": [
        "two"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "3️⃣"
      , "description": "keycap: 3"
      , "category": "Symbols"
      , "aliases": [
        "three"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "4️⃣"
      , "description": "keycap: 4"
      , "category": "Symbols"
      , "aliases": [
        "four"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "5️⃣"
      , "description": "keycap: 5"
      , "category": "Symbols"
      , "aliases": [
        "five"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "6️⃣"
      , "description": "keycap: 6"
      , "category": "Symbols"
      , "aliases": [
        "six"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "7️⃣"
      , "description": "keycap: 7"
      , "category": "Symbols"
      , "aliases": [
        "seven"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "8️⃣"
      , "description": "keycap: 8"
      , "category": "Symbols"
      , "aliases": [
        "eight"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "9️⃣"
      , "description": "keycap: 9"
      , "category": "Symbols"
      , "aliases": [
        "nine"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔟"
      , "description": "keycap: 10"
      , "category": "Symbols"
      , "aliases": [
        "keycap_ten"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔠"
      , "description": "input latin uppercase"
      , "category": "Symbols"
      , "aliases": [
        "capital_abcd"
      ]
      , "tags": [
        "letters"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔡"
      , "description": "input latin lowercase"
      , "category": "Symbols"
      , "aliases": [
        "abcd"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔢"
      , "description": "input numbers"
      , "category": "Symbols"
      , "aliases": [
        "1234"
      ]
      , "tags": [
        "numbers"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔣"
      , "description": "input symbols"
      , "category": "Symbols"
      , "aliases": [
        "symbols"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔤"
      , "description": "input latin letters"
      , "category": "Symbols"
      , "aliases": [
        "abc"
      ]
      , "tags": [
        "alphabet"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🅰️"
      , "description": "A button (blood type)"
      , "category": "Symbols"
      , "aliases": [
        "a"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆎"
      , "description": "AB button (blood type)"
      , "category": "Symbols"
      , "aliases": [
        "ab"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🅱️"
      , "description": "B button (blood type)"
      , "category": "Symbols"
      , "aliases": [
        "b"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆑"
      , "description": "CL button"
      , "category": "Symbols"
      , "aliases": [
        "cl"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆒"
      , "description": "COOL button"
      , "category": "Symbols"
      , "aliases": [
        "cool"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆓"
      , "description": "FREE button"
      , "category": "Symbols"
      , "aliases": [
        "free"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "ℹ️"
      , "description": "information"
      , "category": "Symbols"
      , "aliases": [
        "information_source"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆔"
      , "description": "ID button"
      , "category": "Symbols"
      , "aliases": [
        "id"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "Ⓜ️"
      , "description": "circled M"
      , "category": "Symbols"
      , "aliases": [
        "m"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆕"
      , "description": "NEW button"
      , "category": "Symbols"
      , "aliases": [
        "new"
      ]
      , "tags": [
        "fresh"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆖"
      , "description": "NG button"
      , "category": "Symbols"
      , "aliases": [
        "ng"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🅾️"
      , "description": "O button (blood type)"
      , "category": "Symbols"
      , "aliases": [
        "o2"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆗"
      , "description": "OK button"
      , "category": "Symbols"
      , "aliases": [
        "ok"
      ]
      , "tags": [
        "yes"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🅿️"
      , "description": "P button"
      , "category": "Symbols"
      , "aliases": [
        "parking"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆘"
      , "description": "SOS button"
      , "category": "Symbols"
      , "aliases": [
        "sos"
      ]
      , "tags": [
        "help"
        , "emergency"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆙"
      , "description": "UP! button"
      , "category": "Symbols"
      , "aliases": [
        "up"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🆚"
      , "description": "VS button"
      , "category": "Symbols"
      , "aliases": [
        "vs"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈁"
      , "description": "Japanese “here” button"
      , "category": "Symbols"
      , "aliases": [
        "koko"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈂️"
      , "description": "Japanese “service charge” button"
      , "category": "Symbols"
      , "aliases": [
        "sa"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈷️"
      , "description": "Japanese “monthly amount” button"
      , "category": "Symbols"
      , "aliases": [
        "u6708"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈶"
      , "description": "Japanese “not free of charge” button"
      , "category": "Symbols"
      , "aliases": [
        "u6709"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈯"
      , "description": "Japanese “reserved” button"
      , "category": "Symbols"
      , "aliases": [
        "u6307"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🉐"
      , "description": "Japanese “bargain” button"
      , "category": "Symbols"
      , "aliases": [
        "ideograph_advantage"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈹"
      , "description": "Japanese “discount” button"
      , "category": "Symbols"
      , "aliases": [
        "u5272"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈚"
      , "description": "Japanese “free of charge” button"
      , "category": "Symbols"
      , "aliases": [
        "u7121"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈲"
      , "description": "Japanese “prohibited” button"
      , "category": "Symbols"
      , "aliases": [
        "u7981"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🉑"
      , "description": "Japanese “acceptable” button"
      , "category": "Symbols"
      , "aliases": [
        "accept"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈸"
      , "description": "Japanese “application” button"
      , "category": "Symbols"
      , "aliases": [
        "u7533"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈴"
      , "description": "Japanese “passing grade” button"
      , "category": "Symbols"
      , "aliases": [
        "u5408"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈳"
      , "description": "Japanese “vacancy” button"
      , "category": "Symbols"
      , "aliases": [
        "u7a7a"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "㊗️"
      , "description": "Japanese “congratulations” button"
      , "category": "Symbols"
      , "aliases": [
        "congratulations"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "㊙️"
      , "description": "Japanese “secret” button"
      , "category": "Symbols"
      , "aliases": [
        "secret"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈺"
      , "description": "Japanese “open for business” button"
      , "category": "Symbols"
      , "aliases": [
        "u55b6"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🈵"
      , "description": "Japanese “no vacancy” button"
      , "category": "Symbols"
      , "aliases": [
        "u6e80"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔴"
      , "description": "red circle"
      , "category": "Symbols"
      , "aliases": [
        "red_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🟠"
      , "description": "orange circle"
      , "category": "Symbols"
      , "aliases": [
        "orange_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟡"
      , "description": "yellow circle"
      , "category": "Symbols"
      , "aliases": [
        "yellow_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟢"
      , "description": "green circle"
      , "category": "Symbols"
      , "aliases": [
        "green_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🔵"
      , "description": "blue circle"
      , "category": "Symbols"
      , "aliases": [
        "large_blue_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🟣"
      , "description": "purple circle"
      , "category": "Symbols"
      , "aliases": [
        "purple_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟤"
      , "description": "brown circle"
      , "category": "Symbols"
      , "aliases": [
        "brown_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "⚫"
      , "description": "black circle"
      , "category": "Symbols"
      , "aliases": [
        "black_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⚪"
      , "description": "white circle"
      , "category": "Symbols"
      , "aliases": [
        "white_circle"
      ]
      , "tags": [
      ]
      , "unicode_version": "4.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🟥"
      , "description": "red square"
      , "category": "Symbols"
      , "aliases": [
        "red_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟧"
      , "description": "orange square"
      , "category": "Symbols"
      , "aliases": [
        "orange_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟨"
      , "description": "yellow square"
      , "category": "Symbols"
      , "aliases": [
        "yellow_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟩"
      , "description": "green square"
      , "category": "Symbols"
      , "aliases": [
        "green_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟦"
      , "description": "blue square"
      , "category": "Symbols"
      , "aliases": [
        "blue_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟪"
      , "description": "purple square"
      , "category": "Symbols"
      , "aliases": [
        "purple_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "🟫"
      , "description": "brown square"
      , "category": "Symbols"
      , "aliases": [
        "brown_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "12.0"
      , "ios_version": "13.0"
    }
    , {
      "emoji": "⬛"
      , "description": "black large square"
      , "category": "Symbols"
      , "aliases": [
        "black_large_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "⬜"
      , "description": "white large square"
      , "category": "Symbols"
      , "aliases": [
        "white_large_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "5.1"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "◼️"
      , "description": "black medium square"
      , "category": "Symbols"
      , "aliases": [
        "black_medium_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "◻️"
      , "description": "white medium square"
      , "category": "Symbols"
      , "aliases": [
        "white_medium_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "◾"
      , "description": "black medium-small square"
      , "category": "Symbols"
      , "aliases": [
        "black_medium_small_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "◽"
      , "description": "white medium-small square"
      , "category": "Symbols"
      , "aliases": [
        "white_medium_small_square"
      ]
      , "tags": [
      ]
      , "unicode_version": "3.2"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "▪️"
      , "description": "black small square"
      , "category": "Symbols"
      , "aliases": [
        "black_small_square"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "▫️"
      , "description": "white small square"
      , "category": "Symbols"
      , "aliases": [
        "white_small_square"
      ]
      , "tags": [
      ]
      , "unicode_version": ""
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔶"
      , "description": "large orange diamond"
      , "category": "Symbols"
      , "aliases": [
        "large_orange_diamond"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔷"
      , "description": "large blue diamond"
      , "category": "Symbols"
      , "aliases": [
        "large_blue_diamond"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔸"
      , "description": "small orange diamond"
      , "category": "Symbols"
      , "aliases": [
        "small_orange_diamond"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔹"
      , "description": "small blue diamond"
      , "category": "Symbols"
      , "aliases": [
        "small_blue_diamond"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔺"
      , "description": "red triangle pointed up"
      , "category": "Symbols"
      , "aliases": [
        "small_red_triangle"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔻"
      , "description": "red triangle pointed down"
      , "category": "Symbols"
      , "aliases": [
        "small_red_triangle_down"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "💠"
      , "description": "diamond with a dot"
      , "category": "Symbols"
      , "aliases": [
        "diamond_shape_with_a_dot_inside"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔘"
      , "description": "radio button"
      , "category": "Symbols"
      , "aliases": [
        "radio_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔳"
      , "description": "white square button"
      , "category": "Symbols"
      , "aliases": [
        "white_square_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🔲"
      , "description": "black square button"
      , "category": "Symbols"
      , "aliases": [
        "black_square_button"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏁"
      , "description": "chequered flag"
      , "category": "Flags"
      , "aliases": [
        "checkered_flag"
      ]
      , "tags": [
        "milestone"
        , "finish"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🚩"
      , "description": "triangular flag"
      , "category": "Flags"
      , "aliases": [
        "triangular_flag_on_post"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🎌"
      , "description": "crossed flags"
      , "category": "Flags"
      , "aliases": [
        "crossed_flags"
      ]
      , "tags": [
      ]
      , "unicode_version": "6.0"
      , "ios_version": "6.0"
    }
    , {
      "emoji": "🏴"
      , "description": "black flag"
      , "category": "Flags"
      , "aliases": [
        "black_flag"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏳️"
      , "description": "white flag"
      , "category": "Flags"
      , "aliases": [
        "white_flag"
      ]
      , "tags": [
      ]
      , "unicode_version": "7.0"
      , "ios_version": "9.1"
    }
    , {
      "emoji": "🏳️‍🌈"
      , "description": "rainbow flag"
      , "category": "Flags"
      , "aliases": [
        "rainbow_flag"
      ]
      , "tags": [
        "pride"
      ]
      , "unicode_version": "6.0"
      , "ios_version": "10.0"
    }
    , {
      "emoji": "🏳️‍⚧️"
      , "description": "transgender flag"
      , "category": "Flags"
      , "aliases": [
        "transgender_flag"
      ]
      , "tags": [
      ]
      , "unicode_version": "13.0"
      , "ios_version": "14.0"
    }
    , {
      "emoji": "🏴‍☠️"
      , "description": "pirate flag"
      , "category": "Flags"
      , "aliases": [
        "pirate_flag"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
      , "description": "flag: England"
      , "category": "Flags"
      , "aliases": [
        "england"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
      , "description": "flag: Scotland"
      , "category": "Flags"
      , "aliases": [
        "scotland"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
    , {
      "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
      , "description": "flag: Wales"
      , "category": "Flags"
      , "aliases": [
        "wales"
      ]
      , "tags": [
      ]
      , "unicode_version": "11.0"
      , "ios_version": "12.1"
    }
  ])

  let search = (val) => {
    // console.log(e)
    let filter = data.filter((e, i) => (
      e.description.toLowerCase().includes(val.toLowerCase())
    ))
    setData(filter)
  }


  return (
    <>
      <Box sx={{ bgcolor: 'lightblue', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4, paddingTop: 2 }}>
          <Box sx={{ width: '70%', paddingX: 4 }}>
            <TextField label='Search Emoji...' onChange={(e) => search(e.target.value)} variant='standard' sx={{ width: '100%', bgcolor: 'white', }} />
          </Box>
        </Box>


        {/* {filterList.length > 0 && (
          <>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: 40, fontWeight:'bold', fontFamily:'cursive' }}>Filtered</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <Grid container sx={{ width: '70%' }}>
                {filterList.map((e, i) => (
                  <Grid item xl={1} lg={2} md={2} sm={2} xs={3} key={i} sx={{ border: '1px solid black', bgcolor: 'white', paddingY: 2, shadowColor: "black", shadowOffset: { width: 10, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 12, }}>
                    <Box>
                      <Typography sx={{ fontSize: 22, textAlign: 'center' }}>{e.emoji}</Typography>
                      <Typography sx={{ fontSize: 12, textAlign: 'center' }}>{e.description}</Typography>
                    </Box>
                    
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )} */}

        {/* <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: 40, fontWeight: 'bold', fontFamily: 'cursive' }}>All</Typography> */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container columnSpacing={1} rowGap={1} sx={{ width: '70%', bgcolor: '#579BB1', padding: 1 }}>
            {data.map((e, i) => (
              <Grid item xl={1} lg={2} md={2} sm={2} xs={3} key={i} >
                <Box sx={{ bgcolor: 'white', height: '100%', width: '100%' }}>
                  <Typography sx={{ fontSize: 22, textAlign: 'center', paddingTop: 2 }}>{e.emoji}</Typography>
                  <Tooltip title={e.description}>
                    {/* <Typography sx={{ fontSize: 12, textAlign: 'center', paddingTop: 1, paddingBottom: 2 }}>{e.description.slice(0, 1).toUpperCase() + e.description.slice(1)}</Typography> */}
                    <Typography sx={{ fontSize: 12, textAlign: 'center', paddingTop: 1, paddingBottom: 2 }}>{e.description.slice(0, 1).toUpperCase() + e.description.slice(1, 10)+ (e.description.length > 10 ? "..." : "")}</Typography>
                  </Tooltip>
                </Box>
              </Grid>
            ))}

          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default App
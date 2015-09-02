({ "block": "page"
, "title": "button"
, "head":
  [ { "elem": "css"
    , "url": "button.min.css"
    }
  ]
, "scripts":
  [ { "elem": "js"
    , "url": "button.min.js"
    }
  ]
, "content":
  [ { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "default"
    , "modVals": false
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "default"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "default": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "default": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "default": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "default": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "default": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "default"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "default": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "default": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "default": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "default": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "default": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "size"
    , "modVals":
      [ "s"
      , "m"
      , "l"
      , "xl"
      ]
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "size"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "s"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "s"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "hovered": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "pressed": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "disabled": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "m"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "m"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "l"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "l"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "hovered": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "pressed": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "disabled": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "xl"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "xl"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "hovered": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "pressed": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "disabled": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "size"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "s"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "s"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "hovered": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "pressed": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "s"
                                  , "disabled": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "m"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "m"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "l"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "l"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "hovered": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "pressed": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "l"
                                  , "disabled": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "xl"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "xl"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "hovered": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "focused-hard": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "pressed": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "xl"
                                  , "disabled": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "view"
    , "modVals":
      [ "action"
      , "pseudo"
      ]
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "view"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "action"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "action"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "view": "action"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "view": "action"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "view": "action"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "view": "action"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "view": "action"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "pseudo"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "pseudo"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "view"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "action"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "action"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "view": "action"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "view": "action"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "view": "action"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "view": "action"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "view": "action"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                , { "elem": "items"
                  , "val": "pseudo"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "pseudo"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "view": "pseudo"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "type"
    , "modVals":
      [ "link"
      ]
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "type"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "link"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        , "content": "link"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "type": "link"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "type": "link"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "type": "link"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "type": "link"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "type": "link"
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "type"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "val": "link"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        , "content": "link"
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "type": "link"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "type": "link"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "type": "link"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "type": "link"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "link":
                                  { "url": "#"
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "type": "link"
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "has-icon"
    , "modVals": true
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "has-icon"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "has-icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "has-icon"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "has-icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "has-icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "icon"
    , "modVals": false
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "icon"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "icon": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "icon"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "icon"
                                  , "mods":
                                    { "tool": "search"
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "icon": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  , { "block": "example"
    , "themes":
      [ "alfa-on-color"
      , "alfa-on-white"
      ]
    , "states":
      [ "hovered"
      , "focused-hard"
      , "pressed"
      , "disabled"
      ]
    , "default":
      { "size": "m"
      }
    , "modName": "spin"
    , "modVals": false
    , "content":
      [ { "block": "theme"
        , "mods":
          { "name": "alfa-on-color"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "lvl": 2
              , "content": "alfa-on-color"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-color"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-color"
                      }
                    , "lvl": 3
                    , "content": "spin"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-color"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "spin": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "spin": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "spin": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "spin": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-color"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "spin": true
                                  , "theme": "alfa-on-color"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-color"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-color"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-color"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-color"
              }
            }
          ]
        , "__func2": true
        }
      , { "block": "theme"
        , "mods":
          { "name": "alfa-on-white"
          }
        , "content":
          [ { "elem": "name"
            , "content":
              { "block": "heading"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "lvl": 2
              , "content": "alfa-on-white"
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods": {}
            , "__func3": true
            }
          , { "elem": "val"
            , "content":
              { "block": "mod"
              , "mods":
                { "theme": "alfa-on-white"
                }
              , "states":
                [ ""
                , "hovered"
                , "focused-hard"
                , "pressed"
                , "disabled"
                ]
              , "content":
                [ { "elem": "name"
                  , "content":
                    { "block": "heading"
                    , "mods":
                      { "theme": "alfa-on-white"
                      }
                    , "lvl": 3
                    , "content": "spin"
                    }
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods": {}
                  , "__func5": true
                  }
                , { "elem": "items"
                  , "content":
                    [ { "elem": "val"
                      , "content":
                        { "block": "heading"
                        , "mods":
                          { "theme": "alfa-on-white"
                          }
                        , "lvl": 4
                        }
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    , { "elem": "instance"
                      , "content":
                        [ { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "default"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "spin": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "hovered"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "hovered": true
                                  , "spin": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "focused-hard"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "focused-hard": true
                                  , "spin": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "pressed"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "pressed": true
                                  , "spin": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        , { "block": "state"
                          , "mods":
                            { "theme": "alfa-on-white"
                            }
                          , "content":
                            [ { "elem": "name"
                              , "content": "disabled"
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            , { "elem": "instance"
                              , "content":
                                { "text": "button"
                                , "block": "button"
                                , "icon":
                                  { "block": "spin"
                                  , "mods":
                                    { "visible": true
                                    }
                                  }
                                , "mods":
                                  { "size": "m"
                                  , "disabled": true
                                  , "spin": true
                                  , "theme": "alfa-on-white"
                                  }
                                }
                              , "block": "state"
                              , "elemMods": {}
                              , "mods":
                                { "theme": "alfa-on-white"
                                }
                              }
                            ]
                          , "__func7": true
                          }
                        ]
                      , "block": "mod"
                      , "elemMods": {}
                      , "mods":
                        { "theme": "alfa-on-white"
                        }
                      }
                    ]
                  , "block": "mod"
                  , "elemMods": {}
                  , "mods":
                    { "theme": "alfa-on-white"
                    }
                  , "__func6": true
                  }
                ]
              , "__func4": true
              }
            , "block": "theme"
            , "elemMods": {}
            , "mods":
              { "name": "alfa-on-white"
              }
            }
          ]
        , "__func2": true
        }
      ]
    , "mods": {}
    , "__func1": true
    }
  ]
})
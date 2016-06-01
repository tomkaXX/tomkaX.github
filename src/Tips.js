define(["exports", "./CategoryColors.js"], function (exports, _CategoryColors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _CategoryColors2 = _interopRequireDefault(_CategoryColors);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Tips = function (_React$Component) {
    _inherits(Tips, _React$Component);

    function Tips(props) {
      _classCallCheck(this, Tips);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Tips).call(this, props));
    }

    _createClass(Tips, [{
      key: "componentWillMount",
      value: function componentWillMount() {}
    }, {
      key: "getIcon",
      value: function getIcon(cat) {
        return _CategoryColors2.default.categories[cat].icon;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          null,
          function () {
            if (_this2.props.name == "Info") {
              return React.createElement(
                "div",
                null,
                React.createElement(
                  "h3",
                  null,
                  "About"
                ),
                React.createElement(
                  "p",
                  null,
                  "Based World is an interface to view current natural disasters and their effects."
                ),
                React.createElement(
                  "p",
                  null,
                  "View tweets and see the general mood people have about current natural events."
                ),
                React.createElement(
                  "p",
                  null,
                  "Using our Neural Network map, educate yourself on how to prepare for a natural event depending on the region you live in."
                ),
                React.createElement(
                  "h3",
                  null,
                  "Github"
                ),
                React.createElement(
                  "p",
                  null,
                  React.createElement(
                    "a",
                    { href: "https://github.com/qwook/3rdRock/" },
                    "Click here to view our source code."
                  )
                ),
                React.createElement(
                  "h3",
                  null,
                  "Data Displayed"
                ),
                React.createElement(
                  "p",
                  null,
                  "Due to API limitations, we are not able to render data in real time. Instead, we display a snapshot of data from April 27th."
                ),
                React.createElement(
                  "p",
                  null,
                  "You may, however, generate more current data using our source code. You will need to supply your own API keys for each individual API."
                ),
                React.createElement("hr", null),
                React.createElement(
                  "h3",
                  null,
                  "Icons"
                ),
                React.createElement(
                  "p",
                  null,
                  "Volcano by Sergey Demushkin from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "Fire by Mike Ashley from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "drop by Dolly Vu from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "fast by irene hoffman from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "Falling Rocks by Daniele Catalanotto from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "Iceberg by Juan Pablo Bravo from the Noun Project"
                ),
                React.createElement(
                  "p",
                  null,
                  "Earthquake by Daniele Catalanotto from the Noun Project"
                )
              );
            } else {
              return React.createElement(
                "div",
                null,
                React.createElement("img", { src: _this2.getIcon(_this2.props.name), style: { display: 'inlineBlock', height: '32px' } }),
                function () {
                  if (_this2.props.name == "Wildfires") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Wildfires"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Lop off dead branches over the roof of a house and within 10 feet of a chimney."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Move firewood piles away from all structures."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Prune the branches of taller trees to six feet above the ground so that a ground fire cannot climb into the crown of the trees."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "No matter how attractive they look, never cover a roof with wooden cedar shingles. Fiery brands and ash often precede a wildfire and can ignite a wooden roof miles from the main fire."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Enclose the underside of porches and decks to keep fire from creeping under the house."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Clearly mark all water sources on your property so firefighters can easily get to them."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Be aware that firefighters may avoid homes where the driveway provides no turnaround for fire engines, homes on roads with light bridges that won't carry heavy, water-laden trucks, and homes at the heads of forested draws"
                      )
                    );
                  } else if (_this2.props.name == "Volcanoes") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Volcanoes"
                      ),
                      React.createElement(
                        "h5",
                        null,
                        "If a lava flow is headed toward you:"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Leave the area immediately. If you are warned to evacuate because an eruption is imminent, evacuate."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "If you can drive rather than walk, use your vehicle to evacuate. When driving keep doors and windows closed, drive across the path of danger if you can or away from the danger if you can not, and watch for unusual hazards in the road."
                      ),
                      React.createElement(
                        "h5",
                        null,
                        "If you are indoors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Close all windows, doors, and fireplace or woodstove dampers."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Turn off all fans and heating and air conditioning systems."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Bring pets and livestock into closed shelters."
                      ),
                      React.createElement(
                        "h5",
                        null,
                        "If you are outdoors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Seek shelter indoors."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "If caught in a rockfall, roll into a ball to protect your head."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "If near a stream or river, be aware of rising water and possible mudflows in low-lying areas. Move up-slope as quickly as possible."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Seek care for burns right away. Immediate care can be life saving."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Stay inside, if possible, with windows and doors closed."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Wear long-sleeved shirts and long pants."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Use goggles to protect your eyes."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Keep your car or truck engine switched off."
                      )
                    );
                  } else if (_this2.props.name == "Dust and Haze") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Dust & Haze"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Stay Indoors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Avoid Heavy Outdoor Activities"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Wear A N95 Mask"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Increase Fiber Intake"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Take Medication To Alleviate Symptoms"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Stop Smoking"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Pay Attention To Air Quality Updates"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Stay Hydrated"
                      )
                    );
                  } else if (_this2.props.name == "Drought") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Drought"
                      ),
                      React.createElement(
                        "h5",
                        null,
                        "Indoors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Use washing machines for full loads only."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Run the dishwasher only when full."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "When washing dishes by hand, don’t let the water run. Fill one basin with wash water and the other with rinse water."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Install an aerator on your kitchen faucet to reduce flow to less than 1 gallon per minute."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Use the garbage disposal sparingly. Alternatively, you can compost vegetable food waste and save gallons of water every time."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Install low-flow shower heads."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Take a five minute shower instead of a 10 minute one."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Turn your bathroom faucet off when brushing your teeth or shaving."
                      ),
                      React.createElement(
                        "h5",
                        null,
                        "Outdoors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Water early in the morning or later in the evening when temperatures are cooler."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Adjust your sprinklers to ensure only your yard is being watered, not your house, sidewalk or street."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Put a layer of mulch around trees and plants to reduce evaporation and keep the soil cool."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Landscape your yard with climate appropriate plants."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Use a broom instead of a hose to clean driveways, sidewalks and patios."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Wash vehicles with a bucket and sponge, and make sure your hose has a self-closing nozzle."
                      )
                    );
                  } else if (_this2.props.name == "Earthquakes") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Earthquakes"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Fasten shelves securely to walls, and place heavy objects on lower shelves."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Store breakable items in low, closed cabinets."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Hang items such as pictures and mirrors away from beds and anywhere people sit."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Brace hanging light fixtures."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Repair known defective electrical wiring and gas connections."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Strap your water heater to studs in the wall and bolt it to the floor."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Repair any large existing cracks in walls or foundations."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Store poisons such as pesticides and herbicides, as well as flammable liquids, on bottoms shelves of latched cabinets."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Identify safe places in each room (under sturdy furniture, against inside walls, away from glass)."
                      )
                    );
                  } else if (_this2.props.name == "Landslides") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Landslides"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "To begin preparing, you should build an emergency kit and make a family communications plan."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Prepare for landslides by following proper land-use procedures - avoid building near steep slopes, close to mountain edges, near drainage ways or along natural erosion valleys."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Become familiar with the land around you. Learn whether debris flows have occurred in your area by contacting local officials. Slopes where debris flows have occurred in the past are likely to experience them in the future."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Get a ground assessment of your property."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Consult a professional for advice on appropriate preventative measures for your home or business, such as flexible pipe fittings, which can better resist breakage."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Protect your property by planting ground cover on slopes and building retaining walls."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "In mudflow areas, build channels or deflection walls to direct the flow around buildings. Be aware, however, if you build walls to divert debris flow and the flow lands on a neighbor's property, you may be liable for damages."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "If you are at risk from a landslide talk to your insurance agent. Debris flow may be covered by flood insurance policies from the National Flood Insurance Program (NFIP)."
                      ),
                      React.createElement("p", null),
                      React.createElement("p", null)
                    );
                  } else if (_this2.props.name == "Sea and Lake Ice") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Iceberg"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Don't be Titanic"
                      )
                    );
                  } else if (_this2.props.name == "Severe Storms") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Severe Storms"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Trim dead branches and cut down dead trees to reduce the danger of these falling onto your house during a storm."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Clean gutters, drains and downpipes."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Make sure your roof is in good repair."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Prepare an emergency kit."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "When a storm is imminent"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Always check the weather forecast before heading out on the water. Do not go boating in a storm. If you are on the water and see bad weather approaching, head for shore immediately. Remember to file a sail plan with a responsible person, and frequently monitor the VHF marine or Weatheradio broadcast throughout your trip."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Secure everything that might be blown around or torn loose – indoors and outdoors. Flying objects such as garbage cans and lawn furniture can injure people and damage property."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Consider going to the sheltered area that you and your family identified in your emergency plan."
                      )
                    );
                  } else if (_this2.props.name == "Temperature Extremes") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Temperature Extremes"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Build a disaster supply kit and make a family plan"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "If installing window air conditioners, install them snugly and insulate if necessary"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Check air-conditioning ducts for proper insulation"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Install temporary window reflectors (for use between windows and drapes), such as aluminum foil-covered cardboard, to reflect heat back outside"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Weather-strip doors and sills to keep cool air in"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Cover windows that receive morning or afternoon sun with drapes, shades, awnings, or louvers—outdoor awnings or louvers can reduce the heat that enters a home by up to 80 percent"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Listen to local weather forecasts and stay aware of upcoming temperature changes"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Know those in your neighborhood who are elderly, young, or in poor health—they are more likely to become victims of excessive heat and may need help"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Be aware that people living in urban areas may be at greater risk from the effects of a prolonged heat wave than are people living in rural areas"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Get trained in first aid to learn how to treat heat-related emergencies"
                      )
                    );
                  } else if (_this2.props.name == "Water Color") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Water Colors"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Avoid adding pollutants to ocean"
                      )
                    );
                  } else if (_this2.props.name == "Floods") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Floods"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Avoid building in high-risk flood plain areas to minimize your exposure."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Elevate your furnace, water heater and other utilities so that they are less likely to be affected in a flood."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Consider installing “check valves” to prevent water from backing up into your house during a flood."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Seal your basement walls with waterproof material to help protect your home."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Pay attention to local news and information sources when the weather is a potential issue."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Be extremely careful when walking through water that’s flowing. You can use a stick to check the ground as you walk."
                      ),
                      React.createElement(
                        "p",
                        null,
                        "Don’t drive your car in a flooded area. You’re at risk of being swept away. Get out of the car and climb to higher ground."
                      )
                    );
                  } else if (_this2.props.name == "Manmade") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "Manmade"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "“Like music and art, love of nature is a common language that can transcend political or social boundaries.” ― Jimmy Carter."
                      )
                    );
                  } else if (_this2.props.name == "None") {
                    return React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h2",
                        null,
                        "None"
                      ),
                      React.createElement(
                        "p",
                        null,
                        "No specific disasters reported here."
                      )
                    );
                  }
                }(),
                "}"
              );
            }
          }()
        );
      }
    }]);

    return Tips;
  }(React.Component);

  exports.default = Tips;
});
//# sourceMappingURL=Tips.js.map

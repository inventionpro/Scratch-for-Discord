export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <shadow type="text">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="frost_slash_register" x="0" y="106">
    <statement name="OPTIONS">
      <block type="frost_slash_command">
        <value name="NAME">
          <shadow type="text">
            <field name="TEXT">ping</field>
          </shadow>
        </value>
        <value name="DESC">
          <shadow type="text">
            <field name="TEXT">Pong!</field>
          </shadow>
        </value>
        <next>
          <block type="frost_slash_command">
            <value name="NAME">
              <shadow type="text">
                <field name="TEXT">say</field>
              </shadow>
            </value>
            <value name="DESC">
              <shadow type="text">
                <field name="TEXT">Say</field>
              </shadow>
            </value>
            <statement name="OPTIONS">
              <block type="frost_slash_options1">
                <field name="TYPE">3</field>
                <value name="NAME">
                  <shadow type="text">
                    <field name="TEXT">text</field>
                  </shadow>
                </value>
                <value name="DESC">
                  <shadow type="text">
                    <field name="TEXT">Text to say</field>
                  </shadow>
                </value>
                <value name="REQUIRED">
                  <shadow type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </shadow>
                </value>
              </block>
            </statement>
            <next>
              <block type="frost_slash_command">
                <value name="NAME">
                  <shadow type="text">
                    <field name="TEXT">sub</field>
                  </shadow>
                </value>
                <value name="DESC">
                  <shadow type="text">
                    <field name="TEXT">a sub comamnd</field>
                  </shadow>
                </value>
                <statement name="OPTIONS">
                  <block type="frost_slash_sub_command">
                    <value name="NAME">
                      <shadow type="text">
                        <field name="TEXT">hi</field>
                      </shadow>
                    </value>
                    <value name="DESC">
                      <shadow type="text">
                        <field name="TEXT">Hello</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="frost_slash_sub_command">
                        <value name="NAME">
                          <shadow type="text">
                            <field name="TEXT">bye</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text">
                            <field name="TEXT">Bye</field>
                          </shadow>
                        </value>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="frost_slash_command">
                    <value name="NAME">
                      <shadow type="text">
                        <field name="TEXT">group</field>
                      </shadow>
                    </value>
                    <value name="DESC">
                      <shadow type="text">
                        <field name="TEXT">a sub comamnd group</field>
                      </shadow>
                    </value>
                    <statement name="OPTIONS">
                      <block type="frost_slash_sub_command_group">
                        <value name="NAME">
                          <shadow type="text">
                            <field name="TEXT">one</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text">
                            <field name="TEXT">just a group</field>
                          </shadow>
                        </value>
                        <statement name="OPTIONS">
                          <block type="frost_slash_sub_command">
                            <value name="NAME">
                              <shadow type="text">
                                <field name="TEXT">ok</field>
                              </shadow>
                            </value>
                            <value name="DESC">
                              <shadow type="text">
                                <field name="TEXT">Ok</field>
                              </shadow>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </statement>
                    <next>
                      <block type="frost_slash_command">
                        <value name="NAME">
                          <shadow type="text">
                            <field name="TEXT">choose</field>
                          </shadow>
                        </value>
                        <value name="DESC">
                          <shadow type="text">
                            <field name="TEXT">Choose one</field>
                          </shadow>
                        </value>
                        <statement name="OPTIONS">
                          <block type="frost_slash_options1">
                            <field name="TYPE">3</field>
                            <value name="NAME">
                              <shadow type="text">
                                <field name="TEXT">Choice</field>
                              </shadow>
                            </value>
                            <value name="DESC">
                              <shadow type="text">
                                <field name="TEXT">your choice</field>
                              </shadow>
                            </value>
                            <value name="REQUIRED">
                              <shadow type="logic_boolean">
                                <field name="BOOL">TRUE</field>
                              </shadow>
                            </value>
                            <statement name="CHOICES">
                              <block type="frost_slash_choices">
                                <value name="NAME">
                                  <shadow type="text">
                                    <field name="TEXT">Big Berb</field>
                                  </shadow>
                                </value>
                                <value name="OPTION_NAME">
                                  <shadow type="text">
                                    <field name="TEXT">bberb</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="frost_slash_choices">
                                    <value name="NAME">
                                      <shadow type="text">
                                        <field name="TEXT">Small Berb</field>
                                      </shadow>
                                    </value>
                                    <value name="OPTION_NAME">
                                      <shadow type="text">
                                        <field name="TEXT">sberb</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="frost_slash_choices">
                                        <value name="NAME">
                                          <shadow type="text">
                                            <field name="TEXT">Knife</field>
                                          </shadow>
                                        </value>
                                        <value name="OPTION_NAME">
                                          <shadow type="text">
                                            <field name="TEXT">knoif</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="on_slash" x="0" y="2172">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="interaction_name"></block>
            </value>
            <value name="B">
              <block type="text">
                <field name="TEXT">ping</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="slash_reply">
            <value name="CONTENT">
              <block type="text">
                <field name="TEXT">Pong!</field>
              </block>
            </value>
            <value name="BOOLEAN">
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
                <comment pinned="false" h="128.88888549804688" w="265.55560302734375">true - only the person who did the comamnd can see it

false - everyone can see it</comment>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="controls_if">
            <value name="IF0">
              <block type="logic_compare">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="interaction_name"></block>
                </value>
                <value name="B">
                  <block type="text">
                    <field name="TEXT">say</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="slash_reply">
                <value name="CONTENT">
                  <block type="options">
                    <mutation mode="String"></mutation>
                    <field name="SEARCH">String</field>
                    <value name="BOOLEAN">
                      <block type="text">
                        <field name="TEXT">text</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="BOOLEAN">
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                    <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it</comment>
                  </block>
                </value>
              </block>
            </statement>
            <next>
              <block type="controls_if">
                <value name="IF0">
                  <block type="logic_compare">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="interaction_name"></block>
                    </value>
                    <value name="B">
                      <block type="text">
                        <field name="TEXT">sub</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="logic_compare">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="options">
                            <mutation mode="Subcommand"></mutation>
                            <field name="SEARCH">Subcommand</field>
                            <value name="BOOLEAN">
                              <block type="text">
                                <field name="TEXT">hi</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <value name="B">
                          <block type="text">
                            <field name="TEXT">hi</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="slash_reply">
                        <value name="CONTENT">
                          <block type="text">
                            <field name="TEXT">Hello</field>
                          </block>
                        </value>
                        <value name="BOOLEAN">
                          <block type="logic_boolean">
                            <field name="BOOL">FALSE</field>
                            <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it        </comment>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_compare">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="options">
                                <mutation mode="Subcommand"></mutation>
                                <field name="SEARCH">Subcommand</field>
                                <value name="BOOLEAN">
                                  <block type="text">
                                    <field name="TEXT">bye</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="text">
                                <field name="TEXT">bye</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="slash_reply">
                            <value name="CONTENT">
                              <block type="text">
                                <field name="TEXT">Ok bye :(</field>
                              </block>
                            </value>
                            <value name="BOOLEAN">
                              <block type="logic_boolean">
                                <field name="BOOL">FALSE</field>
                                <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it            </comment>
                              </block>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="logic_compare">
                        <field name="OP">EQ</field>
                        <value name="A">
                          <block type="interaction_name"></block>
                        </value>
                        <value name="B">
                          <block type="text">
                            <field name="TEXT">group</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_compare">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="options">
                                <mutation mode="SubcommandGroup"></mutation>
                                <field name="SEARCH">SubcommandGroup</field>
                                <value name="BOOLEAN">
                                  <block type="text">
                                    <field name="TEXT">one</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="text">
                                <field name="TEXT">one</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_if">
                            <value name="IF0">
                              <block type="logic_compare">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="options">
                                    <mutation mode="Subcommand"></mutation>
                                    <field name="SEARCH">Subcommand</field>
                                    <value name="BOOLEAN">
                                      <block type="text">
                                        <field name="TEXT">ok</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text">
                                    <field name="TEXT">ok</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="slash_reply">
                                <value name="CONTENT">
                                  <block type="text">
                                    <field name="TEXT">ok</field>
                                  </block>
                                </value>
                                <value name="BOOLEAN">
                                  <block type="logic_boolean">
                                    <field name="BOOL">FALSE</field>
                                    <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it                </comment>
                                  </block>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </statement>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_compare">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="interaction_name"></block>
                            </value>
                            <value name="B">
                              <block type="text">
                                <field name="TEXT">choose</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_if">
                            <value name="IF0">
                              <block type="logic_compare">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="options">
                                    <mutation mode="String"></mutation>
                                    <field name="SEARCH">String</field>
                                    <value name="BOOLEAN">
                                      <block type="text">
                                        <field name="TEXT">Choice</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text">
                                    <field name="TEXT">bberb</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="slash_reply">
                                <value name="CONTENT">
                                  <block type="text">
                                    <field name="TEXT">You chose the Big Berd</field>
                                  </block>
                                </value>
                                <value name="BOOLEAN">
                                  <block type="logic_boolean">
                                    <field name="BOOL">FALSE</field>
                                    <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it                </comment>
                                  </block>
                                </value>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare">
                                    <field name="OP">EQ</field>
                                    <value name="A">
                                      <block type="options">
                                        <mutation mode="String"></mutation>
                                        <field name="SEARCH">String</field>
                                        <value name="BOOLEAN">
                                          <block type="text">
                                            <field name="TEXT">Choice</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="text">
                                        <field name="TEXT">sberb</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="slash_reply">
                                    <value name="CONTENT">
                                      <block type="text">
                                        <field name="TEXT">You chose the Small Berd</field>
                                      </block>
                                    </value>
                                    <value name="BOOLEAN">
                                      <block type="logic_boolean">
                                        <field name="BOOL">FALSE</field>
                                        <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it                    </comment>
                                      </block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_compare">
                                        <field name="OP">EQ</field>
                                        <value name="A">
                                          <block type="options">
                                            <mutation mode="String"></mutation>
                                            <field name="SEARCH">String</field>
                                            <value name="BOOLEAN">
                                              <block type="text">
                                                <field name="TEXT">Choice</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="text">
                                            <field name="TEXT">knoif</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="slash_reply">
                                        <value name="CONTENT">
                                          <block type="text">
                                            <field name="TEXT">Why do you want a knife</field>
                                          </block>
                                        </value>
                                        <value name="BOOLEAN">
                                          <block type="logic_boolean">
                                            <field name="BOOL">FALSE</field>
                                            <comment pinned="false" h="128" w="265">true - only the person who did the comamnd can see it

false - everyone can see it                        </comment>
                                          </block>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;

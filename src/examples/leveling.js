export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>member_xp</variable>
    <variable>member_level</variable>
  </variables>
  <block type="jg_unused_floating_comment" x="0" y="0">
    <field name="TEXT">Remade by Dazl :3</field>
  </block>
  <block type="s4d_login" x="0" y="98">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_database_create_new" x="0" y="204">
    <value name="NAME">
      <shadow type="text">
        <field name="TEXT">levelbase</field>
      </shadow>
    </value>
    <value name="FILE">
      <shadow type="text">
        <field name="TEXT">leveling</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" x="0" y="310">
    <statement name="STATEMENTS">
      <block type="jg_comments_connected_comment">
        <field name="TEXT">be sure to move this into your command handler + change the message content blocks and stuff if you're using one :)</field>
        <next>
          <block type="variables_set">
            <field name="VAR">member_xp</field>
            <value name="VALUE">
              <block type="s4d_get_data_new">
                <value name="KEY">
                  <shadow type="text">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="jg_text_remake_paragraph_quotes">
                        <field name="TEXT">xp-</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="s4d_member_id">
                        <value name="MEMBER">
                          <block type="s4d_message_member"></block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="NAME">
                  <shadow type="text">
                    <field name="TEXT">levelbase</field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set">
                <field name="VAR">member_level</field>
                <value name="VALUE">
                  <block type="s4d_get_data_new">
                    <value name="KEY">
                      <shadow type="text">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="jg_text_remake_paragraph_quotes">
                            <field name="TEXT">level-</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="s4d_member_id">
                            <value name="MEMBER">
                              <block type="s4d_message_member"></block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="NAME">
                      <shadow type="text">
                        <field name="TEXT">levelbase</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="logic_negate">
                        <value name="BOOL">
                          <block type="variables_get">
                            <field name="VAR">member_xp</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set">
                        <field name="VAR">member_xp</field>
                        <value name="VALUE">
                          <block type="math_number">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_negate">
                            <value name="BOOL">
                              <block type="variables_get">
                                <field name="VAR">member_level</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="variables_set">
                            <field name="VAR">member_level</field>
                            <value name="VALUE">
                              <block type="math_number">
                                <field name="NUM">0</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="s4d_set_data_new">
                            <value name="KEY">
                              <shadow type="text">
                                <field name="TEXT">hello</field>
                              </shadow>
                              <block type="text_join" inline="true">
                                <mutation items="2"></mutation>
                                <value name="ADD0">
                                  <block type="jg_text_remake_paragraph_quotes">
                                    <field name="TEXT">xp-</field>
                                  </block>
                                </value>
                                <value name="ADD1">
                                  <block type="s4d_member_id">
                                    <value name="MEMBER">
                                      <block type="s4d_message_member"></block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="VALUE">
                              <shadow type="text">
                                <field name="TEXT">world</field>
                              </shadow>
                              <block type="math_arithmetic">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get">
                                    <field name="VAR">member_xp</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <value name="NAME">
                              <shadow type="text">
                                <field name="TEXT">levelbase</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR">member_xp</field>
                                <value name="VALUE">
                                  <block type="math_arithmetic">
                                    <field name="OP">ADD</field>
                                    <value name="A">
                                      <shadow type="math_number">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="variables_get">
                                        <field name="VAR">member_xp</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <shadow type="math_number">
                                        <field name="NUM">1</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_compare">
                                        <field name="OP">GT</field>
                                        <value name="A">
                                          <block type="variables_get">
                                            <field name="VAR">member_xp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="math_number">
                                            <field name="NUM">100</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_set_data_new">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" inline="true">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="jg_text_remake_paragraph_quotes">
                                                <field name="TEXT">xp-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id">
                                                <value name="MEMBER">
                                                  <block type="s4d_message_member"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="VALUE">
                                          <shadow type="text">
                                            <field name="TEXT">world</field>
                                          </shadow>
                                          <block type="math_number">
                                            <field name="NUM">0</field>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <shadow type="text">
                                            <field name="TEXT">levelbase</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_set_data_new">
                                            <value name="KEY">
                                              <shadow type="text">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_join" inline="true">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">level-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id">
                                                    <value name="MEMBER">
                                                      <block type="s4d_message_member"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="VALUE">
                                              <shadow type="text">
                                                <field name="TEXT">world</field>
                                              </shadow>
                                              <block type="math_arithmetic">
                                                <field name="OP">ADD</field>
                                                <value name="A">
                                                  <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                  <block type="variables_get">
                                                    <field name="VAR">member_level</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="NAME">
                                              <shadow type="text">
                                                <field name="TEXT">levelbase</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="variables_set">
                                                <field name="VAR">member_level</field>
                                                <value name="VALUE">
                                                  <block type="math_arithmetic">
                                                    <field name="OP">ADD</field>
                                                    <value name="A">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                      <block type="variables_get">
                                                        <field name="VAR">member_level</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="jg_comments_connected_comment">
                                                    <field name="TEXT">this is the message that sends when you level up, this is interchangeable for whatever you want. you can even make a random response to send a random message of multiple you set up</field>
                                                    <next>
                                                      <block type="jg_comments_connected_comment">
                                                        <field name="TEXT">you can even create more text spaces in a create text block within the block settings in the top left</field>
                                                        <next>
                                                          <block type="frost_real_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">Hey!</field>
                                                              </shadow>
                                                              <block type="text_join">
                                                                <mutation items="7"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text">
                                                                    <field name="TEXT">Nice job, </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_author"></block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text">
                                                                    <field name="TEXT"> you made it to </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">member_level</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="jg_text_remake_paragraph_quotes">
                                                                    <field name="TEXT">. If you keep it up, you'll be at level </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="math_arithmetic">
                                                                    <field name="OP">ADD</field>
                                                                    <value name="A">
                                                                      <shadow type="math_number">
                                                                        <field name="NUM">1</field>
                                                                      </shadow>
                                                                      <block type="variables_get">
                                                                        <field name="VAR">member_level</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <shadow type="math_number">
                                                                        <field name="NUM">1</field>
                                                                      </shadow>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD6">
                                                                  <block type="text">
                                                                    <field name="TEXT"> in no time! good luck</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="boolean">
                                                              <shadow type="logic_boolean">
                                                                <field name="BOOL">TRUE</field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </next>
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
                                    <next>
                                      <block type="jg_comments_connected_comment">
                                        <field name="TEXT">Oh! I almost forgot, you can interchange the respond and reply blocks with whatever you want, you can also turn the mention on and off on replies</field>
                                        <next>
                                          <block type="controls_if">
                                            <mutation elseif="1"></mutation>
                                            <value name="IF0">
                                              <block type="logic_compare">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="s4d_message_content"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">!xp</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="frost_real_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="text_join">
                                                    <mutation items="5"></mutation>
                                                    <value name="ADD0">
                                                      <block type="s4d_message_author"></block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="text">
                                                        <field name="TEXT">, you need </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="math_arithmetic">
                                                        <field name="OP">MINUS</field>
                                                        <value name="A">
                                                          <shadow type="math_number">
                                                            <field name="NUM">100</field>
                                                          </shadow>
                                                        </value>
                                                        <value name="B">
                                                          <shadow type="math_number">
                                                            <field name="NUM">100</field>
                                                          </shadow>
                                                          <block type="variables_get">
                                                            <field name="VAR">member_xp</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="ADD3">
                                                      <block type="text">
                                                        <field name="TEXT"> to achieve level </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD4">
                                                      <block type="math_arithmetic">
                                                        <field name="OP">ADD</field>
                                                        <value name="A">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="variables_get">
                                                            <field name="VAR">member_level</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="boolean">
                                                  <shadow type="logic_boolean">
                                                    <field name="BOOL">TRUE</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                            <value name="IF1">
                                              <block type="logic_compare">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="s4d_message_content"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">!level</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO1">
                                              <block type="frost_real_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="text_join">
                                                    <mutation items="3"></mutation>
                                                    <value name="ADD0">
                                                      <block type="s4d_message_author"></block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="text">
                                                        <field name="TEXT">you are currently level </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="variables_get">
                                                        <field name="VAR">member_level</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="boolean">
                                                  <shadow type="logic_boolean">
                                                    <field name="BOOL">TRUE</field>
                                                  </shadow>
                                                </value>
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
                        </next>
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

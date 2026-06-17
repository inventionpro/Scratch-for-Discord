export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>random_coin</variable>
    <variable>coins</variable>
    <variable>coin_answer</variable>
    <variable>give_answer</variable>
  </variables>
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_database_create_new" x="0" y="106">
    <value name="NAME">
      <shadow type="text">
        <field name="TEXT">economy</field>
      </shadow>
    </value>
    <value name="FILE">
      <shadow type="text">
        <field name="TEXT">economy</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" x="0" y="212">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_negate">
            <value name="BOOL">
              <block type="s4d_has_data_new">
                <value name="KEY">
                  <shadow type="text">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="text">
                        <field name="TEXT">coins-</field>
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
                  <block type="jg_text_remake_paragraph_quotes">
                    <field name="TEXT">economy</field>
                  </block>
                </value>
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
                  <block type="text">
                    <field name="TEXT">coins-</field>
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
              <block type="jg_text_remake_paragraph_quotes">
                <field name="TEXT">economy</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="variables_set">
            <field name="VAR">random_coin</field>
            <value name="VALUE">
              <block type="math_random_int">
                <value name="FROM">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
                <value name="TO">
                  <shadow type="math_number">
                    <field name="NUM">10</field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set">
                <field name="VAR">coins</field>
                <value name="VALUE">
                  <block type="s4d_get_data_new">
                    <value name="KEY">
                      <shadow type="text">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="text">
                            <field name="TEXT">coins-</field>
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
                      <block type="jg_text_remake_paragraph_quotes">
                        <field name="TEXT">economy</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="s4d_add_data_new">
                    <value name="COUNT">
                      <shadow type="math_number">
                        <field name="NUM">1</field>
                      </shadow>
                      <block type="variables_get">
                        <field name="VAR">random_coin</field>
                      </block>
                    </value>
                    <value name="KEY">
                      <shadow type="text">
                        <field name="TEXT">points</field>
                      </shadow>
                      <block type="text_join" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="text">
                            <field name="TEXT">coins-</field>
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
                      <block type="jg_text_remake_paragraph_quotes">
                        <field name="TEXT">economy</field>
                      </block>
                    </value>
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
                              <block type="text">
                                <field name="TEXT">$bal</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_embed_create">
                            <field name="NAME">embed</field>
                            <statement name="THEN">
                              <block type="s4d_embed_set_color">
                                <value name="COLOUR">
                                  <shadow type="colour_picker">
                                    <field name="COLOUR">#6666cc</field>
                                  </shadow>
                                  <block type="colour_random"></block>
                                </value>
                                <next>
                                  <block type="s4d_embed_set_title">
                                    <value name="TITLE">
                                      <shadow type="text">
                                        <field name="TEXT">ACCOUNT</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_embed_set_thumb">
                                        <value name="THUMB">
                                          <shadow type="text">
                                            <field name="TEXT">https://image.com</field>
                                          </shadow>
                                          <block type="s4d_member_icon">
                                            <value name="MEMBER">
                                              <block type="s4d_message_member"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_set_desc">
                                            <value name="DESC">
                                              <shadow type="text">
                                                <field name="TEXT">Some desc here...</field>
                                              </shadow>
                                              <block type="text_join">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="s4d_message_author"></block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="text">
                                                    <field name="TEXT"> you currently have </field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="variables_get">
                                                    <field name="VAR">coins</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="text">
                                                    <field name="TEXT"> coins in your account.</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="s4d_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">Hey!</field>
                                  </shadow>
                                  <block type="s4d_embed_send">
                                    <field name="NAME">embed</field>
                                  </block>
                                </value>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <value name="IF1">
                          <block type="s4d_starts_with" inline="true">
                            <value name="STRING">
                              <shadow type="text">
                                <field name="TEXT">abc</field>
                              </shadow>
                              <block type="s4d_message_content"></block>
                            </value>
                            <value name="SUBSTRING">
                              <shadow type="text">
                                <field name="TEXT">$bal</field>
                              </shadow>
                            </value>
                          </block>
                        </value>
                        <statement name="DO1">
                          <block type="s4d_try_and_catch">
                            <statement name="try">
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_negate">
                                    <value name="BOOL">
                                      <block type="s4d_has_data_new">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" inline="true">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="text">
                                                <field name="TEXT">coins-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id">
                                                <value name="MEMBER">
                                                  <block type="jg_message_mentioned_member_number_on_message">
                                                    <field name="TYPE">members</field>
                                                    <value name="INDEX">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <value name="MESSAGE">
                                                      <shadow type="Message"></shadow>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">economy</field>
                                          </block>
                                        </value>
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
                                          <block type="text">
                                            <field name="TEXT">coins-</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="s4d_member_id">
                                            <value name="MEMBER">
                                              <block type="jg_message_mentioned_member_number_on_message">
                                                <field name="TYPE">members</field>
                                                <value name="INDEX">
                                                  <shadow type="math_number">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                </value>
                                                <value name="MESSAGE">
                                                  <shadow type="Message"></shadow>
                                                </value>
                                              </block>
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
                                      <block type="jg_text_remake_paragraph_quotes">
                                        <field name="TEXT">economy</field>
                                      </block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_embed_create">
                                    <field name="NAME">embed</field>
                                    <statement name="THEN">
                                      <block type="s4d_embed_set_color">
                                        <value name="COLOUR">
                                          <shadow type="colour_picker">
                                            <field name="COLOUR">#6666cc</field>
                                          </shadow>
                                          <block type="colour_random"></block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_set_title">
                                            <value name="TITLE">
                                              <shadow type="text">
                                                <field name="TEXT">ACCOUNT</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_embed_set_thumb">
                                                <value name="THUMB">
                                                  <shadow type="text">
                                                    <field name="TEXT">https://image.com</field>
                                                  </shadow>
                                                  <block type="s4d_member_icon">
                                                    <value name="MEMBER">
                                                      <block type="s4d_message_member"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_embed_set_desc">
                                                    <value name="DESC">
                                                      <shadow type="text">
                                                        <field name="TEXT">Some desc here...</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="jg_message_mentioned_member_number_on_message">
                                                            <field name="TYPE">members</field>
                                                            <value name="INDEX">
                                                              <shadow type="math_number">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                            </value>
                                                            <value name="MESSAGE">
                                                              <shadow type="Message"></shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="text">
                                                            <field name="TEXT"> currently has </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="s4d_get_data_new" inline="true">
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">hello</field>
                                                              </shadow>
                                                              <block type="text_join" inline="true">
                                                                <mutation items="2"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text">
                                                                    <field name="TEXT">coins-</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_member_id">
                                                                    <value name="MEMBER">
                                                                      <block type="jg_message_mentioned_member_number_on_message">
                                                                        <field name="TYPE">members</field>
                                                                        <value name="INDEX">
                                                                          <shadow type="math_number">
                                                                            <field name="NUM">1</field>
                                                                          </shadow>
                                                                        </value>
                                                                        <value name="MESSAGE">
                                                                          <shadow type="Message"></shadow>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="NAME">
                                                              <block type="jg_text_remake_paragraph_quotes">
                                                                <field name="TEXT">economy</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text">
                                                            <field name="TEXT"> coins in their account.</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">Hey!</field>
                                          </shadow>
                                          <block type="s4d_embed_send">
                                            <field name="NAME">embed</field>
                                          </block>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <statement name="catch">
                              <block type="s4d_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">ping a valid member</field>
                                  </shadow>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if">
                            <mutation elseif="1"></mutation>
                            <value name="IF0">
                              <block type="s4d_starts_with" inline="true">
                                <value name="STRING">
                                  <shadow type="text">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="s4d_message_content"></block>
                                </value>
                                <value name="SUBSTRING">
                                  <shadow type="text">
                                    <field name="TEXT">$editcoins</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="controls_if">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission">
                                    <field name="PERMISSION">MANAGE_GUILD</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_member"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch">
                                    <statement name="try">
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_negate">
                                            <value name="BOOL">
                                              <block type="s4d_has_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_join" inline="true">
                                                    <mutation items="2"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text">
                                                        <field name="TEXT">coins-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_member_id">
                                                        <value name="MEMBER">
                                                          <block type="jg_message_mentioned_member_number_on_message">
                                                            <field name="TYPE">members</field>
                                                            <value name="INDEX">
                                                              <shadow type="math_number">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                            </value>
                                                            <value name="MESSAGE">
                                                              <shadow type="Message"></shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">economy</field>
                                                  </block>
                                                </value>
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
                                                  <block type="text">
                                                    <field name="TEXT">coins-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id">
                                                    <value name="MEMBER">
                                                      <block type="jg_message_mentioned_member_number_on_message">
                                                        <field name="TYPE">members</field>
                                                        <value name="INDEX">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                        <value name="MESSAGE">
                                                          <shadow type="Message"></shadow>
                                                        </value>
                                                      </block>
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
                                              <block type="jg_text_remake_paragraph_quotes">
                                                <field name="TEXT">economy</field>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_send_wait_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">how many coins do you want to add</field>
                                              </shadow>
                                            </value>
                                            <value name="CHANNEL">
                                              <block type="s4d_message_channel"></block>
                                            </value>
                                            <value name="MEMBER">
                                              <block type="s4d_message_member"></block>
                                            </value>
                                            <value name="TIME">
                                              <shadow type="math_number">
                                                <field name="NUM">10</field>
                                              </shadow>
                                            </value>
                                            <statement name="THEN">
                                              <block type="variables_set">
                                                <field name="VAR">coin_answer</field>
                                                <value name="VALUE">
                                                  <block type="s4d_send_wait_reply_value"></block>
                                                </value>
                                                <next>
                                                  <block type="controls_if">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_operation">
                                                        <field name="OP">AND</field>
                                                        <value name="A">
                                                          <block type="logic_operation">
                                                            <field name="OP">OR</field>
                                                            <value name="A">
                                                              <block type="math_number_property">
                                                                <mutation divisor_input="false"></mutation>
                                                                <field name="PROPERTY">EVEN</field>
                                                                <value name="NUMBER_TO_CHECK">
                                                                  <shadow type="math_number">
                                                                    <field name="NUM">0</field>
                                                                  </shadow>
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="math_number_property">
                                                                <mutation divisor_input="false"></mutation>
                                                                <field name="PROPERTY">ODD</field>
                                                                <value name="NUMBER_TO_CHECK">
                                                                  <shadow type="math_number">
                                                                    <field name="NUM">0</field>
                                                                  </shadow>
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_operation">
                                                            <field name="OP">AND</field>
                                                            <value name="A">
                                                              <block type="logic_compare">
                                                                <field name="OP">GTE</field>
                                                                <value name="A">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number">
                                                                    <field name="NUM">-1000000</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="logic_compare">
                                                                <field name="OP">LTE</field>
                                                                <value name="A">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number">
                                                                    <field name="NUM">1000000</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_add_data_new">
                                                        <value name="COUNT">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="variables_get">
                                                            <field name="VAR">coin_answer</field>
                                                          </block>
                                                        </value>
                                                        <value name="KEY">
                                                          <shadow type="text">
                                                            <field name="TEXT">points</field>
                                                          </shadow>
                                                          <block type="text_join" inline="true">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text">
                                                                <field name="TEXT">coins-</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_member_id">
                                                                <value name="MEMBER">
                                                                  <block type="jg_message_mentioned_member_number_on_message">
                                                                    <field name="TYPE">members</field>
                                                                    <value name="INDEX">
                                                                      <shadow type="math_number">
                                                                        <field name="NUM">1</field>
                                                                      </shadow>
                                                                    </value>
                                                                    <value name="MESSAGE">
                                                                      <shadow type="Message"></shadow>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="NAME">
                                                          <block type="jg_text_remake_paragraph_quotes">
                                                            <field name="TEXT">economy</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">enter a valid number</field>
                                                              </shadow>
                                                              <block type="text_join" inline="true">
                                                                <mutation items="3"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text">
                                                                    <field name="TEXT">added </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coin_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text">
                                                                    <field name="TEXT"> coins to the member</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">enter a valid number between -1000000 and 1000000 and also redo the edit coins process to edit coins of a member</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">you need the manage server permission to use this command</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="s4d_starts_with" inline="true">
                                <value name="STRING">
                                  <shadow type="text">
                                    <field name="TEXT">abc</field>
                                  </shadow>
                                  <block type="s4d_message_content"></block>
                                </value>
                                <value name="SUBSTRING">
                                  <shadow type="text">
                                    <field name="TEXT">$reset</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="controls_if">
                                <mutation else="1"></mutation>
                                <value name="IF0">
                                  <block type="s4d_member_has_permission">
                                    <field name="PERMISSION">MANAGE_GUILD</field>
                                    <value name="MEMBER">
                                      <block type="s4d_message_member"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch">
                                    <statement name="try">
                                      <block type="s4d_set_data_new">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" inline="true">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="text">
                                                <field name="TEXT">coins-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id">
                                                <value name="MEMBER">
                                                  <block type="jg_message_mentioned_member_number_on_message">
                                                    <field name="TYPE">members</field>
                                                    <value name="INDEX">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <value name="MESSAGE">
                                                      <shadow type="Message"></shadow>
                                                    </value>
                                                  </block>
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
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">economy</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_embed_create">
                                            <field name="NAME">embed</field>
                                            <statement name="THEN">
                                              <block type="s4d_embed_set_color">
                                                <value name="COLOUR">
                                                  <shadow type="colour_picker">
                                                    <field name="COLOUR">#6666cc</field>
                                                  </shadow>
                                                  <block type="colour_random"></block>
                                                </value>
                                                <next>
                                                  <block type="s4d_embed_set_desc">
                                                    <value name="DESC">
                                                      <shadow type="text">
                                                        <field name="TEXT">Some desc here...</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="s4d_message_author"></block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="text">
                                                            <field name="TEXT"> reset the coin count for </field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="jg_message_mentioned_member_number_on_message">
                                                            <field name="TYPE">members</field>
                                                            <value name="INDEX">
                                                              <shadow type="math_number">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                            </value>
                                                            <value name="MESSAGE">
                                                              <shadow type="Message"></shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="text">
                                                            <field name="TEXT"> to 0</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="s4d_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="s4d_embed_send">
                                                    <field name="NAME">embed</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">you need the manage server permission to use this command</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="s4d_starts_with" inline="true">
                                    <value name="STRING">
                                      <shadow type="text">
                                        <field name="TEXT">abc</field>
                                      </shadow>
                                      <block type="s4d_message_content"></block>
                                    </value>
                                    <value name="SUBSTRING">
                                      <shadow type="text">
                                        <field name="TEXT">$give</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_try_and_catch">
                                    <statement name="try">
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_negate">
                                            <value name="BOOL">
                                              <block type="s4d_has_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_join" inline="true">
                                                    <mutation items="2"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text">
                                                        <field name="TEXT">coins-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_member_id">
                                                        <value name="MEMBER">
                                                          <block type="jg_message_mentioned_member_number_on_message">
                                                            <field name="TYPE">members</field>
                                                            <value name="INDEX">
                                                              <shadow type="math_number">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                            </value>
                                                            <value name="MESSAGE">
                                                              <shadow type="Message"></shadow>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">economy</field>
                                                  </block>
                                                </value>
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
                                                  <block type="text">
                                                    <field name="TEXT">coins-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id">
                                                    <value name="MEMBER">
                                                      <block type="jg_message_mentioned_member_number_on_message">
                                                        <field name="TYPE">members</field>
                                                        <value name="INDEX">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                        <value name="MESSAGE">
                                                          <shadow type="Message"></shadow>
                                                        </value>
                                                      </block>
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
                                              <block type="jg_text_remake_paragraph_quotes">
                                                <field name="TEXT">economy</field>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_send_wait_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">how many coins do you want to give to the member</field>
                                              </shadow>
                                            </value>
                                            <value name="CHANNEL">
                                              <block type="s4d_message_channel"></block>
                                            </value>
                                            <value name="MEMBER">
                                              <block type="s4d_message_member"></block>
                                            </value>
                                            <value name="TIME">
                                              <shadow type="math_number">
                                                <field name="NUM">10</field>
                                              </shadow>
                                            </value>
                                            <statement name="THEN">
                                              <block type="variables_set">
                                                <field name="VAR">give_answer</field>
                                                <value name="VALUE">
                                                  <block type="s4d_send_wait_reply_value"></block>
                                                </value>
                                                <next>
                                                  <block type="controls_if">
                                                    <mutation else="1"></mutation>
                                                    <value name="IF0">
                                                      <block type="logic_operation">
                                                        <field name="OP">OR</field>
                                                        <value name="A">
                                                          <block type="math_number_property">
                                                            <mutation divisor_input="false"></mutation>
                                                            <field name="PROPERTY">EVEN</field>
                                                            <value name="NUMBER_TO_CHECK">
                                                              <shadow type="math_number">
                                                                <field name="NUM">0</field>
                                                              </shadow>
                                                              <block type="variables_get">
                                                                <field name="VAR">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number_property">
                                                            <mutation divisor_input="false"></mutation>
                                                            <field name="PROPERTY">ODD</field>
                                                            <value name="NUMBER_TO_CHECK">
                                                              <shadow type="math_number">
                                                                <field name="NUM">0</field>
                                                              </shadow>
                                                              <block type="variables_get">
                                                                <field name="VAR">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="controls_if">
                                                        <mutation else="1"></mutation>
                                                        <value name="IF0">
                                                          <block type="logic_compare">
                                                            <field name="OP">GTE</field>
                                                            <value name="A">
                                                              <block type="variables_get">
                                                                <field name="VAR">coins</field>
                                                              </block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="variables_get">
                                                                <field name="VAR">give_answer</field>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_subtract_data_new">
                                                            <value name="COUNT">
                                                              <shadow type="math_number">
                                                                <field name="NUM">1</field>
                                                              </shadow>
                                                              <block type="variables_get">
                                                                <field name="VAR">give_answer</field>
                                                              </block>
                                                            </value>
                                                            <value name="KEY">
                                                              <shadow type="text">
                                                                <field name="TEXT">points</field>
                                                              </shadow>
                                                              <block type="text_join" inline="true">
                                                                <mutation items="2"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text">
                                                                    <field name="TEXT">coins-</field>
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
                                                              <block type="jg_text_remake_paragraph_quotes">
                                                                <field name="TEXT">economy</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_add_data_new">
                                                                <value name="COUNT">
                                                                  <shadow type="math_number">
                                                                    <field name="NUM">1</field>
                                                                  </shadow>
                                                                  <block type="variables_get">
                                                                    <field name="VAR">give_answer</field>
                                                                  </block>
                                                                </value>
                                                                <value name="KEY">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">points</field>
                                                                  </shadow>
                                                                  <block type="text_join" inline="true">
                                                                    <mutation items="2"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="text">
                                                                        <field name="TEXT">coins-</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="s4d_member_id">
                                                                        <value name="MEMBER">
                                                                          <block type="jg_message_mentioned_member_number_on_message">
                                                                            <field name="TYPE">members</field>
                                                                            <value name="INDEX">
                                                                              <shadow type="math_number">
                                                                                <field name="NUM">1</field>
                                                                              </shadow>
                                                                            </value>
                                                                            <value name="MESSAGE">
                                                                              <shadow type="Message"></shadow>
                                                                            </value>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="NAME">
                                                                  <block type="jg_text_remake_paragraph_quotes">
                                                                    <field name="TEXT">economy</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_embed_create">
                                                                    <field name="NAME">embed</field>
                                                                    <statement name="THEN">
                                                                      <block type="s4d_embed_set_color">
                                                                        <value name="COLOUR">
                                                                          <shadow type="colour_picker">
                                                                            <field name="COLOUR">#6666cc</field>
                                                                          </shadow>
                                                                          <block type="colour_random"></block>
                                                                        </value>
                                                                        <next>
                                                                          <block type="s4d_embed_set_desc">
                                                                            <value name="DESC">
                                                                              <shadow type="text">
                                                                                <field name="TEXT">Some desc here...</field>
                                                                              </shadow>
                                                                              <block type="text_join">
                                                                                <mutation items="5"></mutation>
                                                                                <value name="ADD0">
                                                                                  <block type="s4d_message_author"></block>
                                                                                </value>
                                                                                <value name="ADD1">
                                                                                  <block type="text">
                                                                                    <field name="TEXT"> you successfully gave </field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD2">
                                                                                  <block type="variables_get">
                                                                                    <field name="VAR">give_answer</field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD3">
                                                                                  <block type="text">
                                                                                    <field name="TEXT"> coins to </field>
                                                                                  </block>
                                                                                </value>
                                                                                <value name="ADD4">
                                                                                  <block type="jg_message_mentioned_member_number_on_message">
                                                                                    <field name="TYPE">members</field>
                                                                                    <value name="INDEX">
                                                                                      <shadow type="math_number">
                                                                                        <field name="NUM">1</field>
                                                                                      </shadow>
                                                                                    </value>
                                                                                    <value name="MESSAGE">
                                                                                      <shadow type="Message"></shadow>
                                                                                    </value>
                                                                                  </block>
                                                                                </value>
                                                                              </block>
                                                                            </value>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </statement>
                                                                    <next>
                                                                      <block type="s4d_reply">
                                                                        <value name="CONTENT">
                                                                          <shadow type="text">
                                                                            <field name="TEXT">Hey!</field>
                                                                          </shadow>
                                                                          <block type="s4d_embed_send">
                                                                            <field name="NAME">embed</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <statement name="ELSE">
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">you dont have enough coins to donate to the member</field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </statement>
                                                      </block>
                                                    </statement>
                                                    <statement name="ELSE">
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">enter a valid number and also redo the give process to give coins to the member</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <statement name="catch">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">ping a valid memeber</field>
                                          </shadow>
                                        </value>
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
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;

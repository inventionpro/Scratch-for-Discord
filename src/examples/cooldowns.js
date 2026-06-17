export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>member_unix</variable>
  </variables>
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <shadow type="text">
        <field name="TEXT">Your bot token</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" x="0" y="106">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_negate">
            <value name="BOOL">
              <block type="s4d_has_data2">
                <value name="KEY">
                  <shadow type="text">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="s4d_member_id">
                        <value name="MEMBER">
                          <block type="s4d_message_member"></block>
                        </value>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text">
                        <field name="TEXT">-cooldown_test</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="s4d_set_data2">
            <value name="KEY">
              <shadow type="text">
                <field name="TEXT">hello</field>
              </shadow>
              <block type="text_join" inline="true">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="s4d_member_id">
                    <value name="MEMBER">
                      <block type="s4d_message_member"></block>
                    </value>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text">
                    <field name="TEXT">-cooldown_test</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="VALUE">
              <shadow type="text">
                <field name="TEXT">world</field>
              </shadow>
              <block type="frost_current">
                <field name="DATA_TYPE">UNIX</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="variables_set">
            <field name="VAR">member_unix</field>
            <value name="VALUE">
              <block type="s4d_get_data2">
                <value name="KEY">
                  <shadow type="text">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="s4d_member_id">
                        <value name="MEMBER">
                          <block type="s4d_message_member"></block>
                        </value>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text">
                        <field name="TEXT">-cooldown_test</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="controls_if">
                <value name="IF0">
                  <block type="s4d_starts_with" inline="true">
                    <value name="STRING">
                      <shadow type="text">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="text_changeCase">
                        <field name="CASE">LOWERCASE</field>
                        <value name="TEXT">
                          <shadow type="text">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="s4d_message_content"></block>
                        </value>
                      </block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text">
                        <field name="TEXT">!test</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if">
                    <mutation else="1"></mutation>
                    <value name="IF0">
                      <block type="logic_compare">
                        <field name="OP">LTE</field>
                        <value name="A">
                          <block type="variables_get">
                            <field name="VAR">member_unix</field>
                          </block>
                        </value>
                        <value name="B">
                          <block type="frost_current">
                            <field name="DATA_TYPE">UNIX</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="s4d_reply">
                        <value name="CONTENT">
                          <shadow type="text">
                            <field name="TEXT">Done, you now can't use this command for 5 seconds</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="s4d_set_data2">
                            <value name="KEY">
                              <shadow type="text">
                                <field name="TEXT">hello</field>
                              </shadow>
                              <block type="text_join" inline="true">
                                <mutation items="2"></mutation>
                                <value name="ADD0">
                                  <block type="s4d_member_id">
                                    <value name="MEMBER">
                                      <block type="s4d_message_member"></block>
                                    </value>
                                  </block>
                                </value>
                                <value name="ADD1">
                                  <block type="text">
                                    <field name="TEXT">-cooldown_test</field>
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
                                  <block type="frost_current">
                                    <field name="DATA_TYPE">UNIX</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number">
                                    <field name="NUM">5</field>
                                  </shadow>
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
                            <field name="TEXT">Done, you now can't use this command for 5 seconds</field>
                          </shadow>
                          <block type="text_join" inline="true">
                            <mutation items="3"></mutation>
                            <value name="ADD0">
                              <block type="text">
                                <field name="TEXT">You are on cooldown wait \`</field>
                              </block>
                            </value>
                            <value name="ADD1">
                              <block type="math_arithmetic">
                                <field name="OP">MINUS</field>
                                <value name="A">
                                  <shadow type="math_number">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get">
                                    <field name="VAR">member_unix</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="frost_current">
                                    <field name="DATA_TYPE">UNIX</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="ADD2">
                              <block type="text">
                                <field name="TEXT">\` more seconds</field>
                              </block>
                            </value>
                          </block>
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
    </statement>
  </block>
</xml>`;

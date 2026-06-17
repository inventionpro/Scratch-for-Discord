export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>command</variable>
    <variable>regex</variable>
    <variable>matches</variable>
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
      <block type="variables_set">
        <field name="VAR">arguments</field>
        <value name="VALUE">
          <block type="lists_split">
            <mutation mode="SPLIT"></mutation>
            <field name="MODE">SPLIT</field>
            <value name="INPUT">
              <block type="s4d_message_content"></block>
            </value>
            <value name="DELIM">
              <shadow type="text">
                <field name="TEXT"> </field>
              </shadow>
            </value>
          </block>
        </value>
        <next>
          <block type="variables_set">
            <field name="VAR">command</field>
            <value name="VALUE">
              <block type="lists_getIndex">
                <mutation statement="false" at="true"></mutation>
                <field name="MODE">GET_REMOVE</field>
                <field name="WHERE">FROM_START</field>
                <value name="VALUE">
                  <block type="variables_get">
                    <field name="VAR">arguments</field>
                  </block>
                </value>
                <value name="AT">
                  <block type="math_number">
                    <field name="NUM">1</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="controls_if">
                <value name="IF0">
                  <block type="logic_compare">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="variables_get">
                        <field name="VAR">command</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="text">
                        <field name="TEXT">!bracket-text</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_set">
                    <field name="VAR">regex</field>
                    <value name="VALUE">
                      <block type="jg_text_regex_create_new_regex_of">
                        <field name="TEXT">/(?&lt;=\\[)\\S*(?=\\])/gm</field>
                      </block>
                    </value>
                    <next>
                      <block type="jg_comments_connected_comment">
                        <field name="TEXT">The above RegEx gets all of the text&amp;#10;inside of [ and ]&amp;#10;RegEx can be made with https://regex101.com/</field>
                        <next>
                          <block type="variables_set">
                            <field name="VAR">matches</field>
                            <value name="VALUE">
                              <block type="jg_lists_regex_list_of_matches_from_regex_on_text">
                                <value name="REGEX">
                                  <block type="variables_get">
                                    <field name="VAR">regex</field>
                                  </block>
                                </value>
                                <value name="TEXT">
                                  <block type="lists_split">
                                    <mutation mode="JOIN"></mutation>
                                    <field name="MODE">JOIN</field>
                                    <value name="INPUT">
                                      <block type="variables_get">
                                        <field name="VAR">arguments</field>
                                      </block>
                                    </value>
                                    <value name="DELIM">
                                      <shadow type="text">
                                        <field name="TEXT"> </field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare">
                                    <field name="OP">GT</field>
                                    <value name="A">
                                      <block type="lists_length">
                                        <value name="VALUE">
                                          <block type="variables_get">
                                            <field name="VAR">matches</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="math_number">
                                        <field name="NUM">0</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">Hey!</field>
                                      </shadow>
                                      <block type="text_join">
                                        <mutation items="2"></mutation>
                                        <value name="ADD0">
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">The text inside of brackets are:&amp;#10;</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="lists_split">
                                            <mutation mode="JOIN"></mutation>
                                            <field name="MODE">JOIN</field>
                                            <value name="INPUT">
                                              <block type="variables_get">
                                                <field name="VAR">matches</field>
                                              </block>
                                            </value>
                                            <value name="DELIM">
                                              <shadow type="text">
                                                <field name="TEXT">, </field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
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
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;

export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>command</variable>
    <variable>coins</variable>
    <variable>usernames</variable>
    <variable>current</variable>
    <variable>text</variable>
    <variable>i</variable>
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
                        <field name="TEXT">!leaderboard</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="jg_comments_connected_comment">
                    <field name="TEXT">The leaderboard here uses a dootabase.&amp;#10;The item we are getting is the member ID,&amp;#10;and the value is how many coins they have.&amp;#10;&amp;#10;The goal is to get a fully sorted list that has&amp;#10;the members tag and coins on each item.&amp;#10;This allows for multiple pages.</field>
                    <next>
                      <block type="jg_web_currentdata">
                        <value name="datafile">
                          <block type="jg_text_remake_paragraph_quotes">
                            <field name="TEXT">coins.json</field>
                          </block>
                        </value>
                        <next>
                          <block type="jg_comments_connected_comment">
                            <field name="TEXT">The Data File will be the database&amp;#10;named "coins.json" in our repl.&amp;#10;This contains our users and their coins.</field>
                            <next>
                              <block type="jg_comments_connected_image">
                                <field name="TEXT">/builtin_examples/leaderboard.png</field>
                                <next>
                                  <block type="variables_set">
                                    <field name="VAR">coins</field>
                                    <value name="VALUE">
                                      <block type="lists_create_with">
                                        <mutation items="0"></mutation>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="variables_set">
                                        <field name="VAR">usernames</field>
                                        <value name="VALUE">
                                          <block type="lists_create_with">
                                            <mutation items="0"></mutation>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="jg_web_foreachkey">
                                            <statement name="THEN">
                                              <block type="variables_set">
                                                <field name="VAR">current</field>
                                                <value name="VALUE">
                                                  <block type="math_number">
                                                    <field name="NUM">1</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_whileUntil">
                                                    <field name="MODE">UNTIL</field>
                                                    <value name="BOOL">
                                                      <block type="logic_compare">
                                                        <field name="OP">GTE</field>
                                                        <value name="A">
                                                          <block type="jg_web_valueofkey">
                                                            <value name="key">
                                                              <block type="jg_web_foreachkeyinput"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="jg_web_valueofkey">
                                                            <value name="key">
                                                              <block type="jg_web_keynumber">
                                                                <value name="datafile">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">current</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="math_change">
                                                        <field name="VAR">current</field>
                                                        <value name="DELTA">
                                                          <shadow type="math_number">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="jg_comments_connected_comment">
                                                        <field name="TEXT">The repeat until loop will get the index we&amp;#10;should insert the values at.</field>
                                                        <next>
                                                          <block type="lists_setIndex">
                                                            <mutation at="true"></mutation>
                                                            <field name="MODE">INSERT</field>
                                                            <field name="WHERE">FROM_START</field>
                                                            <value name="LIST">
                                                              <block type="variables_get">
                                                                <field name="VAR">coins</field>
                                                              </block>
                                                            </value>
                                                            <value name="AT">
                                                              <block type="variables_get">
                                                                <field name="VAR">current</field>
                                                              </block>
                                                            </value>
                                                            <value name="TO">
                                                              <block type="jg_web_valueofkey">
                                                                <value name="key">
                                                                  <block type="jg_web_foreachkeyinput"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="lists_setIndex">
                                                                <mutation at="true"></mutation>
                                                                <field name="MODE">INSERT</field>
                                                                <field name="WHERE">FROM_START</field>
                                                                <value name="LIST">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">usernames</field>
                                                                  </block>
                                                                </value>
                                                                <value name="AT">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">current</field>
                                                                  </block>
                                                                </value>
                                                                <value name="TO">
                                                                  <block type="jg_web_foreachkeyinput"></block>
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
                                            </statement>
                                            <next>
                                              <block type="variables_set">
                                                <field name="VAR">text</field>
                                                <value name="VALUE">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">Format: (username): (coins)&amp;#10;&amp;#10;</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="controls_for">
                                                    <field name="VAR">i</field>
                                                    <value name="FROM">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <value name="TO">
                                                      <shadow type="math_number">
                                                        <field name="NUM">10</field>
                                                      </shadow>
                                                      <block type="lists_length">
                                                        <value name="VALUE">
                                                          <block type="variables_get">
                                                            <field name="VAR">coins</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="BY">
                                                      <shadow type="math_number">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                    <statement name="DO">
                                                      <block type="variables_set">
                                                        <field name="VAR">text</field>
                                                        <value name="VALUE">
                                                          <block type="text_join">
                                                            <mutation items="5"></mutation>
                                                            <value name="ADD0">
                                                              <block type="variables_get">
                                                                <field name="VAR">text</field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_member_username">
                                                                <value name="MEMBER">
                                                                  <block type="jg_members_get_member_by_id">
                                                                    <value name="ID">
                                                                      <shadow type="text">
                                                                        <field name="TEXT">12345</field>
                                                                      </shadow>
                                                                      <block type="lists_getIndex">
                                                                        <mutation statement="false" at="true"></mutation>
                                                                        <field name="MODE">GET</field>
                                                                        <field name="WHERE">FROM_START</field>
                                                                        <value name="VALUE">
                                                                          <block type="variables_get">
                                                                            <field name="VAR">usernames</field>
                                                                          </block>
                                                                        </value>
                                                                        <value name="AT">
                                                                          <block type="variables_get">
                                                                            <field name="VAR">i</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD2">
                                                              <block type="jg_text_remake_paragraph_quotes">
                                                                <field name="TEXT">: </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD3">
                                                              <block type="lists_getIndex">
                                                                <mutation statement="false" at="true"></mutation>
                                                                <field name="MODE">GET</field>
                                                                <field name="WHERE">FROM_START</field>
                                                                <value name="VALUE">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">coins</field>
                                                                  </block>
                                                                </value>
                                                                <value name="AT">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">i</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="ADD4">
                                                              <block type="s4d_newline"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="jg_comments_connected_comment">
                                                        <field name="TEXT">This loop simply gets the data from the list and&amp;#10;puts it into text for something like an embed.&amp;#10;You can modify this to change the way it looks.</field>
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
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;

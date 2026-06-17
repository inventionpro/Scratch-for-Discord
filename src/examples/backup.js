export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>command</variable>
    <variable>option</variable>
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
        <field name="TEXT">backup</field>
      </shadow>
    </value>
    <value name="FILE">
      <shadow type="text">
        <field name="TEXT">database</field>
      </shadow>
    </value>
  </block>
  <block type="s4d_on_message" x="0" y="212">
    <statement name="STATEMENTS">
      <block type="variables_set">
        <field name="VAR">arguments</field>
        <value name="VALUE">
          <block type="lists_split">
            <mutation mode="SPLIT"></mutation>
            <field name="MODE">SPLIT</field>
            <value name="INPUT">
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
                        <field name="TEXT">-backup</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="controls_if">
                    <mutation else="1"></mutation>
                    <value name="IF0">
                      <block type="s4d_member_has_permission">
                        <field name="PERMISSION">ADMINISTRATOR</field>
                        <value name="MEMBER">
                          <block type="s4d_message_member"></block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set">
                        <field name="VAR">option</field>
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
                            <mutation elseif="2" else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get">
                                    <field name="VAR">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text">
                                    <field name="TEXT">create</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_send_wait_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">What do you want to name your backup?</field>
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
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="logic_negate">
                                        <value name="BOOL">
                                          <block type="s4d_has_data_new">
                                            <value name="KEY">
                                              <shadow type="text">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_changeCase">
                                                <field name="CASE">LOWERCASE</field>
                                                <value name="TEXT">
                                                  <shadow type="text">
                                                    <field name="TEXT">abc</field>
                                                  </shadow>
                                                  <block type="text_join">
                                                    <mutation items="4"></mutation>
                                                    <value name="ADD0">
                                                      <block type="text">
                                                        <field name="TEXT">bak-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="s4d_message_guild_raw">
                                                        <field name="SEARCH_TYPE">ID</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="text">
                                                        <field name="TEXT">-</field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD3">
                                                      <block type="s4d_send_wait_reply_value"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="NAME">
                                              <block type="jg_text_remake_paragraph_quotes">
                                                <field name="TEXT">backup</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then">
                                        <value name="CONTENT">
                                          <block type="text">
                                            <field name="TEXT">**Saving Backup...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_create_backup_of_guild_then">
                                            <value name="GUILD">
                                              <block type="s4d_message_guild"></block>
                                            </value>
                                            <statement name="THEN">
                                              <block type="s4d_set_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="VALUE">
                                                  <shadow type="text">
                                                    <field name="TEXT">world</field>
                                                  </shadow>
                                                  <block type="s4d_backup_id"></block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">backup</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">✅ **Backup saved!**</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">❌ **A backup with that name already exists**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF1">
                              <block type="logic_compare">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get">
                                    <field name="VAR">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text">
                                    <field name="TEXT">delete</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO1">
                              <block type="s4d_send_wait_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">What is the name of the backup to delete?</field>
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
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_has_data_new">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_changeCase">
                                            <field name="CASE">LOWERCASE</field>
                                            <value name="TEXT">
                                              <shadow type="text">
                                                <field name="TEXT">abc</field>
                                              </shadow>
                                              <block type="text_join">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="text">
                                                    <field name="TEXT">bak-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_message_guild_raw">
                                                    <field name="SEARCH_TYPE">ID</field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="text">
                                                    <field name="TEXT">-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="s4d_send_wait_reply_value"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">backup</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then">
                                        <value name="CONTENT">
                                          <block type="text">
                                            <field name="TEXT">✅  **Deleting backup...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_delete_backup">
                                            <value name="ID">
                                              <block type="s4d_get_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">backup</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_delete_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">backup</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">✅ **Backup deleted**</field>
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
                                    <statement name="ELSE">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">❌ **A backup with that name does not exist**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <value name="IF2">
                              <block type="logic_compare">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get">
                                    <field name="VAR">option</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="text">
                                    <field name="TEXT">load</field>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO2">
                              <block type="s4d_send_wait_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">What is the name of the backup to load?</field>
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
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                                <statement name="THEN">
                                  <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0">
                                      <block type="s4d_has_data_new">
                                        <value name="KEY">
                                          <shadow type="text">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_changeCase">
                                            <field name="CASE">LOWERCASE</field>
                                            <value name="TEXT">
                                              <shadow type="text">
                                                <field name="TEXT">abc</field>
                                              </shadow>
                                              <block type="text_join">
                                                <mutation items="4"></mutation>
                                                <value name="ADD0">
                                                  <block type="text">
                                                    <field name="TEXT">bak-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_message_guild_raw">
                                                    <field name="SEARCH_TYPE">ID</field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="text">
                                                    <field name="TEXT">-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="s4d_send_wait_reply_value"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">backup</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply_then">
                                        <value name="CONTENT">
                                          <block type="text">
                                            <field name="TEXT">✅  **Backup loading...**</field>
                                          </block>
                                        </value>
                                        <statement name="THEN">
                                          <block type="s4d_backup_load">
                                            <value name="GUILD">
                                              <block type="s4d_message_guild"></block>
                                            </value>
                                            <value name="ID">
                                              <block type="s4d_get_data_new">
                                                <value name="KEY">
                                                  <shadow type="text">
                                                    <field name="TEXT">hello</field>
                                                  </shadow>
                                                  <block type="text_changeCase">
                                                    <field name="CASE">LOWERCASE</field>
                                                    <value name="TEXT">
                                                      <shadow type="text">
                                                        <field name="TEXT">abc</field>
                                                      </shadow>
                                                      <block type="text_join">
                                                        <mutation items="4"></mutation>
                                                        <value name="ADD0">
                                                          <block type="text">
                                                            <field name="TEXT">bak-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD1">
                                                          <block type="s4d_message_guild_raw">
                                                            <field name="SEARCH_TYPE">ID</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD2">
                                                          <block type="text">
                                                            <field name="TEXT">-</field>
                                                          </block>
                                                        </value>
                                                        <value name="ADD3">
                                                          <block type="s4d_send_wait_reply_value"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="NAME">
                                                  <block type="jg_text_remake_paragraph_quotes">
                                                    <field name="TEXT">backup</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="BUTTONS">
                                              <block type="s4d_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">✅  **Backup loaded**</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">❌ **A backup with that name does not exist**</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </statement>
                                  </block>
                                </statement>
                              </block>
                            </statement>
                            <statement name="ELSE">
                              <block type="s4d_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">❌ **You need to send ecreatee, edeletee, or eloade**</field>
                                  </shadow>
                                </value>
                              </block>
                            </statement>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <statement name="ELSE">
                      <block type="s4d_reply">
                        <value name="CONTENT">
                          <shadow type="text">
                            <field name="TEXT">❌ **You need permission eadminsitratore for that command**</field>
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
    </statement>
  </block>
</xml>`;

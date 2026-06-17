export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>arguments</variable>
    <variable>command</variable>
    <variable>volume</variable>
    <variable>onoff</variable>
  </variables>
  <block type="s4d_track_playing" x="-1834" y="-423">
    <statement name="STATEMENTS">
      <block type="s4d_create_embed_then">
        <statement name="THEN">
          <block type="s4d_create_embed_then_set_title">
            <value name="TITLE">
              <block type="text_join">
                <mutation items="14"></mutation>
                <value name="ADD0">
                  <block type="text">
                    <field name="TEXT">now playing </field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="s4d_track_name"></block>
                </value>
                <value name="ADD2">
                  <block type="s4d_newline"></block>
                </value>
                <value name="ADD3">
                  <block type="text">
                    <field name="TEXT">author: </field>
                  </block>
                </value>
                <value name="ADD4">
                  <block type="s4d_track_author"></block>
                </value>
                <value name="ADD5">
                  <block type="s4d_newline"></block>
                </value>
                <value name="ADD6">
                  <block type="text">
                    <field name="TEXT">url: </field>
                  </block>
                </value>
                <value name="ADD7">
                  <block type="s4d_track_url"></block>
                </value>
                <value name="ADD8">
                  <block type="s4d_newline"></block>
                </value>
                <value name="ADD9">
                  <block type="text">
                    <field name="TEXT">views: </field>
                  </block>
                </value>
                <value name="ADD10">
                  <block type="s4d_track_views"></block>
                </value>
                <value name="ADD11">
                  <block type="s4d_newline"></block>
                </value>
                <value name="ADD12">
                  <block type="text">
                    <field name="TEXT">duration: </field>
                  </block>
                </value>
                <value name="ADD13">
                  <block type="s4d_track_duration"></block>
                </value>
              </block>
            </value>
            <next>
              <block type="s4d_create_embed_then_set_image">
                <value name="IMAGE">
                  <block type="s4d_track_thumbnail"></block>
                </value>
                <next>
                  <block type="s4d_create_embed_then_send">
                    <value name="CHANNEL">
                      <block type="s4d_track_channel"></block>
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
  <block type="s4d_queue_finished" x="-1149" y="-118">
    <statement name="STATEMENTS">
      <block type="s4d_send_channel">
        <value name="CONTENT">
          <block type="text">
            <field name="TEXT">queue finished</field>
          </block>
        </value>
        <value name="CHANNEL">
          <block type="s4d_track_channel"></block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_track_added" x="-594" y="-119">
    <statement name="STATEMENTS">
      <block type="s4d_send_channel">
        <value name="CONTENT">
          <block type="text_join">
            <mutation items="3"></mutation>
            <value name="ADD0">
              <block type="text">
                <field name="TEXT">music </field>
              </block>
            </value>
            <value name="ADD1">
              <block type="s4d_track_name"></block>
            </value>
            <value name="ADD2">
              <block type="text">
                <field name="TEXT">added to queue</field>
              </block>
            </value>
          </block>
        </value>
        <value name="CHANNEL">
          <block type="s4d_track_channel"></block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_login" x="4" y="-60">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" x="82" y="151">
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
                        <field name="TEXT">!play</field>
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
                          <block type="s4d_voice_channel_id"></block>
                        </value>
                        <value name="B">
                          <block type="logic_null"></block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="s4d_reply">
                        <value name="CONTENT">
                          <shadow type="text">
                            <field name="TEXT">you are not in a voice channel!</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="s4d_return"></block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_operation">
                            <field name="OP">AND</field>
                            <value name="A">
                              <block type="logic_compare">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_bot_voice_channel"></block>
                                </value>
                                <value name="B">
                                  <block type="logic_null"></block>
                                </value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="logic_compare">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_voice_channel_id"></block>
                                </value>
                                <value name="B">
                                  <block type="s4d_bot_voice_channel"></block>
                                </value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply">
                            <value name="CONTENT">
                              <shadow type="text">
                                <field name="TEXT">you are not in my voice channel!</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_return"></block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="s4d_create_queue">
                            <value name="GUILD">
                              <block type="s4d_message_guild"></block>
                            </value>
                            <value name="CHANNEL">
                              <block type="s4d_message_channel"></block>
                            </value>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_negate">
                                    <value name="BOOL">
                                      <block type="s4d_connected"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_connect">
                                    <value name="VOICECHANNEL">
                                      <block type="s4d_voice_channel"></block>
                                    </value>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_play">
                                    <value name="SEARCH">
                                      <block type="s4d_search">
                                        <value name="STRING">
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
                                        <value name="MEMBER">
                                          <block type="s4d_message_author"></block>
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
                    </next>
                  </block>
                </statement>
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
                            <field name="TEXT">!pause</field>
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
                              <block type="s4d_voice_channel"></block>
                            </value>
                            <value name="B">
                              <block type="logic_null"></block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="s4d_reply">
                            <value name="CONTENT">
                              <shadow type="text">
                                <field name="TEXT">you are not in a voice channel!</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="s4d_return"></block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if">
                            <value name="IF0">
                              <block type="logic_compare">
                                <field name="OP">NEQ</field>
                                <value name="A">
                                  <block type="s4d_voice_channel_id"></block>
                                </value>
                                <value name="B">
                                  <block type="s4d_bot_voice_channel"></block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">you are not in my voice channel!</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="s4d_return"></block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_negate">
                                    <value name="BOOL">
                                      <block type="s4d_playing">
                                        <value name="QUEUE">
                                          <block type="s4d_get_queue">
                                            <value name="SERVER">
                                              <block type="s4d_message_guild"></block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">there is no music playing!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="s4d_pause">
                                    <value name="QUEUE">
                                      <block type="s4d_get_queue">
                                        <value name="SERVER">
                                          <block type="s4d_message_guild"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">paused music</field>
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
                    </statement>
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
                                <field name="TEXT">!resume</field>
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
                                  <block type="s4d_voice_channel"></block>
                                </value>
                                <value name="B">
                                  <block type="logic_null"></block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="s4d_reply">
                                <value name="CONTENT">
                                  <shadow type="text">
                                    <field name="TEXT">you are not in a voice channel!</field>
                                  </shadow>
                                </value>
                                <next>
                                  <block type="s4d_return"></block>
                                </next>
                              </block>
                            </statement>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare">
                                    <field name="OP">NEQ</field>
                                    <value name="A">
                                      <block type="s4d_voice_channel_id"></block>
                                    </value>
                                    <value name="B">
                                      <block type="s4d_bot_voice_channel"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">you are not in my voice channel!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_negate">
                                        <value name="BOOL">
                                          <block type="s4d_playing">
                                            <value name="QUEUE">
                                              <block type="s4d_get_queue">
                                                <value name="SERVER">
                                                  <block type="s4d_message_guild"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">there is no music playing!</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_return"></block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="s4d_resume">
                                        <value name="QUEUE">
                                          <block type="s4d_get_queue">
                                            <value name="SERVER">
                                              <block type="s4d_message_guild"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="s4d_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">resumed the music</field>
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
                        </statement>
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
                                    <field name="TEXT">!stop</field>
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
                                      <block type="s4d_voice_channel"></block>
                                    </value>
                                    <value name="B">
                                      <block type="logic_null"></block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="s4d_reply">
                                    <value name="CONTENT">
                                      <shadow type="text">
                                        <field name="TEXT">you are not in a voice channel!</field>
                                      </shadow>
                                    </value>
                                    <next>
                                      <block type="s4d_return"></block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0">
                                      <block type="logic_compare">
                                        <field name="OP">NEQ</field>
                                        <value name="A">
                                          <block type="s4d_voice_channel_id"></block>
                                        </value>
                                        <value name="B">
                                          <block type="s4d_bot_voice_channel"></block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_reply">
                                        <value name="CONTENT">
                                          <shadow type="text">
                                            <field name="TEXT">you are not in my voice channel!</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_return"></block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_negate">
                                            <value name="BOOL">
                                              <block type="s4d_playing">
                                                <value name="QUEUE">
                                                  <block type="s4d_get_queue">
                                                    <value name="SERVER">
                                                      <block type="s4d_message_guild"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">there is no music playing!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="s4d_stop">
                                            <value name="QUEUE">
                                              <block type="s4d_get_queue">
                                                <value name="SERVER">
                                                  <block type="s4d_message_guild"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="s4d_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">stoped music</field>
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
                            </statement>
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
                                        <field name="TEXT">!volume</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <statement name="DO0">
                                  <block type="variables_set">
                                    <field name="VAR">volume</field>
                                    <value name="VALUE">
                                      <block type="lists_getIndex">
                                        <mutation statement="false" at="true"></mutation>
                                        <field name="MODE">GET</field>
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
                                              <block type="s4d_voice_channel"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">you are not in a voice channel!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if">
                                            <value name="IF0">
                                              <block type="logic_compare">
                                                <field name="OP">NEQ</field>
                                                <value name="A">
                                                  <block type="s4d_voice_channel_id"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="s4d_bot_voice_channel"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="s4d_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">you are not in my voice channel!</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type="s4d_return"></block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="controls_if">
                                                <value name="IF0">
                                                  <block type="logic_negate">
                                                    <value name="BOOL">
                                                      <block type="s4d_playing">
                                                        <value name="QUEUE">
                                                          <block type="s4d_get_queue">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">there is no music playing!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="controls_if">
                                                    <value name="IF0">
                                                      <block type="logic_compare">
                                                        <field name="OP">LT</field>
                                                        <value name="A">
                                                          <block type="s4d_string_to_number">
                                                            <value name="STRING">
                                                              <block type="variables_get">
                                                                <field name="VAR">volume</field>
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
                                                            <field name="TEXT">the volume need to be more then 0!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if">
                                                        <value name="IF0">
                                                          <block type="logic_compare">
                                                            <field name="OP">GT</field>
                                                            <value name="A">
                                                              <block type="s4d_string_to_number">
                                                                <value name="STRING">
                                                                  <block type="variables_get">
                                                                    <field name="VAR">volume</field>
                                                                  </block>
                                                                </value>
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
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">the volume need to be less then 100!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="s4d_volume">
                                                            <value name="QUEUE">
                                                              <block type="s4d_get_queue">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="VOLUME">
                                                              <block type="variables_get">
                                                                <field name="VAR">volume</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_reply">
                                                                <value name="CONTENT">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">the volume need to be less then 100!</field>
                                                                  </shadow>
                                                                  <block type="text_join">
                                                                    <mutation items="2"></mutation>
                                                                    <value name="ADD0">
                                                                      <block type="text">
                                                                        <field name="TEXT">the volume is now </field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="ADD1">
                                                                      <block type="variables_get">
                                                                        <field name="VAR">volume</field>
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
                                            <field name="TEXT">!skip</field>
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
                                              <block type="s4d_voice_channel"></block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_null"></block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="s4d_reply">
                                            <value name="CONTENT">
                                              <shadow type="text">
                                                <field name="TEXT">you are not in a voice channel!</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="s4d_return"></block>
                                            </next>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="controls_if">
                                            <value name="IF0">
                                              <block type="logic_compare">
                                                <field name="OP">NEQ</field>
                                                <value name="A">
                                                  <block type="s4d_voice_channel_id"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="s4d_bot_voice_channel"></block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="s4d_reply">
                                                <value name="CONTENT">
                                                  <shadow type="text">
                                                    <field name="TEXT">you are not in my voice channel!</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type="s4d_return"></block>
                                                </next>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="controls_if">
                                                <value name="IF0">
                                                  <block type="logic_negate">
                                                    <value name="BOOL">
                                                      <block type="s4d_playing">
                                                        <value name="QUEUE">
                                                          <block type="s4d_get_queue">
                                                            <value name="SERVER">
                                                              <block type="s4d_message_guild"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">there is no music playing!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="s4d_skip">
                                                    <value name="QUEUE">
                                                      <block type="s4d_get_queue">
                                                        <value name="SERVER">
                                                          <block type="s4d_message_guild"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">Hey!</field>
                                                          </shadow>
                                                          <block type="text_join">
                                                            <mutation items="2"></mutation>
                                                            <value name="ADD0">
                                                              <block type="text">
                                                                <field name="TEXT">skipped music </field>
                                                              </block>
                                                            </value>
                                                            <value name="ADD1">
                                                              <block type="s4d_current_track">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
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
                                        </next>
                                      </block>
                                    </statement>
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
                                                <field name="TEXT">!loop</field>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set">
                                            <field name="VAR">onoff</field>
                                            <value name="VALUE">
                                              <block type="lists_getIndex">
                                                <mutation statement="false" at="true"></mutation>
                                                <field name="MODE">GET</field>
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
                                                <mutation elseif="1" else="1"></mutation>
                                                <value name="IF0">
                                                  <block type="logic_compare">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get">
                                                        <field name="VAR">onoff</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="text">
                                                        <field name="TEXT">on</field>
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
                                                          <block type="s4d_voice_channel"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_null"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">you are not in a voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if">
                                                        <value name="IF0">
                                                          <block type="logic_compare">
                                                            <field name="OP">NEQ</field>
                                                            <value name="A">
                                                              <block type="s4d_voice_channel_id"></block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="s4d_bot_voice_channel"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">you are not in my voice channel!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="controls_if">
                                                            <value name="IF0">
                                                              <block type="logic_negate">
                                                                <value name="BOOL">
                                                                  <block type="s4d_playing">
                                                                    <value name="QUEUE">
                                                                      <block type="s4d_get_queue">
                                                                        <value name="SERVER">
                                                                          <block type="s4d_message_guild"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO0">
                                                              <block type="s4d_reply">
                                                                <value name="CONTENT">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">there is no music playing!</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_return"></block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="s4d_loop">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="LOOPING">
                                                                  <block type="logic_boolean">
                                                                    <field name="BOOL">TRUE</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_reply">
                                                                    <value name="CONTENT">
                                                                      <shadow type="text">
                                                                        <field name="TEXT">loop on</field>
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
                                                </statement>
                                                <value name="IF1">
                                                  <block type="logic_compare">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get">
                                                        <field name="VAR">onoff</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="text">
                                                        <field name="TEXT">off</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO1">
                                                  <block type="controls_if">
                                                    <value name="IF0">
                                                      <block type="logic_compare">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                          <block type="s4d_voice_channel"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="logic_null"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">you are not in a voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if">
                                                        <value name="IF0">
                                                          <block type="logic_compare">
                                                            <field name="OP">NEQ</field>
                                                            <value name="A">
                                                              <block type="s4d_voice_channel_id"></block>
                                                            </value>
                                                            <value name="B">
                                                              <block type="s4d_bot_voice_channel"></block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">you are not in my voice channel!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="controls_if">
                                                            <value name="IF0">
                                                              <block type="logic_negate">
                                                                <value name="BOOL">
                                                                  <block type="s4d_playing">
                                                                    <value name="QUEUE">
                                                                      <block type="s4d_get_queue">
                                                                        <value name="SERVER">
                                                                          <block type="s4d_message_guild"></block>
                                                                        </value>
                                                                      </block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO0">
                                                              <block type="s4d_reply">
                                                                <value name="CONTENT">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">there is no music playing!</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_return"></block>
                                                                </next>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="s4d_loop">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="LOOPING">
                                                                  <block type="logic_boolean">
                                                                    <field name="BOOL">FALSE</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="s4d_reply">
                                                                    <value name="CONTENT">
                                                                      <shadow type="text">
                                                                        <field name="TEXT">loop off</field>
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
                                                </statement>
                                                <statement name="ELSE">
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">you need to send !loop on/off</field>
                                                      </shadow>
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
                                                  <block type="variables_get">
                                                    <field name="VAR">command</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="text">
                                                    <field name="TEXT">!back</field>
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
                                                      <block type="s4d_voice_channel"></block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_null"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="s4d_reply">
                                                    <value name="CONTENT">
                                                      <shadow type="text">
                                                        <field name="TEXT">you are not in a voice channel!</field>
                                                      </shadow>
                                                    </value>
                                                    <next>
                                                      <block type="s4d_return"></block>
                                                    </next>
                                                  </block>
                                                </statement>
                                                <next>
                                                  <block type="controls_if">
                                                    <value name="IF0">
                                                      <block type="logic_compare">
                                                        <field name="OP">NEQ</field>
                                                        <value name="A">
                                                          <block type="s4d_voice_channel_id"></block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="s4d_bot_voice_channel"></block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <statement name="DO0">
                                                      <block type="s4d_reply">
                                                        <value name="CONTENT">
                                                          <shadow type="text">
                                                            <field name="TEXT">you are not in my voice channel!</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="s4d_return"></block>
                                                        </next>
                                                      </block>
                                                    </statement>
                                                    <next>
                                                      <block type="controls_if">
                                                        <value name="IF0">
                                                          <block type="logic_negate">
                                                            <value name="BOOL">
                                                              <block type="s4d_playing">
                                                                <value name="QUEUE">
                                                                  <block type="s4d_get_queue">
                                                                    <value name="SERVER">
                                                                      <block type="s4d_message_guild"></block>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                          </block>
                                                        </value>
                                                        <statement name="DO0">
                                                          <block type="s4d_reply">
                                                            <value name="CONTENT">
                                                              <shadow type="text">
                                                                <field name="TEXT">there is no music playing!</field>
                                                              </shadow>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_return"></block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                        <next>
                                                          <block type="s4d_back">
                                                            <value name="QUEUE">
                                                              <block type="s4d_get_queue">
                                                                <value name="SERVER">
                                                                  <block type="s4d_message_guild"></block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="s4d_reply">
                                                                <value name="CONTENT">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">playing previous music</field>
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

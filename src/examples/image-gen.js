export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable>prefix</variable>
  </variables>
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_connected" x="0" y="106">
    <statement name="STATEMENTS">
      <block type="variables_set">
        <field name="VAR">prefix</field>
        <value name="VALUE">
          <block type="text">
            <field name="TEXT">you bot prefix</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="s4d_on_message" x="0" y="284">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <comment pinned="false" h="80" w="160">U can replace delete with smth else</comment>
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
                <field name="TEXT"></field>
              </shadow>
              <block type="text_join" inline="true">
                <mutation items="2"></mutation>
                <value name="ADD0">
                  <block type="variables_get">
                    <field name="VAR">prefix</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="text">
                    <field name="TEXT">delete</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="send_on_channel">
            <value name="CHANNEL">
              <block type="s4d_message_channel"></block>
            </value>
            <value name="IMAGE">
              <block type="load_image">
                <value name="TOLOAD">
                  <block type="1imagepng">
                    <mutation divisor_input="false"></mutation>
                    <field name="INFO">Delete</field>
                    <value name="IMAGE">
                      <block type="s4d_member_icon">
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
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="controls_if">
            <comment pinned="false" h="80" w="160">U can replace batslap with smth else</comment>
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
                    <field name="TEXT"></field>
                  </shadow>
                  <block type="text_join" inline="true">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="variables_get">
                        <field name="VAR">prefix</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="text">
                        <field name="TEXT">batslap</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="send_on_channel">
                <value name="CHANNEL">
                  <block type="s4d_message_channel"></block>
                </value>
                <value name="IMAGE">
                  <block type="load_image">
                    <value name="TOLOAD">
                      <block type="2imagepng">
                        <field name="INFO">Batslap</field>
                        <value name="IMAGE">
                          <block type="s4d_member_icon">
                            <value name="MEMBER">
                              <block type="s4d_message_member"></block>
                            </value>
                          </block>
                        </value>
                        <value name="IMAGE2">
                          <block type="s4d_member_icon">
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
                  </block>
                </value>
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
                        <field name="TEXT"></field>
                      </shadow>
                      <block type="text_join" inline="true">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="variables_get">
                            <field name="VAR">prefix</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text">
                            <field name="TEXT">triggered</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="send_on_channel">
                    <value name="CHANNEL">
                      <block type="s4d_message_channel"></block>
                    </value>
                    <value name="IMAGE">
                      <block type="load_gif">
                        <value name="TOLOAD">
                          <block type="1imagegif">
                            <value name="IMAGE">
                              <block type="s4d_member_icon">
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
</xml>`;

export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" x="265" y="100">
    <value name="TOKEN">
      <block type="text">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="ticket_connect" x="262" y="190">
    <value name="URL">
      <block type="text">
        <field name="TEXT">Mongodb URI here or type local</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" x="262" y="266">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <comment pinned="false" h="80" w="160">This will set your ticket channel to mentioned channel</comment>
        <value name="IF0">
          <block type="s4d_starts_with">
            <value name="STRING">
              <shadow type="text">
                <field name="TEXT">abc</field>
              </shadow>
              <block type="s4d_message_content"></block>
            </value>
            <value name="SUBSTRING">
              <shadow type="text">
                <field name="TEXT">!ticket</field>
              </shadow>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="s4d_try_and_catch">
            <statement name="try">
              <block type="ticket_setup">
                <next>
                  <block type="s4d_reply">
                    <value name="CONTENT">
                      <shadow type="text">
                        <field name="TEXT"></field>
                      </shadow>
                      <block type="text_join">
                        <mutation items="4"></mutation>
                        <value name="ADD0">
                          <block type="text">
                            <field name="TEXT">I have set the ticket channel to </field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text">
                            <field name="TEXT">&lt;#</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="s4d_mentioned_channel"></block>
                        </value>
                        <value name="ADD3">
                          <block type="text">
                            <field name="TEXT">&gt;</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <statement name="catch">
              <block type="s4d_reply">
                <value name="CONTENT">
                  <shadow type="text">
                    <field name="TEXT">U need to mention a channel!</field>
                  </shadow>
                </value>
              </block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="controls_if">
            <value name="IF0">
              <block type="s4d_starts_with">
                <value name="STRING">
                  <shadow type="text">
                    <field name="TEXT">abc</field>
                  </shadow>
                  <block type="s4d_message_content"></block>
                </value>
                <value name="SUBSTRING">
                  <shadow type="text">
                    <field name="TEXT">!close</field>
                  </shadow>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="close_ticket">
                <next>
                  <block type="s4d_reply">
                    <value name="CONTENT">
                      <shadow type="text">
                        <field name="TEXT">Closed the ticket</field>
                      </shadow>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="controls_if">
                <value name="IF0">
                  <block type="s4d_starts_with">
                    <value name="STRING">
                      <shadow type="text">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="s4d_message_content"></block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text">
                        <field name="TEXT">!archive</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="s4d_reply">
                    <value name="CONTENT">
                      <shadow type="text">
                        <field name="TEXT">Archived the ticket</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="archieve_ticket"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="s4d_starts_with">
                        <value name="STRING">
                          <shadow type="text">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="s4d_message_content"></block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text">
                            <field name="TEXT">!unarchive</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="s4d_reply">
                        <value name="CONTENT">
                          <shadow type="text">
                            <field name="TEXT">Unarchived the ticket</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="unarchieve_ticket"></block>
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
    </statement>
  </block>
</xml>`;

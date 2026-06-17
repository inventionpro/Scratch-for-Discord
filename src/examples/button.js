export default `<xml xmlns="https://developers.google.com/blockly/xml">
<block type="s4d_login" x="176" y="13">
  <value name="TOKEN">
    <shadow type="text">
      <field name="TEXT">Your bot token</field>
    </shadow>
  </value>
</block>
<block type="on_real_button" x="179" y="115">
  <statement name="STATEMENTS">
    <block type="make_ahq_button">
      <value name="button name">
        <block type="text">
          <field name="TEXT">pp</field>
        </block>
      </value>
      <statement name="STATEMENTS">
        <block type="style_ahq_button">
          <field name="Label">SECONDARY</field>
          <value name="button name">
            <block type="text">
              <field name="TEXT">pp</field>
            </block>
          </value>
          <next>
            <block type="label_ahq_button">
              <value name="Label">
                <block type="text">
                  <field name="TEXT">ppqq</field>
                </block>
              </value>
              <value name="button name">
                <block type="text">
                  <field name="TEXT">pp</field>
                </block>
              </value>
              <next>
                <block type="emoji_ahq_button">
                  <value name="Label">
                    <block type="text">
                      <field name="TEXT">🤖</field>
                    </block>
                  </value>
                  <value name="button name">
                    <block type="text">
                      <field name="TEXT">pp</field>
                    </block>
                  </value>
                  <next>
                    <block type="url_ahq_button">
                      <value name="Label">
                        <block type="text">
                          <field name="TEXT">https://google.com</field>
                        </block>
                      </value>
                      <value name="button name">
                        <block type="text">
                          <field name="TEXT">pp</field>
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
        <block type="make_ahq_button">
          <value name="button name">
            <block type="text">
              <field name="TEXT">ahq</field>
            </block>
          </value>
          <statement name="STATEMENTS">
            <block type="style_ahq_button">
              <field name="Label">SECONDARY</field>
              <value name="button name">
                <block type="text">
                  <field name="TEXT">ahq</field>
                </block>
              </value>
              <next>
                <block type="label_ahq_button">
                  <value name="Label">
                    <block type="text">
                      <field name="TEXT">ahq</field>
                    </block>
                  </value>
                  <value name="button name">
                    <block type="text">
                      <field name="TEXT">ahq</field>
                    </block>
                  </value>
                  <next>
                    <block type="emoji_ahq_button">
                      <value name="Label">
                        <block type="text">
                          <field name="TEXT">🤖</field>
                        </block>
                      </value>
                      <value name="button name">
                        <block type="text">
                          <field name="TEXT">ahq</field>
                        </block>
                      </value>
                      <next>
                        <block type="url_ahq_button">
                          <value name="Label">
                            <block type="text">
                              <field name="TEXT">ahq</field>
                            </block>
                          </value>
                          <value name="button name">
                            <block type="text">
                              <field name="TEXT">ahq</field>
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
            <block type="snd_ahq_button">
              <value name="Label">
                <block type="s4d_message_channel"></block>
              </value>
              <value name="button name">
                <block type="text">
                  <field name="TEXT">button test</field>
                </block>
              </value>
              <value name="button val">
                <block type="text">
                  <field name="TEXT">ahq, pp</field>
                </block>
              </value>
            </block>
          </next>
        </block>
      </next>
    </block>
  </statement>
</block>
</xml>`;

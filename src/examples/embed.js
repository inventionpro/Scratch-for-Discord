export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" x="0" y="0">
    <value name="TOKEN">
      <block type="frost_env">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">token</field>
          </shadow>
        </value>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" x="0" y="114">
    <statement name="STATEMENTS">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
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
            <value name="B">
              <block type="jg_text_remake_paragraph_quotes">
                <field name="TEXT">!embed</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="jg_comments_connected_comment">
            <field name="TEXT">Create the embed with a name&amp;#10;The order of blocks inside doesnt matter.</field>
            <next>
              <block type="s4d_embed_create">
                <field name="NAME">embed1</field>
                <statement name="THEN">
                  <block type="jg_comments_connected_comment">
                    <field name="TEXT">Color to the left</field>
                    <next>
                      <block type="s4d_embed_set_color">
                        <value name="COLOUR">
                          <shadow type="colour_picker">
                            <field name="COLOUR">#ff0000</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="jg_comments_connected_comment">
                            <field name="TEXT">Small text above the title&amp;#10;author is the text displayed (256 chars max)&amp;#10;profile (optional) is an url pointing to an image&amp;#10;url (optional) is the url it goes to if clicked</field>
                            <next>
                              <block type="s4d_embed_set_author">
                                <mutation xmlns="http://www.w3.org/1999/xhtml" profile="true" url="true"></mutation>
                                <value name="AUTHOR">
                                  <block type="jg_text_remake_paragraph_quotes">
                                    <field name="TEXT">Text</field>
                                  </block>
                                </value>
                                <value name="PROFILE">
                                  <block type="jg_text_remake_paragraph_quotes">
                                    <field name="TEXT">https://placehold.co/50x50</field>
                                  </block>
                                </value>
                                <value name="URL">
                                  <block type="jg_text_remake_paragraph_quotes">
                                    <field name="TEXT">https://example.com</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="jg_comments_connected_comment">
                                    <field name="TEXT">Bold text&amp;#10;title is the text displayed (256 chars max)&amp;#10;url (optional) is the url it goes to if clicked</field>
                                    <next>
                                      <block type="s4d_embed_set_title">
                                        <mutation xmlns="http://www.w3.org/1999/xhtml" hyperlink="true"></mutation>
                                        <value name="TITLE">
                                          <shadow type="text">
                                            <field name="TEXT">Some title</field>
                                          </shadow>
                                        </value>
                                        <value name="HYPERLINK">
                                          <block type="jg_text_remake_paragraph_quotes">
                                            <field name="TEXT">https://example.com</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="jg_comments_connected_comment">
                                            <field name="TEXT">The description (4096 chars max)</field>
                                            <next>
                                              <block type="s4d_embed_set_desc">
                                                <value name="DESC">
                                                  <shadow type="text">
                                                    <field name="TEXT">Some desc here...</field>
                                                  </shadow>
                                                </value>
                                                <next>
                                                  <block type="jg_comments_connected_comment">
                                                    <field name="TEXT">A url to an image to be displayed on the top right</field>
                                                    <next>
                                                      <block type="s4d_embed_set_thumb">
                                                        <value name="THUMB">
                                                          <shadow type="text">
                                                            <field name="TEXT">https://placehold.co/256x256</field>
                                                          </shadow>
                                                        </value>
                                                        <next>
                                                          <block type="jg_comments_connected_comment">
                                                            <field name="TEXT">A field (25 max), acts like sections with:&amp;#10;title (256 chars max)&amp;#10;description (1024 chars max)&amp;#10;and can be inline (in a row)</field>
                                                            <next>
                                                              <block type="s4d_embed_add_field">
                                                                <value name="TITLE">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">Some field title</field>
                                                                  </shadow>
                                                                </value>
                                                                <value name="DESCRIPTION">
                                                                  <shadow type="text">
                                                                    <field name="TEXT">Some desc here...</field>
                                                                  </shadow>
                                                                </value>
                                                                <value name="INLINE">
                                                                  <shadow type="logic_boolean">
                                                                    <field name="BOOL">FALSE</field>
                                                                  </shadow>
                                                                </value>
                                                                <next>
                                                                  <block type="jg_comments_connected_comment">
                                                                    <field name="TEXT">A url to an image to be displayed on the bottom</field>
                                                                    <next>
                                                                      <block type="s4d_embed_set_image">
                                                                        <value name="IMAGE">
                                                                          <shadow type="text">
                                                                            <field name="TEXT">https://image.com</field>
                                                                          </shadow>
                                                                        </value>
                                                                        <next>
                                                                          <block type="jg_comments_connected_comment">
                                                                            <field name="TEXT">Small text at the bottom&amp;#10;footer the text displayed (2048 chars max)&amp;#10;icon (optional) an image to the left</field>
                                                                            <next>
                                                                              <block type="s4d_embed_set_footer">
                                                                                <mutation xmlns="http://www.w3.org/1999/xhtml" icon="true"></mutation>
                                                                                <value name="FOOTER">
                                                                                  <shadow type="text">
                                                                                    <field name="TEXT">Some footer text here...</field>
                                                                                  </shadow>
                                                                                </value>
                                                                                <value name="ICON">
                                                                                  <block type="jg_text_remake_paragraph_quotes">
                                                                                    <field name="TEXT">https://example.com</field>
                                                                                  </block>
                                                                                </value>
                                                                                <next>
                                                                                  <block type="jg_comments_connected_comment">
                                                                                    <field name="TEXT">A date to the right of the footer&amp;#10;current - Now&amp;#10;custom - String/Number unix or recognized structure</field>
                                                                                    <next>
                                                                                      <block type="s4d_embed_set_timestamp">
                                                                                        <mutation divisor_input="false"></mutation>
                                                                                        <field name="MODE">CURRENT</field>
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
                <next>
                  <block type="jg_comments_connected_comment">
                    <field name="TEXT">Send the embed, most blocks should support it</field>
                    <next>
                      <block type="s4d_reply">
                        <value name="CONTENT">
                          <shadow type="text">
                            <field name="TEXT">Hey!</field>
                          </shadow>
                          <block type="s4d_embed_send">
                            <field name="NAME">embed1</field>
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
      </block>
    </statement>
  </block>
</xml>`;

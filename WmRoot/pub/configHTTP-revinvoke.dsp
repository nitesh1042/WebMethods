<HTML>
  <HEAD>
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
    <META HTTP-EQUIV="Expires" CONTENT="-1">
    <LINK REL="stylesheet" TYPE="text/css" HREF="webMethods.css">
    %ifvar webMethods-wM-AdminUI%
      <link rel="stylesheet" TYPE="text/css" HREF="webMethods-wM-AdminUI.css"></link>
      <script>webMethods_wM_AdminUI = 'true';</script>
    %endif%
    <SCRIPT SRC="webMethods.js"></SCRIPT>
    <TITLE>Integration Server -- Port Management</TITLE>

  </HEAD>

%ifvar mode equals('edit')%
  %ifvar disableport equals('true')%
    %rename -copy listenerKey2 listenerKey%
    %invoke wm.server.net.listeners:disableListener%
    %endinvoke%
    %rename -copy listenerKey1 listenerKey%
    %invoke wm.server.net.listeners:disableListener%
    %endinvoke%
  %endif%
%endif%

%invoke wm.server.net.listeners:getListener%

<SCRIPT Language="JavaScript">
        var hiddenOptions = new Array();
        
        function hideKeyStoreSection(keyStoreDivId) {
        	var elem = document.getElementById(keyStoreDivId);
            var rows = elem.rows;
            for(i = 0; i < rows.length; i++){
               rows[i].style.display="none";
            }
        }
        
        function showKeyStoreSection(keyStoreDivId) {
        	var elem = document.getElementById(keyStoreDivId);
        	var rows = elem.rows;
            for(i = 0; i < rows.length; i++){
               if (ie) {
                 rows[i].style.display="block";
               }else{
                 rows[i].style.display="block";
                 rows[i].style.display="table-row";
               }
            }
        }
        
        function confirmDisable()
        {
			
          if(document.properties1.listening.value=='true'||document.properties2.listening.value=='true')
          {
            if(confirm("Ports must be disabled so that you can edit these settings.  Would you like to disable these ports?"))
            {
               if(is_csrf_guard_enabled && needToInsertToken) {
				  	createForm("htmlForm_configHTTP", "configHTTP.dsp", "POST", "BODY");
					setFormProperty("htmlForm_configHTTP", "listenerKey", "%value listenerKey%");
					setFormProperty("htmlForm_configHTTP", "listenerKey1", document.properties1.listenerKey.value);
					setFormProperty("htmlForm_configHTTP", "listenerKey2", document.properties2.listenerKey.value);
					setFormProperty("htmlForm_configHTTP", "pkg", "%value pkg%");
					%ifvar listenerType%
				   setFormProperty("htmlForm_configHTTP", "listenerType", "%value listenerType%");
				   %endif%
				   setFormProperty("htmlForm_configHTTP", "mode", "edit");
				   setFormProperty("htmlForm_configHTTP", "disableport", "true");
				   setFormProperty("htmlForm_configHTTP", _csrfTokenNm_, _csrfTokenVal_);
				   //var htmlForm_configHTTP = document.forms["htmlForm_configHTTP"];
					document.htmlForm_configHTTP.submit();
				   
				} else {
					
					document.location.replace("configHTTP.dsp?listenerKey=%value listenerKey encode(url)%&listenerKey1="+document.properties1.listenerKey.value+"&listenerKey2="+document.properties2.listenerKey.value+"&pkg=%value pkg encode(url)%%ifvar listenerType%&listenerType=%value listenerType encode(url)%%endif%&mode=edit&disableport=true");
				}
				   
            }
          }
          else {
			  
			  if(is_csrf_guard_enabled && needToInsertToken) {
					createForm("htmlForm_configHTTP2", 'configHTTP.dsp', "POST", "HEAD");	
				   setFormProperty("htmlForm_configHTTP2", "listenerKey", "%value listenerKey%");
				   setFormProperty("htmlForm_configHTTP2", "pkg", "%value pkg%");
				   %ifvar listenerType%
				   setFormProperty("htmlForm_configHTTP2", "listenerType", "%value listenerType%");
				   %endif%
				   setFormProperty("htmlForm_configHTTP2", "mode", "edit");
			 
				   setFormProperty("htmlForm_configHTTP2", _csrfTokenNm_, _csrfTokenVal_);
					var htmlForm_configHTTP2 = document.forms["htmlForm_configHTTP2"];
					htmlForm_configHTTP2.submit();
				} else {
					var webMethodswMAdminUI = getUrlParameter('webMethods-wM-AdminUI');
					if (webMethodswMAdminUI || '%value webMethods-wM-AdminUI encode(javascript)%') {
				    	document.location.replace("configHTTP.dsp?listenerKey=%value listenerKey encode(url)%&pkg=%value pkg encode(url)%%ifvar listenerType%&listenerType=%value listenerType encode(url)%%endif%&mode=edit&webMethods-wM-AdminUI=true");
					}
					else {
				    	document.location.replace("configHTTP.dsp?listenerKey=%value listenerKey encode(url)%&pkg=%value pkg encode(url)%%ifvar listenerType%&listenerType=%value listenerType encode(url)%%endif%&mode=edit");
					}
				}
				   
          }
          return false;
        }

        function processKrbOnSubmit(){
        	/*
        	 * Kerberos is applicable only for External Port
        	 */
    		var obj1 = document.properties1.getElementById("krbClientPassword");
    		var obj2 = document.properties1.getElementById("retype_krbClientPassword");
    		var clientAuth = document.properties1.getElementById("clientAuth").value;
    		if (clientAuth != null && (clientAuth == 'requestKrb' || clientAuth == 'requireKrb')) {
    			if(obj1 != null && obj2 != null) {
    				var clientPwd = obj1.value;
    				var clientRePwd = obj2.value;
    				var pwdConfirm = confirmPassword(clientPwd, clientRePwd, "Kerberos Client");
    				return pwdConfirm;
    			} else {
    				return true;
    			}
    		} else {
    			return true;
    		}
    	}
        
        function submit() {

            var externalPortPkg = document.properties1.pkg.value;
            var registrationPortPkg = document.properties2.pkg.value;
            if (externalPortPkg != registrationPortPkg)
            {
                alert("Specify same package name for both Enterprise Gateway External Port and Enterprise Gateway Registration Port.");
                return false;
            }

            var isValid=validateRevListenerFieds();
            
            if((document.properties1.port.value.length>0) && (document.properties2.port.value>0) && isValid)
            {
            	//Validate Kerberos properties
            	if (processKrbOnSubmit()) {
                	transferInternals( document.properties2, document.properties1 );
                    document.properties1.submit();
            	}
            }else{
                if(!isValid){
                    alert("The Backlog setting for both the Enterprise Gateway External Port and Enterprise Gateway Registration Port must be positive numbers with a maximum of 65535 milliseconds.");
                }else{
                    alert("Enterprise Gateway External port AND Enterprise Gateway Registration port MUST be set correctly before saving.");
                }
            }
        }

        function validateRevListenerFieds(){

            var extBacklog=document.forms['properties1'].maxQueue.value;

            var isExtBacklogInt=isInteger(extBacklog);

            extBacklog=isExtBacklogInt?parseInt(extBacklog):extBacklog;

            if(!isExtBacklogInt || extBacklog<=0 || extBacklog>65535 ){

                return false;
            }

            document.properties1.maxQueue.value=extBacklog; // to trim spaces

            return true;

        }

        function transferInternals(inSrc, inDest) {
            transferOne( inSrc.listenerKey, inDest.internalListenerKey );
            transferOne( inSrc.port, inDest.internalPort );
            transferOne( inSrc.portAlias, inDest.internalPortAlias );
            transferOne( inSrc.portDescription, inDest.internalPortDescription );
            transferOne( inSrc.clientAuth, inDest.internalClientAuth );
            transferOne( inSrc.bindAddress, inDest.internalBindAddress );
            transferOne( inSrc.pkg, inDest.internalPkg );
            transferOne( inSrc.maxQueue, inDest.internalMaxQueue );
            transferOne( inSrc.alias, inDest.internalalias );
            transferOne( inSrc.keyStore, inDest.internalkeyStore );
            transferOne( inSrc.trustStore, inDest.internaltrustStore );

            //   radio buttons are treated differently
            sslFlag = extractRadioValue( inSrc.ssl );
            if ( sslFlag ) {
                inDest.internalSsl.value = sslFlag;
            }

            enableFlag = extractRadioValue( inSrc.enable );
            inDest.internalEnable.value = enableFlag;
        }

        function transferOne(inSrcFld, inDestFld) {
            if ( inSrcFld != null && inDestFld != null ) {
                inDestFld.value = inSrcFld.value;
            }
        }


        //  input field MUST represent a radio button
        function extractRadioValue(inFld) {
            rc = false;
            try
            {
                for ( var i = 0; i < inFld.length; i++ ) {
                 if ( inFld[ i ].checked ) {
                     rc = inFld[ i ].value;
                     break;
                 }
                }
            }
            catch (e)
            {
            }

            return rc;
        }

        function valueOf(inFld) {
            return ( inFld == null ) ? "n/a" : inFld.value;

        }

</SCRIPT>
    <base target="_self">
    <style>
      .listbox  { width: 100%; }
    </style>

  <body onload="setupKeystoreData(document.properties1);setupKeystoreData(document.properties2);setNavigation('security-ports.dsp', 'doc/OnlineHelp/wwhelp.htm?context=is_help&topic=IS_Security_EditEnterpriseGatewayPortScrn');">
    <TABLE width="100%">
      <TR>
        <TD class="breadcrumb" colspan=2>
          Security &gt;
          Ports &gt;
          %ifvar ../mode equals('view')%
            View Enterprise Gateway Server Details
          %else%
            Edit Enterprise Gateway Server Configuration
          %endif% </TD>
      </TR>


      <TR>
        <TD colspan="2" nowrap>
          <UL>
            <li>
			
			<script>
						    createForm("htmlform_http_security_ports", "security-ports.dsp", "POST", "BODY");
           </script>			
			<script>getURL("security-ports.dsp", "javascript:document.htmlform_http_security_ports.submit();", "Return to Ports");</script>
			
		  </li>
            %ifvar ../mode equals('view')%
              %ifvar ../listening equals('primary')%
              %else%
                <LI>
				
				<A onclick="return confirmDisable();" HREF="">
                  Edit Enterprise Gateway Server Configuration
                </a></li>
              %endif%
            %endif%
            %ifvar ../mode equals('view')%
                <li>
                <script>
						    createForm("htmlform_http_configHTTP_RGconn_display", "configHTTP-RGconn-display.dsp", "POST", "BODY");
                            setFormProperty("htmlform_http_configHTTP_RGconn_display", "internalPort", "%value internalPort%");
				</script>
				<script>getURL("configHTTP-RGconn-display.dsp?internalPort=%value internalPort encode(url)%", "javascript:document.htmlform_http_configHTTP_RGconn_display.submit();", "Display Connections to Enterprise Gateway Registration Port");</script>
				
				
				</li>
            %endif%
          </UL>
        </TD>
      </TR>

      <TR>
        <TD>
            <TABLE border="0" cellpadding="0" cellspacing="0">

            <tr>
                <td valign="top">

                <TABLE class="%ifvar ../mode equals('view')%tableView%else%tableView%endif%">
                <form name="properties1" action="security-ports.dsp" method="POST">
                %ifvar webMethods-wM-AdminUI% <input type="hidden" name="webMethods-wM-AdminUI" value="true"> %endif%
                <input type="hidden" name="internalListenerKey" value="%value internalListenerKey encode(htmlattr)%">
				<input type="hidden" name="internalPort" value="%value internalPort encode(htmlattr)%">
                <input type="hidden" name="internalPortAlias" value="%value internalPortAlias encode(htmlattr)%">
                <input type="hidden" name="internalPortDescription" value="%value internalPortDescription encode(htmlattr)%">
                <input type="hidden" name="internalEnable" value="%value internalEnable encode(htmlattr)%">
                <input type="hidden" name="internalSsl" value="%value internalSsl encode(htmlattr)%">
                <input type="hidden" name="internalClientAuth" value="%value internalClientAuth encode(htmlattr)%">
                <input type="hidden" name="internalBindAddress" value="%value internalBindAddress encode(htmlattr)%">
                <input type="hidden" name="internalPkg" value="%value internalPkg encode(htmlattr)%">
                <input type="hidden" name="internalalias" value="%value internalalias encode(htmlattr)%">
                <input type="hidden" name="internalkeyStore" value="%value internalkeyStore encode(htmlattr)%">
                <input type="hidden" name="internaltrustStore" value="%value internaltrustStore encode(htmlattr)%">

                %ifvar internalPort equals('-1')%
                        %rename port holdPort -copy%
                            %rename pkg holdPkg -copy%
                        %scope rparam(blankScope={listenerType='revinvoke'})%
                            %scope blankScope%
                                %rename ../mode mode -copy%
								%include configHTTP-revinvokegateway.dsp%
                            %endscope%
                        %endscope%
                        %rename holdPort internalPort%
                        %rename holdPkg pkg%
                %else%

                        %include configHTTP-revinvokegateway.dsp%
                %endif%
                </form>
                </TABLE>
            </td>

            <td valign="top">
                <TABLE class="%ifvar ../mode equals('view')%tableView%else%tableView%endif%">
                <form name="properties2" action="security-ports.dsp" method="POST">
                    %ifvar webMethods-wM-AdminUI% <input type="hidden" name="webMethods-wM-AdminUI" value="true"> %endif%
                    %scope param(internalScopeVar='tagged')%
                      %ifvar internalPort%
                       %invoke wm.server.net.listeners:listListeners%

                         %loop listeners%
                            %ifvar listenerType equals('revinvokeinternal')%
                                %ifvar port vequals(../internalPort)%
                                    %rename -copy key listenerKey%
                                    %invoke wm.server.net.listeners:getListener%
                                        %rename -copy ../../mode mode%
                                        %include configHTTP-revinvokeregistration.dsp%
                                    %endinvoke%
                                    %rename ../internalScopeVar noScopeVar%
                                %endif%
                            %endif%
                         %endloop%
                       %endinvoke%
                      %endif%


                       %ifvar internalScopeVar%
                        %scope rparam(blankScope={listenerType='revinvokeinternal'})%
                            %scope blankScope%
                            %rename ../mode mode -copy%
                            %rename ../returnHSMBasedKS returnHSMBasedKS -copy%
                            %include configHTTP-revinvokeregistration.dsp%
                            %endscope%
                        %endscope%
                       %endif%
                    %endscope%
                </form>
                </TABLE>
            </td>

            %ifvar mode equals('view')%
            %else%
                <tr><td colspan="2">
                <TABLE width="100%" class="%ifvar ../mode equals('view')%tableView%else%tableView%endif%">
                <tr>
                    <td class="action">
                        <input type="submit" value="Save Changes" onClick="submit();" >
                    </td>
                 </tr>
                 </TABLE>
                 </td></tr>
             %endif%


        </table>
      </td>
    </tr>
    </table>
  </body>
%endinvoke%
</html>

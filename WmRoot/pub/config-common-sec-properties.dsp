<script language="JavaScript">
    var agent = navigator.userAgent.toLowerCase();   
    var ie = (agent.indexOf("msie") != -1);
	
	function toggleKerberosProperties(cAuth, listenerType){
		if (listenerType != 'revinvokeinternal') {
			var cAuth2 = cAuth;
			if( cAuth.type != null && cAuth.type.indexOf('select') >= 0 ) {
				cAuth2 = cAuth.value;
			} else {
				cAuth2 = cAuth;
			}
			if (cAuth2 != null && (cAuth2 == 'requestKrb' || cAuth2 == 'requireKrb')) {
				displayRows("kerberosPropsDiv");
			} else {
				hideRows("kerberosPropsDiv");
			}
		}
	}
	
	function processKrbOnSubmit(){
		var obj1 = document.getElementById("krbClientPassword");
		var obj2 = document.getElementById("retype_krbClientPassword");
		var clientAuth = document.getElementById("clientAuth").value;
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

	function toggleIdentityProvider(listenerType, show) {
		
		if (listenerType != 'revinvokeinternal') {
			if (show) {
				var rowElem = document.getElementById("IdentityProviderRow");
				if (ie) {
					rowElem.style.display="block";
				}else{
					rowElem.style.display="block";
					rowElem.style.display="table-row";
				}
			}
			else {
				var rowElem = document.getElementById("IdentityProviderRow");
				rowElem.style.display="none";
			}
		}
	}

	function respondToClientAuthChange(cAuth, listenerType) {
		if (cAuth == 'idProvider') {
			toggleIdentityProvider(listenerType, true);
		}
		else {
			toggleIdentityProvider(listenerType, false);
		}
		toggleKerberosProperties(cAuth,listenerType);
	}
	
	function confirmPassword(original, retyped, type) {
		if (original.length > 0 && retyped.length == 0) {
			alert (type + " password must be retyped for confirmation.");
			return false;
		} else if (original != retyped) {
			alert ("The " + type + " passwords entered do not match.");
			return false;
		}
		return true;
	}	

	function displayRows(elementID)
	{
		elem = document.getElementById(elementID);
		rows = elem.rows;

		for(i = 0; i < rows.length; i++){
			if (ie) {
				rows[i].style.display="block";
			}else{
				rows[i].style.display="block";
				rows[i].style.display="table-row";
			}
		}
	}

	function hideRows(elementID)
	{
		elem = document.getElementById(elementID);
		rows = elem.rows;

		for(i = 0; i < rows.length; i++){
			rows[i].style.display="none";
		}
	}	
		
</script>	

<tbody>
	<tr>
	%ifvar listenerType equals('regularinternal')%
		<td class="heading" colspan="2">External Client Security</td>
	%else%
		<td class="heading" colspan="2">Security Configuration</td>
	%endif%
   	</tr>
	
	<tr name="ClientAuthRow">
			<td class="evenrow"><label for="clientAuth">Client Authentication</label></td>
		    <td class="%ifvar ../mode equals('view')%evenrowdata-l%else%evenrow-l%endif%">
		    	%ifvar mode equals('view')%
		        	%ifvar clientAuth equals('none')%Username/Password%endif%
					%ifvar clientAuth equals('digest')%Digest%endif%
					%ifvar clientAuth equals('requestKrb')%Request Kerberos Ticket%endif%
					%ifvar clientAuth equals('requireKrb')%Require Kerberos Ticket%endif%					
					%ifvar clientAuth equals('request')%Request Client Certificates%endif%
					%ifvar clientAuth equals('require')%Require Client Certificates%endif%
					%ifvar clientAuth equals('idProvider')%Use Identity Provider%endif%
				 %else%
					  <select name="clientAuth" id="clientAuth" onchange="respondToClientAuthChange(this.value, '%value listenerType encode(javascript)%');">
				 	   %ifvar listenerType equals('regularinternal')%
				 	   		<!-- Client Authentication Options for Internal Server Port -->
				 	   		<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
				 	   		<option %ifvar clientAuth equals('digest')%selected %endif%value="digest">Digest</option>
				 	   		<option %ifvar clientAuth equals('request')%selected %endif%value="request">Request Client Certificates</option>
				 	   		<option %ifvar clientAuth equals('require')%selected %endif%value="require">Require Client Certificates</option>
				 	   		<option %ifvar clientAuth equals('requestKrb')%selected %endif%value="requestKrb">Request Kerberos Ticket</option>
							<option %ifvar clientAuth equals('requireKrb')%selected %endif%value="requireKrb">Require Kerberos Ticket</option>
				 	   %else%
				 	   		%ifvar listenerType equals('revinvokeinternal')%
				 	   			<!-- Client Authentication Options for Registration Port -->
		 	   					%switch ssl%
				 	   				%case 'true'% <!-- HTTPS/FTPS -->
				 	   					<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
				 	   					<option %ifvar clientAuth equals('request')%selected %endif%value="request">Request Client Certificates</option>
				 	   					<option %ifvar clientAuth equals('require')%selected %endif%value="require">Require Client Certificates</option>
				 	   				%case% <!-- HTTP -->
				 	   					<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
				 	   			%endswitch%
				 	   		%else%
				 	   				<!-- Client Authentication Options for Regular and External Port -->
				 	   				%switch ssl%
				 	   					%case 'true'% 
				 	   						%ifvar ftps equals('true')%
				 	   							<!-- FTPS -->
				 	   							<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
				 	   							<option %ifvar clientAuth equals('request')%selected %endif%value="request">Request Client Certificates</option>
				 	   							<option %ifvar clientAuth equals('require')%selected %endif%value="require">Require Client Certificates</option>
				 	   						%else%
				 	   							<!-- HTTPS -->
					 	   						<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
					 	   						<option %ifvar clientAuth equals('digest')%selected %endif%value="digest">Digest</option>
					 	   						<option %ifvar clientAuth equals('request')%selected %endif%value="request">Request Client Certificates</option>
					 	   						<option %ifvar clientAuth equals('require')%selected %endif%value="require">Require Client Certificates</option>
					 	   						%ifvar listenerType equals('revinvoke')%
					 	   							<!- Use Identity Provider is not applicable in External Port -->
					 	   						%else%
					 	   							<option %ifvar clientAuth equals('idProvider')%selected %endif%value="idProvider">Use Identity Provider</option>
					 	   						%endif%
												<option %ifvar clientAuth equals('requestKrb')%selected %endif%value="requestKrb">Request Kerberos Ticket</option>
												<option %ifvar clientAuth equals('requireKrb')%selected %endif%value="requireKrb">Require Kerberos Ticket</option>
				 	   						%endif%
				 	   					%case% <!-- HTTP -->
				 	   						<option %ifvar clientAuth equals('none')%selected %endif%value="none">Username/Password</option>
				 	   						<option %ifvar clientAuth equals('digest')%selected %endif%value="digest">Digest</option>
											<option %ifvar clientAuth equals('requestKrb')%selected %endif%value="requestKrb">Request Kerberos Ticket</option>
											<option %ifvar clientAuth equals('requireKrb')%selected %endif%value="requireKrb">Require Kerberos Ticket</option>
				 	   				%endswitch%
				 	   		%endif%
				 	   %endif%
					</select>
		          %endif%
		       </td>
	</tr>
	%ifvar listenerType equals('regularinternal')%
	<tr>
    	<td class="oddrow"></td>
    	<td class="oddcol-l" width="250">Must match Client Authentication setting on the Enterprise Gateway Server External Port.</td>
    </tr>
    %endif%
	%ifvar listenerType equals('revinvoke')%
		<tr>
			<td class="evenrow">&nbsp;</td>
			<td class="evencol-l">Must match Client Authentication setting on the Internal Server.</td>
		</tr>	
	%endif%

	<!-- Identity Provider Row -->
	%ifvar listenerType equals('revinvokeinternal')%
		<!-- Registration Port doesn't support Identity Provider -->
	%else%
	<tr name="IdentityProviderRow" id="IdentityProviderRow">
		%ifvar mode equals('view')%
			%ifvar clientAuth equals('idProvider')%
				<td class="oddrow">Identity Provider</td>
				<td class="%ifvar ../mode equals('view')%oddrowdata-l%else%oddrow-l%endif%">
					%value idProvider%
			%endif%
		%else%
			<td class="oddrow"><label for="idProvider">Identity Provider</label></td>
			<td class="%ifvar ../mode equals('view')%oddrowdata-l%else%oddrow-l%endif%">
			%invoke wm.server.security.openid:getIdProviderNamesUI%
			<select name="idProvider" id="idProvider">
				%loop names%
					<option value="%value name%" %ifvar ../idProvider vequals(name)% selected %endif%>%value name%</option>
				%endloop%
			</select>
			%endinvoke%
		%endif%
		</td>
	 </tr>
	 %endif%
	 
</tbody>

%ifvar listenerType equals('revinvokeinternal')%
	<!-- Registration Port doesn't support Kerberos -->
%else%
<!-- Kerberos Properties-->
<tbody id="kerberosPropsDiv">
	<TR>
		<TD colspan="2" class="heading">Kerberos Properties (Optional)</TD>
	</TR>
	<TR>
		<TD class="evenrow"><label for="krbJaasContext">JAAS Context</label></TD>
		<TD class="evenrow-l">
			%ifvar ../mode equals('view')%
					%value kerberosSettings/jaasContext encode(html)%
			%else%
				<input type="text" name="krbJaasContext" id="krbJaasContext" value="%value kerberosSettings/jaasContext encode(htmlattr)%" size="60">
			%endif% 
		</TD>
	</TR>
	<TR>
		<TD class="oddrow"><label for="krbClientPrincipal">Principal</label></TD>
		<TD class="oddrow-l">
			%ifvar ../mode equals('view')%
				%value kerberosSettings/clientPrincipal encode(html)%
			%else%
				<input type="text" name="krbClientPrincipal" id="krbClientPrincipal" VALUE="%value kerberosSettings/clientPrincipal encode(htmlattr)%" size="60">
			%endif% 
		</TD>
	</TR>
	%ifvar ../mode equals('view')%
	%else%
		<TR id="clntPwdRow">
			<TD class="evenrow"><label for="krbClientPassword">Principal Password</label></TD>
			<TD class="evenrowdata-l">
				<input type="password" name="krbClientPassword" id="krbClientPassword" value="%value kerberosSettings/clientPassword encode(htmlattr)%" autocomplete="off">
			</TD>
		</TR>
		<TR id="clntPwdReRow">
			<TD class="oddrow"><label for="retype_krbClientPassword">Retype Principal Password</label></TD>
			<TD class="oddrowdata-l">
				<input type="password" name="retype_krbClientPassword" id="retype_krbClientPassword" value="%value kerberosSettings/clientPassword encode(htmlattr)%" autocomplete="off">
			</TD>
		</TR>
	%endif%
	<TR>
		<TD class="evenrow">Service Principal Name Format</TD>
		<TD class="evenrow-l">
		%ifvar ../mode equals('view')%
			%ifvar kerberosSettings/servicePrincipalForm equals('username')%username%endif%
		%else%
			username
		%endif%
		</TD>
	</TR>
	<TR>
		<TD class="oddrow"><label for="krbServicePrincipal">Service Principal Name</label></TD>
		<TD class="oddrow-l">
			%ifvar ../mode equals('view')%
				%value kerberosSettings/servicePrincipal encode(html)%
			%else%
				<input type="text" name="krbServicePrincipal" id="krbServicePrincipal" value="%value kerberosSettings/servicePrincipal encode(htmlattr)%" size="60">
			%endif% 
		</TD>
	</TR>
</tbody>
%endif%

<!-- Toggle Scripts  -->
%ifvar ssl -notempty%
	%ifvar ssl equals('true')%
		%ifvar clientAuth equals('idProvider')%
			<script>toggleIdentityProvider('%value listenerType%', true);</script>
		%else%
			<script>toggleIdentityProvider('%value listenerType%', false);</script>
		%endif%
	%else%
		<script>toggleIdentityProvider('%value listenerType%', false);</script>
	%endif%
%else%
	%ifvar clientAuth equals('idProvider')%
		<script>toggleIdentityProvider('%value listenerType%', true);</script>
	%else%
		<script>toggleIdentityProvider('%value listenerType%', false);</script>
	%endif%
%endif%

<SCRIPT> toggleKerberosProperties('%value clientAuth%', '%value listenerType%'); </SCRIPT>
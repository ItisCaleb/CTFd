import{m as i,C as l,M as n}from"./index.8ca336c3.js";import{s as o,c}from"./clipboard.0a7406e2.js";window.Alpine=i;i.data("SettingsForm",()=>({success:null,error:null,initial:null,errors:[],init(){this.initial=o(this.$el)},async updateProfile(){this.success=null,this.error=null,this.errors=[];let e=o(this.$el,this.initial,!0);e.fields=[];for(const t in e)if(t.match(/fields\[\d+\]/)){let r={},a=parseInt(t.slice(7,-1));r.field_id=a,r.value=e[t],e.fields.push(r),delete e[t]}const s=await l.pages.settings.updateSettings(e);s.success?(this.success=!0,this.error=!1,setTimeout(()=>{this.success=null,this.error=null},3e3)):(this.success=!1,this.error=!0,Object.keys(s.errors).map(t=>{const r=s.errors[t];this.errors.push(r)}))}}));i.data("TokensForm",()=>({token:null,async generateToken(){const e=o(this.$el);e.expiration||delete e.expiration;const s=await l.pages.settings.generateToken(e);this.token=s.data.value,new n(this.$refs.tokenModal).show()},copyToken(){c(this.$refs.token)}}));i.data("Tokens",()=>({selectedTokenId:null,async deleteTokenModal(e){this.selectedTokenId=e,new n(this.$refs.confirmModal).show()},async deleteSelectedToken(){await l.pages.settings.deleteToken(this.selectedTokenId);const e=this.$refs[`token-${this.selectedTokenId}`];e&&e.remove()}}));i.data("QualifyForm",()=>({success:null,error:null,errors:[],async codeQualify(){this.success=null,this.error=null,this.errors=[];const e=o(this.$el);let s=await l.fetch("/user/qualify",{method:"POST",body:JSON.stringify(e)});s=await s.json(),s.success?(this.success=!0,this.error=!1,setTimeout(()=>{this.success=null,this.error=null},3e3)):(this.success=!1,this.error=!0,Object.keys(s.errors).map(t=>{const r=s.errors[t];this.errors.push(r)}))}}));i.start();
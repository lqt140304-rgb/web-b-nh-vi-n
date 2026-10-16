const fs=require('fs'),path=require('path'),cp=require('child_process');
const root=path.resolve(process.env.QA_TREE||process.cwd());
const output=path.resolve(process.env.QA_OUTPUT||__dirname+'/..');fs.mkdirSync(output,{recursive:true});
const env={...process.env,PLAYWRIGHT_MODULE:process.env.PLAYWRIGHT_MODULE||'playwright',CHROME_BIN:process.env.CHROME_BIN,QA_OUTPUT:output};
const results=[];
for(const name of (process.env.ONLY?process.env.ONLY.split(','):['verify-header-source','hero-shell','hero-header-height','header-mobile','header-names','services-header-regression','header-auth','hero-orbit'])){
 const file=path.join(root,'tests',name+'.cjs');
 const code=fs.readFileSync(file,'utf8').replaceAll('127.0.0.1:3030','127.0.0.1:3035').replace('[3034,3030]','[3036,3035]').replace("navBaseline:'f1ea490'","navBaseline:'1ec77ac'").replace("const output='docs/qa/header-mobile-196f2ba';",'const output='+JSON.stringify(output)+';');
 const wrapped='const M=require("module"),m=new M('+JSON.stringify(file)+');m.filename='+JSON.stringify(file)+';m.paths=module.paths;m._compile('+JSON.stringify(code)+','+JSON.stringify(file)+');';
 const start=Date.now();let log='',status=0;
 try{log=cp.execFileSync(process.execPath,['-e',wrapped],{cwd:root,env,encoding:'utf8',timeout:360000});}catch(e){status=e.status??-1;log=(e.stdout||'')+'\n'+(e.stderr||'')+'\n'+e.message;}
 fs.writeFileSync(path.join(output,name+(process.env.ONLY?'-rerun':'')+'.log'),log);results.push({name,status,seconds:(Date.now()-start)/1000});fs.writeFileSync(path.join(output,process.env.ONLY?'suite-rerun-results.json':'suite-results.json'),JSON.stringify(results,null,2));console.log(name,status,log.slice(-350));
}

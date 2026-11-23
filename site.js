document.getElementById('ano').textContent=new Date().getFullYear();
fetch('/app/app-version.json',{cache:'no-store'}).then(r=>r.json()).then(j=>{if(j&&j.versionName)document.querySelectorAll('.v').forEach(e=>e.textContent=j.versionName)}).catch(()=>{});

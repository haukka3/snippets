// Run at https://my.nianticlabs.com/friends to show duplicate friend entries
[...document.querySelectorAll('.UIUserList_userInfo__1yQCA')].map(x => x.innerText).filter((v,i,s) => { return s.indexOf(v) !== i}).map(d => console.log(d));

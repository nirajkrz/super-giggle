interface Props {
 title:string;
 onClose:()=>void;
}

export default function AchievementModal({
 title,
 onClose
}:Props){

 return (

  <div
   className="
   fixed inset-0
   bg-black/70
   flex
   items-center
   justify-center
  "
  >

   <div
    className="
     bg-slate-800
     p-8
     rounded-xl
    "
   >

    <h2>
      🏆 Achievement
    </h2>

    <p>{title}</p>

    <button
     onClick={onClose}
    >
      Close
    </button>

   </div>

  </div>
 );
}

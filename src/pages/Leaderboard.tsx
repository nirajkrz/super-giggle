const leaders = [

 {
  name:"Alex",
  xp:5400
 },

 {
  name:"Maria",
  xp:4900
 },

 {
  name:"John",
  xp:4100
 }
];

export default function Leaderboard(){

 return (

 <div className="p-8">

  <h1 className="text-4xl mb-6">
   Leaderboard
  </h1>

  {leaders.map((user,index)=>(
   <div
    key={user.name}
    className="
     flex
     justify-between
     p-4
     bg-slate-800
     mb-2
     rounded
    "
   >
    <span>
      #{index+1}
      {" "}
      {user.name}
    </span>

    <span>
      {user.xp}
    </span>
   </div>
  ))}

 </div>
 );
}

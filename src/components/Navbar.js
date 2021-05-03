import React from "react";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="logo"/>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-icons">
        <img
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00OTguMTk1MzEyIDIyMi42OTUzMTJjLS4wMTE3MTgtLjAxMTcxOC0uMDIzNDM3LS4wMjM0MzctLjAzNTE1Ni0uMDM1MTU2bC0yMDguODU1NDY4LTIwOC44NDc2NTZjLTguOTAyMzQ0LTguOTA2MjUtMjAuNzM4MjgyLTEzLjgxMjUtMzMuMzI4MTI2LTEzLjgxMjUtMTIuNTg5ODQzIDAtMjQuNDI1NzgxIDQuOTAyMzQ0LTMzLjMzMjAzMSAxMy44MDg1OTRsLTIwOC43NDYwOTMgMjA4Ljc0MjE4N2MtLjA3MDMxMy4wNzAzMTMtLjE0MDYyNi4xNDQ1MzEtLjIxMDkzOC4yMTQ4NDQtMTguMjgxMjUgMTguMzg2NzE5LTE4LjI1IDQ4LjIxODc1LjA4OTg0NCA2Ni41NTg1OTQgOC4zNzg5MDYgOC4zODI4MTIgMTkuNDQ1MzEyIDEzLjIzODI4MSAzMS4yNzczNDQgMTMuNzQ2MDkzLjQ4MDQ2OC4wNDY4NzYuOTY0ODQzLjA3MDMxMyAxLjQ1MzEyNC4wNzAzMTNoOC4zMjQyMTl2MTUzLjY5OTIxOWMwIDMwLjQxNDA2MiAyNC43NDYwOTQgNTUuMTYwMTU2IDU1LjE2Nzk2OSA1NS4xNjAxNTZoODEuNzEwOTM4YzguMjgxMjUgMCAxNS02LjcxNDg0NCAxNS0xNXYtMTIwLjVjMC0xMy44Nzg5MDYgMTEuMjg5MDYyLTI1LjE2Nzk2OSAyNS4xNjc5NjgtMjUuMTY3OTY5aDQ4LjE5NTMxM2MxMy44Nzg5MDYgMCAyNS4xNjc5NjkgMTEuMjg5MDYzIDI1LjE2Nzk2OSAyNS4xNjc5Njl2MTIwLjVjMCA4LjI4NTE1NiA2LjcxNDg0MyAxNSAxNSAxNWg4MS43MTA5MzdjMzAuNDIxODc1IDAgNTUuMTY3OTY5LTI0Ljc0NjA5NCA1NS4xNjc5NjktNTUuMTYwMTU2di0xNTMuNjk5MjE5aDcuNzE4NzVjMTIuNTg1OTM3IDAgMjQuNDIxODc1LTQuOTAyMzQ0IDMzLjMzMjAzMS0xMy44MDg1OTQgMTguMzU5Mzc1LTE4LjM3MTA5MyAxOC4zNjcxODctNDguMjUzOTA2LjAyMzQzNy02Ni42MzY3MTl6bTAgMCIvPjwvc3ZnPg=="
          alt="home"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMi4wMDAyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI1NiAwYy0xNDEuNDg0Mzc1IDAtMjU2IDExNC40OTYwOTQtMjU2IDI1NiAwIDQ0LjkwMjM0NCAxMS43MTA5MzggODguNzU3ODEyIDMzLjk0OTIxOSAxMjcuNDM3NWwtMzIuOTg0Mzc1IDEwMi40Mjk2ODhjLTIuMzAwNzgyIDcuMTQwNjI0LS40MTAxNTYgMTQuOTY4NzUgNC44OTQ1MzEgMjAuMjczNDM3IDUuMjUzOTA2IDUuMjUzOTA2IDEzLjA2MjUgNy4yMTQ4NDQgMjAuMjczNDM3IDQuODk0NTMxbDEwMi40Mjk2ODgtMzIuOTg0Mzc1YzM4LjY3OTY4OCAyMi4yMzgyODEgODIuNTM1MTU2IDMzLjk0OTIxOSAxMjcuNDM3NSAzMy45NDkyMTkgMTQxLjQ4NDM3NSAwIDI1Ni0xMTQuNDk2MDk0IDI1Ni0yNTYgMC0xNDEuNDg0Mzc1LTExNC40OTYwOTQtMjU2LTI1Ni0yNTZ6bTAgNDcyYy00MC41NTg1OTQgMC04MC4wOTM3NS0xMS4zMTY0MDYtMTE0LjMzMjAzMS0zMi43MjY1NjItNC45MjU3ODEtMy4wNzgxMjYtMTEuMDQyOTY5LTMuOTEwMTU3LTE2LjczNDM3NS0yLjA3ODEyNmwtNzMuOTQxNDA2IDIzLjgxMjUgMjMuODEyNS03My45NDE0MDZjMS44MDQ2ODctNS42MDkzNzUgMS4wNDI5NjgtMTEuNzM0Mzc1LTIuMDgyMDMyLTE2LjczNDM3NS0yMS40MDYyNS0zNC4yMzgyODEtMzIuNzIyNjU2LTczLjc3MzQzNy0zMi43MjI2NTYtMTE0LjMzMjAzMSAwLTExOS4xMDE1NjIgOTYuODk4NDM4LTIxNiAyMTYtMjE2czIxNiA5Ni44OTg0MzggMjE2IDIxNi05Ni44OTg0MzggMjE2LTIxNiAyMTZ6bTI1LTIxNmMwIDEzLjgwNDY4OC0xMS4xOTE0MDYgMjUtMjUgMjVzLTI1LTExLjE5NTMxMi0yNS0yNWMwLTEzLjgwODU5NCAxMS4xOTE0MDYtMjUgMjUtMjVzMjUgMTEuMTkxNDA2IDI1IDI1em0xMDAgMGMwIDEzLjgwNDY4OC0xMS4xOTE0MDYgMjUtMjUgMjVzLTI1LTExLjE5NTMxMi0yNS0yNWMwLTEzLjgwODU5NCAxMS4xOTE0MDYtMjUgMjUtMjVzMjUgMTEuMTkxNDA2IDI1IDI1em0tMjAwIDBjMCAxMy44MDQ2ODgtMTEuMTkxNDA2IDI1LTI1IDI1LTEzLjgwNDY4OCAwLTI1LTExLjE5NTMxMi0yNS0yNSAwLTEzLjgwODU5NCAxMS4xOTUzMTItMjUgMjUtMjUgMTMuODA4NTk0IDAgMjUgMTEuMTkxNDA2IDI1IDI1em0wIDAiLz48L3N2Zz4="
          alt="message"
        />
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDc3Ljg2NyA0NzcuODY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzcuODY3IDQ3Ny44Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjM4LjkzMywwQzEwNi45NzQsMCwwLDEwNi45NzQsMCwyMzguOTMzczEwNi45NzQsMjM4LjkzMywyMzguOTMzLDIzOC45MzNzMjM4LjkzMy0xMDYuOTc0LDIzOC45MzMtMjM4LjkzMw0KCQkJQzQ3Ny43MjYsMTA3LjAzMywzNzAuODM0LDAuMTQxLDIzOC45MzMsMHogTTIzOC45MzMsNDQzLjczM2MtMTEzLjEwOCwwLTIwNC44LTkxLjY5Mi0yMDQuOC0yMDQuOHM5MS42OTItMjA0LjgsMjA0LjgtMjA0LjgNCgkJCXMyMDQuOCw5MS42OTIsMjA0LjgsMjA0LjhDNDQzLjYxMSwzNTEuOTkxLDM1MS45OTEsNDQzLjYxMSwyMzguOTMzLDQ0My43MzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNTUuMTM4LDExNS4wNjNjLTQuNzkzLTIuMzg4LTEwLjQyOC0yLjM4OC0xNS4yMjEsMGgwTDE5NS4xMDYsMTg3LjQ2Yy0zLjMxLDEuNjUzLTUuOTkzLDQuMzM2LTcuNjQ2LDcuNjQ2DQoJCQlsLTcyLjM5NywxNDQuODExYy00LjIwMyw4LjQzNy0wLjc3MSwxOC42ODMsNy42NjUsMjIuODg2YzQuNzkzLDIuMzg4LDEwLjQyOCwyLjM4OCwxNS4yMjEsMGwxNDQuODExLTcyLjM5Nw0KCQkJYzMuMzEtMS42NTMsNS45OTMtNC4zMzYsNy42NDYtNy42NDZsNzIuMzk3LTE0NC44MTFDMzY3LjAwNiwxMjkuNTEzLDM2My41NzUsMTE5LjI2NywzNTUuMTM4LDExNS4wNjN6IE0xNjguNDk5LDMwOS4zNjcNCgkJCWwzOC45MTItNzcuODI0bDM4LjkxMiwzOC45MTJMMTY4LjQ5OSwzMDkuMzY3eiBNMjcwLjQ1NSwyNDYuMzIzbC0zOC45MTItMzguOTEybDc3LjgyNC0zOC45MTJMMjcwLjQ1NSwyNDYuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
          alt="explore"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0yOCA1MTIuMDAxIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjU2IDQ1NS41MTU2MjVjLTcuMjg5MDYyIDAtMTQuMzE2NDA2LTIuNjQwNjI1LTE5Ljc5Mjk2OS03LjQzNzUtMjAuNjgzNTkzLTE4LjA4NTkzNy00MC42MjUtMzUuMDgyMDMxLTU4LjIxODc1LTUwLjA3NDIxOWwtLjA4OTg0My0uMDc4MTI1Yy01MS41ODIwMzItNDMuOTU3MDMxLTk2LjEyNS04MS45MTc5NjktMTI3LjExNzE4OC0xMTkuMzEyNS0zNC42NDQ1MzEtNDEuODA0Njg3LTUwLjc4MTI1LTgxLjQ0MTQwNi01MC43ODEyNS0xMjQuNzQyMTg3IDAtNDIuMDcwMzEzIDE0LjQyNTc4MS04MC44ODI4MTMgNDAuNjE3MTg4LTEwOS4yOTI5NjkgMjYuNTAzOTA2LTI4Ljc0NjA5NCA2Mi44NzEwOTMtNDQuNTc4MTI1IDEwMi40MTQwNjItNDQuNTc4MTI1IDI5LjU1NDY4OCAwIDU2LjYyMTA5NCA5LjM0Mzc1IDgwLjQ0NTMxMiAyNy43Njk1MzEgMTIuMDIzNDM4IDkuMzAwNzgxIDIyLjkyMTg3NiAyMC42ODM1OTQgMzIuNTIzNDM4IDMzLjk2MDkzOCA5LjYwNTQ2OS0xMy4yNzczNDQgMjAuNS0yNC42NjAxNTcgMzIuNTI3MzQ0LTMzLjk2MDkzOCAyMy44MjQyMTgtMTguNDI1NzgxIDUwLjg5MDYyNS0yNy43Njk1MzEgODAuNDQ1MzEyLTI3Ljc2OTUzMSAzOS41MzkwNjMgMCA3NS45MTAxNTYgMTUuODMyMDMxIDEwMi40MTQwNjMgNDQuNTc4MTI1IDI2LjE5MTQwNiAyOC40MTAxNTYgNDAuNjEzMjgxIDY3LjIyMjY1NiA0MC42MTMyODEgMTA5LjI5Mjk2OSAwIDQzLjMwMDc4MS0xNi4xMzI4MTIgODIuOTM3NS01MC43NzczNDQgMTI0LjczODI4MS0zMC45OTIxODcgMzcuMzk4NDM3LTc1LjUzMTI1IDc1LjM1NTQ2OS0xMjcuMTA1NDY4IDExOS4zMDg1OTQtMTcuNjI1IDE1LjAxNTYyNS0zNy41OTc2NTcgMzIuMDM5MDYyLTU4LjMyODEyNiA1MC4xNjc5NjktNS40NzI2NTYgNC43ODkwNjItMTIuNTAzOTA2IDcuNDI5Njg3LTE5Ljc4OTA2MiA3LjQyOTY4N3ptLTExMi45Njg3NS00MjUuNTIzNDM3Yy0zMS4wNjY0MDYgMC01OS42MDU0NjkgMTIuMzk4NDM3LTgwLjM2NzE4OCAzNC45MTQwNjItMjEuMDcwMzEyIDIyLjg1NTQ2OS0zMi42NzU3ODEgNTQuNDQ5MjE5LTMyLjY3NTc4MSA4OC45NjQ4NDQgMCAzNi40MTc5NjggMTMuNTM1MTU3IDY4Ljk4ODI4MSA0My44ODI4MTMgMTA1LjYwNTQ2OCAyOS4zMzIwMzEgMzUuMzk0NTMyIDcyLjk2MDkzNyA3Mi41NzQyMTkgMTIzLjQ3NjU2MiAxMTUuNjI1bC4wOTM3NS4wNzgxMjZjMTcuNjYwMTU2IDE1LjA1MDc4MSAzNy42Nzk2ODggMzIuMTEzMjgxIDU4LjUxNTYyNSA1MC4zMzIwMzEgMjAuOTYwOTM4LTE4LjI1MzkwNyA0MS4wMTE3MTktMzUuMzQzNzUgNTguNzA3MDMxLTUwLjQxNzk2OSA1MC41MTE3MTktNDMuMDUwNzgxIDk0LjEzNjcxOS04MC4yMjI2NTYgMTIzLjQ2ODc1LTExNS42MTcxODggMzAuMzQzNzUtMzYuNjE3MTg3IDQzLjg3ODkwNy02OS4xODc1IDQzLjg3ODkwNy0xMDUuNjA1NDY4IDAtMzQuNTE1NjI1LTExLjYwNTQ2OS02Ni4xMDkzNzUtMzIuNjc1NzgxLTg4Ljk2NDg0NC0yMC43NTc4MTMtMjIuNTE1NjI1LTQ5LjMwMDc4Mi0zNC45MTQwNjItODAuMzYzMjgyLTM0LjkxNDA2Mi0yMi43NTc4MTIgMC00My42NTIzNDQgNy4yMzQzNzQtNjIuMTAxNTYyIDIxLjUtMTYuNDQxNDA2IDEyLjcxODc1LTI3Ljg5NDUzMiAyOC43OTY4NzQtMzQuNjA5Mzc1IDQwLjA0Njg3NC0zLjQ1MzEyNSA1Ljc4NTE1Ny05LjUzMTI1IDkuMjM4MjgyLTE2LjI2MTcxOSA5LjIzODI4MnMtMTIuODA4NTk0LTMuNDUzMTI1LTE2LjI2MTcxOS05LjIzODI4MmMtNi43MTA5MzctMTEuMjUtMTguMTY0MDYyLTI3LjMyODEyNC0zNC42MDkzNzUtNDAuMDQ2ODc0LTE4LjQ0OTIxOC0xNC4yNjU2MjYtMzkuMzQzNzUtMjEuNS02Mi4wOTc2NTYtMjEuNXptMCAwIi8+PC9zdmc+"
          alt="like"
        />
        <img
          id="profile"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f94f7d9-b68a-445e-a003-eceb64087873/dcsohgg-6068e5ed-b130-4e90-9d0e-2818ffef14bb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGY5NGY3ZDktYjY4YS00NDVlLWEwMDMtZWNlYjY0MDg3ODczXC9kY3NvaGdnLTYwNjhlNWVkLWIxMzAtNGU5MC05ZDBlLTI4MThmZmVmMTRiYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.FShKjxx7VKMzUbJcelnUwVEpybQQi8Slrcm6XT3PvGU"
          alt="profile"
        />
      </div>
    </div>
  );
}

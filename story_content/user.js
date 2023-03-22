function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Dr2Y6ykt7r":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyZYgD4GOqfAiROfYU95BfxOl8GvqrvoKN0NkxknxaY-L9WeH_6UK4X5BjGdZUZNcFA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


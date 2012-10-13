#pragma strict

private var initialPosition = Vector3.zero;
private var sx = 1.0;
private var sy = 1.0;
private var timer = 0.0;

function Start() {
	initialPosition = transform.localPosition;
	sx = Random.Range(4.0, 6.0);
	sy = Random.Range(4.0, 6.0);
	timer = 10.0;
}

function Update() {
	timer -= Time.deltaTime;
	if (timer > 0.0) {
		var dx = 0.1 * Mathf.Sin(Time.time * sx);
		var dy = 0.1 * Mathf.Sin(Time.time * sy);
		transform.localPosition = initialPosition + Vector3(dx, dy, 0.0);
		if (timer < 1.0) renderer.material.color.a = timer;
	} else {
		Destroy(gameObject);
	}
}

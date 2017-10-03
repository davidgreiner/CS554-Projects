#version 110

varying vec3 coordinates;

void main()
{
    gl_FrontColor = gl_Color;
    coordinates = vec3(0.0, 0.0, 0.0);
	gl_Position = ftransform();
}

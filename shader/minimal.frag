#version 110

varying vec3 coordinates;

void main()
{
    float L_factor = 0.5;
    
    float red = 0.0;
    float temptemp = floor(coordinates.x / L_factor);
    //int tempred = mod(temptemp, 2.0);
    //if(tempred == 0) {
    //    red = 1.0;
    //}
//float blue = ((floor(coordinates.y / L_factor)) % 2 == 0) ? 1.0 : 0.0;
//float green = ((floor(coordinates.z / L_factor)) % 2 == 0) ? 1.0 : 0.0;
    
//vec4 color = vec3(red, green, blue, 1.0);
    
    gl_FragColor = gl_Color;
}


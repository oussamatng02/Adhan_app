<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horarios de Oración</title>
    <link rel="stylesheet" href="styles.css"> <!-- Enlace al CSS -->
    <script src="script.js" defer></script> <!-- Enlace al JavaScript -->
</head>
<body>

    <header>
        <h1>Horarios de Oración en Tanger, Morocco</h1>
        <p id="date"></p> <!-- Fecha -->
        <p id="clock"><div class="clock">
  <div>
    <div class="info date"></div>
    <div class="info day"></div>
  </div>
  <div class="dot"></div>
  <div>
    <div class="hour-hand"></div>
    <div class="minute-hand"></div>
    <div class="second-hand"></div>
  </div>
  <div>
    
    <span class="h3">3</span>
    <span class="h6">6</span>
    <span class="h9">9</span>
    <span class="h12">12</span>
  </div>
  <div class="diallines"></div>
</div>
</p> <!-- Reloj en tiempo real -->
    </header>

    <main>
        <section class="prayer-times">
            <h2>Horarios de Oración</h2>
            <table>
                <tr>
                    <th>Oración</th>
                    <th>Hora</th>
                </tr>
                <tr>
                    <td>Fajr</td>
                    <td id="fajr-time">Cargando...</td>
                </tr>
                <tr>
                    <td>Dhuhr</td>
                    <td id="dhuhr-time">Cargando...</td>
                </tr>
                <tr>
                    <td>Asr</td>
                    <td id="asr-time">Cargando...</td>
                </tr>
                <tr>
                    <td>Maghrib</td>
                    <td id="maghrib-time">Cargando...</td>
                </tr>
                <tr>
                    <td>Isha</td>
                    <td id="isha-time">Cargando...</td>
                </tr>
            </table>
        </section>
    </main>
</body>
</html>

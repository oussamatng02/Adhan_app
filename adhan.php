<?php
$city = "utrecht";
$country = "netherlands";
$apiURL = "http://api.aladhan.com/v1/timingsByCity?city=$city&country=$country&method=2";

$response = file_get_contents($apiURL);
$data = json_decode($response, false);

if ($data && isset($data->data->timings)) {
    
    $fajr = '1:42';
    $dhuhr = $data->data->timings->Dhuhr;
    $asr = $data->data->timings->Asr;
    $maghrib = $data->data->timings->Maghrib;
    $isha = $data->data->timings->Isha;

    echo json_encode([
        'fajr' => $fajr,
        'dhuhr' => $dhuhr,
        'asr' => $asr,
        'maghrib' => $maghrib,
        'isha' => $isha
    ]);
} else {
    echo json_encode(['error' => 'No se pudieron obtener los horarios de oración']);
}
?>

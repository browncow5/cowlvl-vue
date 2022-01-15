import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: '376a5b7e-fcf4-4ce5-938a-0469adc03918',
    clientToken: 'pub2c3a6651a90f063e6fee3e4753dbb8e1',
    site: 'datadoghq.com',
    service:'cowlvl-vue',
    env:'test',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'allow',
    allowedTracingOrigins: ["https://cowlvl.io", /https:\/\/.*\.cowlvl\.io/]
});
    
datadogRum.startSessionReplayRecording();

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

//
//  MicBlowViewController.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 02/01/2014.
//  Copyright (c) 2014 Miroslaw Dylag. All rights reserved.
//http://stackoverflow.com/questions/1010343/how-do-i-record-audio-on-iphone-with-avaudiorecorder
//https://github.com/AvinashP/VoiceRecorder


#import "MicBlowViewController.h"
#import <AVFoundation/AVFoundation.h>
#import <CoreAudio/CoreAudioTypes.h>

@interface MicBlowViewController ()

@end

@implementation MicBlowViewController
{
    AVAudioRecorder *recorder;
    AVAudioPlayer *audioPlayer;
    NSDictionary *editedObject;
    NSMutableDictionary *settings;

	NSString *recorderFilePath;

    int recordEncoding;
    enum
    {
        ENC_AAC = 1,
        ENC_ALAC = 2,
        ENC_IMA4 = 3,
        ENC_ILBC = 4,
        ENC_ULAW = 5,
        ENC_PCM = 6,
    } encodingTypes;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    settings = [NSDictionary dictionaryWithObjectsAndKeys:
                [NSNumber numberWithFloat: 44100.0],                 AVSampleRateKey,
                [NSNumber numberWithInt: kAudioFormatAppleLossless], AVFormatIDKey,
                [NSNumber numberWithInt: 1],                         AVNumberOfChannelsKey,
                [NSNumber numberWithInt: AVAudioQualityMax],         AVEncoderAudioQualityKey,
                nil];
     recordEncoding = ENC_AAC;
    
    
	// Do any additional setup after loading the view.
}

- (IBAction)stopRecordingAction:(id)sender {
}

- (IBAction)startRecordingAction:(id)sender {
    AVAudioSession *audioSession = [AVAudioSession sharedInstance];
    NSError *err = nil;
    [audioSession setCategory :AVAudioSessionCategoryPlayAndRecord error:&err];
    if(err){
        NSLog(@"audioSession: %@ %d %@", [err domain], [err code], [[err userInfo] description]);
        return;
    }
    [audioSession setActive:YES error:&err];
    err = nil;
    if(err){
        NSLog(@"audioSession: %@ %d %@", [err domain], [err code], [[err userInfo] description]);
        return;
    }

}

@end

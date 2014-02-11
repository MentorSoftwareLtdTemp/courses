//
//  MicBlowViewController.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 02/01/2014.
//  Copyright (c) 2014 Miroslaw Dylag. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <AVFoundation/AVFoundation.h>
#import <CoreAudio/CoreAudioTypes.h>

@interface MicBlowViewController : UIViewController
{
}
@property (weak, nonatomic) IBOutlet UIButton *stopRecording;
@property (weak, nonatomic) IBOutlet UIButton *buttonRecord;
@end

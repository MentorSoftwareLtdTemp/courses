//
//  MSKeyChain.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 24/01/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Lockbox.h"

@interface MSKeyChain : NSObject

+(MSKeyChain *) sharedMSKeyChain;
@property BOOL isPasscodeInKeyChain;




@end
